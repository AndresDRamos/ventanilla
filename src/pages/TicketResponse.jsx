import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { supabase } from '../supabase/supabase.config.jsx';
import { formatMexicanDate } from '../utils/dateUtils.js';

const TicketResponse = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [responding, setResponding] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Cargar ticket usando el token
  useEffect(() => {
    const loadTicket = async () => {
      try {
        setLoading(true);
        
        // Validar token y obtener ticket
        const { data: tokenData, error: tokenError } = await supabase
          .from('ticket_tokens')
          .select(`
            *,
            tickets (
              *,
              empleados (nombre, plantas (planta)),
              tiposSolicitud (tipoSolicitud),
              prioridades (prioridad),
              estados (estado)
            ),
            usuarios (nombre, correo)
          `)
          .eq('token', token)
          .eq('usado', false)
          .gt('fecha_expiracion', new Date().toISOString())
          .single();

        if (tokenError || !tokenData) {
          if (tokenError?.code === 'PGRST116') {
            throw new Error('Enlace inválido, expirado o ya utilizado. Este ticket puede haber sido reasignado a otro usuario.');
          }
          throw new Error('Enlace inválido, expirado o ya utilizado');
        }

        // Verificar que el ticket esté en estado delegado (idEstado = 2)
        if (tokenData.tickets.idEstado !== 2) {
          throw new Error('Este ticket ya no está disponible para responder');
        }

        // VALIDACIÓN CRÍTICA: Verificar que este usuario tiene la delegación activa
        const { data: delegacionActiva, error: delegacionError } = await supabase
          .from('delegaciones')
          .select('bActivo')
          .eq('idTicket', tokenData.tickets.idTicket)
          .eq('idUsuario', tokenData.id_usuario)
          .eq('bActivo', true)
          .single();

        if (delegacionError || !delegacionActiva) {
          throw new Error('Este ticket ha sido reasignado a otro usuario. Tu enlace ya no es válido.');
        }

        // Obtener la fecha de creación del ticket desde seguimientos (idEstado = 1)
        const { data: fechaCreacion, error: fechaError } = await supabase
          .from('seguimientos')
          .select('fecha')
          .eq('idTicket', tokenData.tickets.idTicket)
          .eq('idEstado', 1)
          .order('fecha', { ascending: true })
          .limit(1)
          .single();

        // Agregar la fecha de creación al ticket
        if (fechaCreacion && !fechaError) {
          tokenData.tickets.fechaCreacion = fechaCreacion.fecha;
        }

        setTicket(tokenData);
        
      } catch (err) {
        console.error('Error cargando ticket:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      loadTicket();
    }
  }, [token]);

  // Enviar respuesta y cerrar ticket
  const handleSubmitResponse = async () => {
    if (!response.trim()) {
      setError('Por favor escribe una respuesta');
      return;
    }

    try {
      setResponding(true);
      setError(null);

      // 1. Crear atención (respuesta)
      const { error: atencionError } = await supabase
        .from('atenciones')
        .insert({
          idTicket: ticket.tickets.idTicket,
          respuesta: response.trim()
        });

      if (atencionError) throw atencionError;

      // 2. Crear seguimiento (ticket atendido)
      const { error: seguimientoError } = await supabase
        .from('seguimientos')
        .insert({
          idTicket: ticket.tickets.idTicket,
          idUsuario: ticket.id_usuario,
          idEstado: 3 // Atendido
        });

      if (seguimientoError) throw seguimientoError;

      // 3. Actualizar estado del ticket a "atendido"
      const { error: ticketError } = await supabase
        .from('tickets')
        .update({ idEstado: 3 })
        .eq('idTicket', ticket.tickets.idTicket);

      if (ticketError) throw ticketError;

      // 4. Marcar token como usado
      const { error: tokenError } = await supabase
        .from('ticket_tokens')
        .update({ usado: true })
        .eq('token', token);

      if (tokenError) throw tokenError;

      // 5. Desactivar delegación
      const { error: delegacionError } = await supabase
        .from('delegaciones')
        .update({ bActivo: false })
        .eq('idTicket', ticket.tickets.idTicket)
        .eq('idUsuario', ticket.id_usuario);

      if (delegacionError) throw delegacionError;

      setSuccess(true);
      
      // Redirigir después de 3 segundos
      setTimeout(() => {
        window.close(); // Intentar cerrar ventana
        navigate('/'); // O redirigir a inicio
      }, 3000);

    } catch (err) {
      console.error('Error enviando respuesta:', err);
      setError('Error enviando la respuesta: ' + err.message);
    } finally {
      setResponding(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingCard>
          <LoadingSpinner />
          <p>Cargando ticket...</p>
        </LoadingCard>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorCard>
          <ErrorIcon>❌</ErrorIcon>
          <ErrorTitle>Enlace No Válido</ErrorTitle>
          <ErrorMessage>{error}</ErrorMessage>
          <ErrorSubtext>
            Este enlace puede haber expirado, ya fue utilizado, o el ticket ya no está disponible para responder.
          </ErrorSubtext>
        </ErrorCard>
      </Container>
    );
  }

  if (success) {
    return (
      <Container>
        <SuccessCard>
          <SuccessIcon>✅</SuccessIcon>
          <SuccessTitle>¡Respuesta Enviada!</SuccessTitle>
          <SuccessMessage>
            Tu respuesta ha sido registrada exitosamente. El ticket ha sido marcado como atendido.
          </SuccessMessage>
          <SuccessSubtext>
            Esta ventana se cerrará automáticamente en unos segundos...
          </SuccessSubtext>
        </SuccessCard>
      </Container>
    );
  }

  return (
    <Container>
      <TicketCard>
        <Header>
          <HeaderContent>
            <TicketNumber>Ticket #{ticket.tickets.idTicket}</TicketNumber>
          </HeaderContent>
        </Header>

        <TicketDetails>
          <DetailRow>
            <DetailLabel>Empleado:</DetailLabel>
            <DetailValue>{ticket.tickets.empleados?.nombre || 'No especificado'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Planta:</DetailLabel>
            <DetailValue>{ticket.tickets.empleados?.plantas?.planta || 'No especificada'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Tipo:</DetailLabel>
            <DetailValue>{ticket.tickets.tiposSolicitud?.tipoSolicitud || 'No especificado'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Fecha:</DetailLabel>
            <DetailValue>{formatMexicanDate(ticket.tickets.fechaCreacion)}</DetailValue>
          </DetailRow>
        </TicketDetails>

        <DescriptionSection>
          <SectionTitle>Descripción del Problema</SectionTitle>
          <Description>{ticket.tickets.descripcion}</Description>
        </DescriptionSection>

        <ResponseSection>
          <SectionTitle>Tu Respuesta</SectionTitle>
          <ResponseTextarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Escribe aquí tu respuesta o solución al problema..."
            rows={4}
            disabled={responding}
          />
          <CharacterCount $isNearLimit={response.length > 400}>
            {response.length}/500 caracteres
          </CharacterCount>
        </ResponseSection>

        {error && (
          <ErrorAlert>
            ❌ {error}
          </ErrorAlert>
        )}

        <ActionSection>
          <SubmitButton 
            onClick={handleSubmitResponse}
            disabled={!response.trim() || responding}
          >
            {responding ? 'Enviando...' : 'Enviar Respuesta y Cerrar Ticket'}
          </SubmitButton>
          <HelpText>
            Una vez enviada la respuesta, el ticket se marcará como atendido y este enlace quedará deshabilitado.
          </HelpText>
        </ActionSection>

        <Footer>
          <FooterText>
            Respondiendo como: <strong>{ticket.usuarios.nombre}</strong> ({ticket.usuarios.correo})
          </FooterText>
        </Footer>
      </TicketCard>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
  @media (max-width: 768px) {
    padding: 5px;
    align-items: flex-start;
    padding-top: 20px;
  }
`;

const TicketCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--color-shadow);
  max-width: 700px;
  width: 100%;
  overflow: hidden;
  margin: auto;
  
  @media (max-width: 768px) {
    margin: 0;
    border-radius: 8px;
    max-width: 100%;
  }
`;

const Header = styled.div`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    gap: 10px;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const TicketNumber = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;


const TicketDetails = styled.div`
  padding: 20px;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const DetailRow = styled.div`
  display: flex;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 6px;
  }
`;

const DetailLabel = styled.span`
  font-weight: 600;
  color: #374151;
  width: 120px;
  flex-shrink: 0;
`;

const DetailValue = styled.span`
  color: #1f2937;
  flex: 1;
`;

const DescriptionSection = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SectionTitle = styled.h3`
  margin: 0 0 10px 0;
  color: #1f2937;
  font-size: 16px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Description = styled.div`
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 6px;
  padding: 15px;
  color: #92400e;
  font-style: italic;
  line-height: 1.5;
  font-size: 14px;
  
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 13px;
  }
`;

const ResponseSection = styled.div`
  padding: 20px;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ResponseTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  font-family: inherit;
  min-height: 100px;
  
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 13px;
    min-height: 80px;
  }
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &:disabled {
    background: #f3f4f6;
    color: #6b7280;
  }
`;

const CharacterCount = styled.div`
  text-align: right;
  margin-top: 8px;
  font-size: 14px;
  color: ${props => props.$isNearLimit ? '#ef4444' : '#6b7280'};
`;

const ActionSection = styled.div`
  padding: 20px;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }
  
  &:hover:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
  }
  
  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const HelpText = styled.p`
  text-align: center;
  margin: 10px 0 0 0;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Footer = styled.div`
  background: #e5e7eb;
  padding: 15px 20px;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  text-align: center;
  color: #374151;
  font-size: 13px;
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const LoadingCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
  }
`;

const LoadingSpinner = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid #e5e7eb;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    margin: 0 auto 12px auto;
  }
`;

const ErrorCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  max-width: 500px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
    max-width: 100%;
  }
`;

const ErrorIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

const ErrorTitle = styled.h2`
  color: #dc2626;
  margin: 0 0 15px 0;
  font-size: 24px;
`;

const ErrorMessage = styled.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`;

const ErrorSubtext = styled.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`;

const SuccessCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px var(--color-shadow);
  max-width: 500px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    border-radius: 8px;
    max-width: 100%;
  }
`;

const SuccessIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

const SuccessTitle = styled.h2`
  color: #059669;
  margin: 0 0 15px 0;
  font-size: 24px;
`;

const SuccessMessage = styled.p`
  color: #374151;
  margin: 0 0 15px 0;
  font-size: 16px;
  line-height: 1.5;
`;

const SuccessSubtext = styled.p`
  color: #6b7280;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
`;

const ErrorAlert = styled.div`
  background: #fef2f2;
  border: 1px solid #fca5a5;
  color: #dc2626;
  padding: 12px;
  margin: 0 20px;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  
  @media (max-width: 768px) {
    margin: 0 15px;
    padding: 10px;
    font-size: 13px;
  }
`;

export default TicketResponse;
