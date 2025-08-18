import { useState } from "react";
import styled from "styled-components";
import {
  useEsquemasPago,
  useTiposSolicitud,
  usePrioridades,
  useTickets,
} from "../utils/useTickets.js";

const EmployeeQuestionnaire = ({
  employeeData,
  onTicketSubmitted,
  onLogout,
  onBack,
}) => {
  const [formData, setFormData] = useState({
    idEsquemaPago: "",
    idTipoSolicitud: "",
    descripcion: "",
    idPrioridad: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Hooks para obtener datos
  const { esquemas, loading: loadingEsquemas } = useEsquemasPago();
  const { tipos, loading: loadingTipos } = useTiposSolicitud();
  const { prioridades, loading: loadingPrioridades } = usePrioridades();
  const { createTicket, loading: creatingTicket } = useTickets();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpiar error del campo si existe
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.idEsquemaPago)
      errors.idEsquemaPago = "Debe seleccionar un esquema de pago";
    if (!formData.idTipoSolicitud)
      errors.idTipoSolicitud = "Debe seleccionar un tipo de solicitud";
    if (!formData.descripcion.trim())
      errors.descripcion = "Debe proporcionar una descripción";
    if (!formData.idPrioridad)
      errors.idPrioridad = "Debe seleccionar una prioridad";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const ticketData = {
      idEmpleado: employeeData.idEmpleado,
      idEsquemaPago: parseInt(formData.idEsquemaPago),
      idTipoSolicitud: parseInt(formData.idTipoSolicitud),
      descripcion: formData.descripcion.trim(),
      idPrioridad: parseInt(formData.idPrioridad),
    };

    const result = await createTicket(ticketData);

    if (result.success) {
      console.log("Ticket creado exitosamente:", result.ticket);
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
      {/* Formulario del cuestionario */}
      <FormContainer>
        <FormHeader>
          {onBack && (
            <BackButton onClick={onBack} type="button" title="Volver">
              ← Volver
            </BackButton>
          )}
          <FormTitle>Crear Nueva Solicitud</FormTitle>
        </FormHeader>

        <Form onSubmit={handleSubmit}>
          <FormGrid>
            {/* Selección de Esquema de Pago */}
            <FormGroup>
              <Label>Esquema de Pago *</Label>
              <Select
                value={formData.idEsquemaPago}
                onChange={(e) =>
                  handleInputChange("idEsquemaPago", e.target.value)
                }
                hasError={formErrors.idEsquemaPago}
              >
                <option value="">Seleccione un esquema...</option>
                {esquemas.map((esquema) => (
                  <option
                    key={esquema.idEsquemaPago}
                    value={esquema.idEsquemaPago}
                  >
                    {esquema.esquemaPago}
                  </option>
                ))}
              </Select>
              {formErrors.idEsquemaPago && (
                <ErrorText>{formErrors.idEsquemaPago}</ErrorText>
              )}
            </FormGroup>

            {/* Selección de Tipo de Solicitud */}
            <FormGroup>
              <Label>Tipo de Solicitud *</Label>
              <Select
                value={formData.idTipoSolicitud}
                onChange={(e) =>
                  handleInputChange("idTipoSolicitud", e.target.value)
                }
                hasError={formErrors.idTipoSolicitud}
              >
                <option value="">Seleccione un tipo...</option>
                {tipos
                  .sort((a, b) => a.idTipoSolicitud - b.idTipoSolicitud)
                  .map((tipo) => (
                    <option
                      key={tipo.idTipoSolicitud}
                      value={tipo.idTipoSolicitud}
                    >
                      {tipo.tipoSolicitud}
                    </option>
                  ))}
              </Select>
              {formErrors.idTipoSolicitud && (
                <ErrorText>{formErrors.idTipoSolicitud}</ErrorText>
              )}
            </FormGroup>

            {/* Selección de Prioridad */}
            <FormGroup>
              <Label>Prioridad *</Label>
              <Select
                value={formData.idPrioridad}
                onChange={(e) =>
                  handleInputChange("idPrioridad", e.target.value)
                }
                hasError={formErrors.idPrioridad}
              >
                <option value="">Seleccione una prioridad...</option>
                {prioridades.map((prioridad) => (
                  <option
                    key={prioridad.idPrioridad}
                    value={prioridad.idPrioridad}
                  >
                    {prioridad.prioridad}
                  </option>
                ))}
              </Select>
              {formErrors.idPrioridad && (
                <ErrorText>{formErrors.idPrioridad}</ErrorText>
              )}
            </FormGroup>
          </FormGrid>

          {/* Descripción del Problema */}
          <DescriptionSection>
            <Label>Descripción del Problema *</Label>
            <TextArea
              rows="3"
              placeholder="Describe detalladamente tu solicitud o problema..."
              value={formData.descripcion}
              onChange={(e) => handleInputChange("descripcion", e.target.value)}
              hasError={formErrors.descripcion}
            />
            {formErrors.descripcion && (
              <ErrorText>{formErrors.descripcion}</ErrorText>
            )}
          </DescriptionSection>

          <SubmitButton type="submit" disabled={creatingTicket}>
            {creatingTicket ? "📋 Creando ticket..." : "📋 Crear Ticket"}
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0.5rem;
    max-width: 100vw;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  border: 2px solid
    ${(props) =>
      props.hasError ? "var(--color-danger)" : "var(--color-secondary)"};
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
  border: 2px solid
    ${(props) =>
      props.hasError ? "var(--color-danger)" : "var(--color-secondary)"};
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


const BackButton = styled.button`
  background: var(--color-secondary);
  color: black;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;


  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-2px);
  }
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

const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

const FormTitle = styled.h2`
  color: var(--color-primary);
  margin: 0;
  font-size: 1.1rem;
  flex: 1;
  text-align: center;

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`;

export default EmployeeQuestionnaire;
