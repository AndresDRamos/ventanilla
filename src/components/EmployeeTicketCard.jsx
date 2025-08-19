import styled from "styled-components";

const EmployeeTicketCard = ({
  ticket,
  formatDate,
  getPriorityColor,
  isResolved = false
}) => {
  // Función para formatear fecha corta (dd/mm/aa, hh:mm)
  const formatShortDate = (dateString) => {
    console.log('formatShortDate - Raw dateString:', dateString);
    const date = new Date(dateString);
    console.log('formatShortDate - Date object:', date);
    
    // Solo formatear sin conversión de zona horaria
    const mexicanDate = date.toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "2-digit", 
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
    
    console.log('formatShortDate - Formatted:', mexicanDate);
    return mexicanDate.replace(',', ',');
  };

  // Función para preparar la descripción (remover saltos de línea)
  const getTruncatedDescription = (text) => {
    if (!text) return "";
    // Reemplazar saltos de línea con espacios para una mejor visualización en una línea
    return text.replace(/\n/g, " ").trim();
  };

  return (
    <Card isResolved={isResolved}>
      <TopBar>
        <LeftSection>
          <PriorityBadge priority={getPriorityColor(ticket.idPrioridad)}>
            {ticket.prioridades?.prioridad}
          </PriorityBadge>
          <TicketNumber>#{ticket.idTicket}</TicketNumber>
        </LeftSection>

        <RightSection>
          <StatusBadge isResolved={isResolved}>
            {isResolved ? "Resuelto" : "Pendiente"}
          </StatusBadge>
        </RightSection>
      </TopBar>

      <Content>
        <InfoRow>
          <InfoLabel>Tipo:</InfoLabel>
          <InfoValue>{ticket.tiposSolicitud?.tipoSolicitud}</InfoValue>
        </InfoRow>
        
        <InfoRow>
          <InfoLabel>Planta:</InfoLabel>
          <InfoValue>{ticket.empleados?.plantas?.planta}</InfoValue>
        </InfoRow>
        
        <InfoRow>
          <InfoLabel>Fecha creación:</InfoLabel>
          <InfoValue>{formatDate(ticket.fechaCreacion)}</InfoValue>
        </InfoRow>
        
        <DescriptionSection>
          <InfoLabel>Descripción:</InfoLabel>
          <Description>
            {getTruncatedDescription(ticket.descripcion)}
          </Description>
        </DescriptionSection>

        {isResolved && ticket.atenciones && ticket.atenciones.length > 0 && (
          <>
            <InfoRow>
              <InfoLabel>Fecha resolución:</InfoLabel>
              <InfoValue>
                {formatShortDate(ticket.atenciones[0].fechaAtencion)}
              </InfoValue>
            </InfoRow>
            
            <ResponseSection>
              <InfoLabel>Respuesta:</InfoLabel>
              <ResponseContent>
                {ticket.atenciones[0].respuesta}
              </ResponseContent>
              {ticket.atenciones[0].usuarios?.nombre && (
                <ResponsableText>
                  Atendido por: {ticket.atenciones[0].usuarios.nombre}
                </ResponsableText>
              )}
            </ResponseSection>
          </>
        )}
      </Content>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border-left: 4px solid ${props => props.isResolved ? '#28a745' : '#ffc107'};

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  padding: 1rem;
`;

const TicketNumber = styled.h3`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`;

const PriorityBadge = styled.span`
  background-color: ${(props) => props.priority};
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const StatusBadge = styled.span`
  background-color: ${props => props.isResolved ? '#28a745' : '#ffc107'};
  color: ${props => props.isResolved ? 'white' : '#212529'};
  padding: 0.25rem 0.6rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
`;

const InfoLabel = styled.span`
  color: var(--color-primary);
  font-weight: 600;
  min-width: 80px;
`;

const InfoValue = styled.span`
  color: var(--color-gray);
  text-align: right;
  flex: 1;
  margin-left: 1rem;
`;

const DescriptionSection = styled.div`
  margin-bottom: 0.25rem;
`;

const Description = styled.div`
  margin-top: 0.5rem;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  color: var(--color-gray);
  line-height: 1.4;
  border-left: 3px solid var(--color-accent);
  font-size: 0.9rem;
  
  /* Limitar a una sola línea */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ResponseSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #dee2e6;
`;

const ResponseContent = styled.div`
  margin-top: 0.5rem;
  padding: 0.8rem;
  background: #d4edda;
  border-radius: 6px;
  color: #155724;
  line-height: 1.4;
  border-left: 3px solid #28a745;
  font-size: 0.9rem;
`;

const ResponsableText = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #6c757d;
  font-style: italic;
`;

export default EmployeeTicketCard;
