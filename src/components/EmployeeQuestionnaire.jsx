import { useState } from 'react';
import styled from 'styled-components';
import { useEsquemasPago, useTiposSolicitud, usePrioridades, useTickets } from '../utils/useTickets.js';

const EmployeeQuestionnaire = ({ employeeData, onTicketSubmitted, onLogout }) => {
  const [formData, setFormData] = useState({
    idEsquemaPago: '',
    idTipoSolicitud: '',
    descripcion: '',
    idPrioridad: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  
  // Hooks para obtener datos
  const { esquemas, loading: loadingEsquemas } = useEsquemasPago();
  const { tipos, loading: loadingTipos } = useTiposSolicitud();
  const { prioridades, loading: loadingPrioridades } = usePrioridades();
  const { createTicket, loading: creatingTicket } = useTickets();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error del campo si existe
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.idEsquemaPago) errors.idEsquemaPago = 'Debe seleccionar un esquema de pago';
    if (!formData.idTipoSolicitud) errors.idTipoSolicitud = 'Debe seleccionar un tipo de solicitud';
    if (!formData.descripcion.trim()) errors.descripcion = 'Debe proporcionar una descripción';
    if (!formData.idPrioridad) errors.idPrioridad = 'Debe seleccionar una prioridad';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const ticketData = {
      codigoEmpleado: employeeData.codigoEmpleado,
      empleado: employeeData.empleado,
      idPlanta: parseInt(employeeData.idPlanta), // Ahora viene del empleado
      idEsquemaPago: parseInt(formData.idEsquemaPago),
      idTipoSolicitud: parseInt(formData.idTipoSolicitud),
      descripcion: formData.descripcion.trim(),
      idPrioridad: parseInt(formData.idPrioridad)
    };

    const result = await createTicket(ticketData);
    
    if (result.success) {
      console.log('Ticket creado exitosamente:', result.ticket);
      onTicketSubmitted(result.ticket);
    }
  };

  const isLoading = loadingEsquemas || loadingTipos || loadingPrioridades;

  if (isLoading) {
    return (
      <Container>
        <LoadingMessage>Cargando formulario...</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      {/* Header con información del empleado */}
      <EmployeeHeader>
        <EmployeeTitle>
          #{employeeData.codigoEmpleado} | {employeeData.empleado}
        </EmployeeTitle>
        <LogoutButton onClick={onLogout} type="button" title="Cerrar sesión">
          🚪
        </LogoutButton>
      </EmployeeHeader>

      {/* Info Row con beneficios en una sola fila */}
      <BenefitsRow>
        <BenefitCard>
          <BenefitIcon>⚡</BenefitIcon>
          <BenefitTitle>Fácil de usar</BenefitTitle>
          <BenefitDescription>
            Interfaz intuitiva y simple para crear tu solicitud
          </BenefitDescription>
        </BenefitCard>
        
        <BenefitCard>
          <BenefitIcon>🚀</BenefitIcon>
          <BenefitTitle>Respuesta rápida</BenefitTitle>
          <BenefitDescription>
            Procesamos tu solicitud de manera eficiente
          </BenefitDescription>
        </BenefitCard>
        
        <BenefitCard>
          <BenefitIcon>📋</BenefitIcon>
          <BenefitTitle>Seguimiento</BenefitTitle>
          <BenefitDescription>
            Mantente informado del estado de tu solicitud
          </BenefitDescription>
        </BenefitCard>
      </BenefitsRow>

      {/* Formulario del cuestionario */}
      <FormContainer>
        <FormTitle>Crear Nueva Solicitud</FormTitle>
        
        <Form onSubmit={handleSubmit}>
        <FormGrid>
          {/* Selección de Esquema de Pago */}
          <FormGroup>
            <Label>Esquema de Pago *</Label>
            <Select
              value={formData.idEsquemaPago}
              onChange={(e) => handleInputChange('idEsquemaPago', e.target.value)}
              hasError={formErrors.idEsquemaPago}
            >
              <option value="">Seleccione un esquema...</option>
              {esquemas.map(esquema => (
                <option key={esquema.idEsquemaPago} value={esquema.idEsquemaPago}>
                  {esquema.esquemaPago}
                </option>
              ))}
            </Select>
            {formErrors.idEsquemaPago && <ErrorText>{formErrors.idEsquemaPago}</ErrorText>}
          </FormGroup>

          {/* Selección de Tipo de Solicitud */}
          <FormGroup>
            <Label>Tipo de Solicitud *</Label>
            <Select
              value={formData.idTipoSolicitud}
              onChange={(e) => handleInputChange('idTipoSolicitud', e.target.value)}
              hasError={formErrors.idTipoSolicitud}
            >
              <option value="">Seleccione un tipo...</option>
              {tipos.map(tipo => (
                <option key={tipo.idTipoSolicitud} value={tipo.idTipoSolicitud}>
                  {tipo.tipoSolicitud}
                </option>
              ))}
            </Select>
            {formErrors.idTipoSolicitud && <ErrorText>{formErrors.idTipoSolicitud}</ErrorText>}
          </FormGroup>

          {/* Selección de Prioridad */}
          <FormGroup>
            <Label>Prioridad *</Label>
            <Select
              value={formData.idPrioridad}
              onChange={(e) => handleInputChange('idPrioridad', e.target.value)}
              hasError={formErrors.idPrioridad}
            >
              <option value="">Seleccione una prioridad...</option>
              {prioridades.map(prioridad => (
                <option key={prioridad.idPrioridad} value={prioridad.idPrioridad}>
                  {prioridad.prioridad}
                </option>
              ))}
            </Select>
            {formErrors.idPrioridad && <ErrorText>{formErrors.idPrioridad}</ErrorText>}
          </FormGroup>
        </FormGrid>

        {/* Descripción del Problema */}
        <DescriptionSection>
          <Label>Descripción del Problema *</Label>
          <TextArea
            rows="3"
            placeholder="Describe detalladamente tu solicitud o problema..."
            value={formData.descripcion}
            onChange={(e) => handleInputChange('descripcion', e.target.value)}
            hasError={formErrors.descripcion}
          />
          {formErrors.descripcion && <ErrorText>{formErrors.descripcion}</ErrorText>}
        </DescriptionSection>

        <SubmitButton type="submit" disabled={creatingTicket}>
          {creatingTicket ? '📋 Creando ticket...' : '📋 Crear Ticket'}
        </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  max-height: 100vh;
  margin: 0 auto;
  padding: 1rem 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-gray);
  font-size: 1.1rem;
`;

const Form = styled.form`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.3rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

const Select = styled.select`
  padding: 0.6rem;
  border: 2px solid ${props => props.hasError ? 'var(--color-danger)' : 'var(--color-secondary)'};
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  background-color: var(--color-white);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const TextArea = styled.textarea`
  padding: 0.6rem;
  border: 2px solid ${props => props.hasError ? 'var(--color-danger)' : 'var(--color-secondary)'};
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  min-height: 60px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const ErrorText = styled.span`
  color: var(--color-danger);
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--color-accent);
  color: var(--color-white);
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-family: inherit;
  margin-top: auto;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`;

// Nuevos estilos para el header del empleado y los beneficios
const EmployeeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.8rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 8px;
  color: white;
  position: relative;
  max-width: 1000px;
  margin: 0 auto 1rem auto;
  width: 100%;
`;

const EmployeeTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.5px;
  flex: 1;
  text-align: center;
`;

const LogoutButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: absolute;
  right: 0.8rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const BenefitsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  max-width: 1000px;
  margin: 0 auto 1rem auto;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--color-shadow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

const BenefitIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
`;

const BenefitTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-primary);
  margin: 0 0 0.3rem 0;
`;

const BenefitDescription = styled.p`
  font-size: 0.8rem;
  color: var(--color-gray);
  margin: 0;
  line-height: 1.3;
`;

const FormContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--color-shadow);
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
`;

const FormTitle = styled.h2`
  text-align: center;
  color: var(--color-primary);
  margin: 0;
  padding: 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  font-size: 1.1rem;
`;

export default EmployeeQuestionnaire;
