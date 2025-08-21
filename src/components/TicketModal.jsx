import { useState } from "react";
import styled from "styled-components";
import { formatMexicanDate } from "../utils/dateUtils.js";
import { useUsers } from "../hooks/useUsers.js";

const TicketModal = ({
  ticket,
  isOpen,
  onClose,
  mode = "view", // "view", "response", "attend"
  onSubmit,
  onDelegate,
  onReassign = null, // Nueva función para re-asignar
  onSelfAssign = null, // Nueva función para autoasignarse
  loading = false,
  usuarioQueAtendio = null,
  currentUser = null, // Usuario actual que está usando el modal
}) => {
  const [respuesta, setRespuesta] = useState("");
  const [actionType, setActionType] = useState(""); // "respond" | "delegate" | ""
  const [selectedUser, setSelectedUser] = useState("");

  const { users } = useUsers();

  const handleSubmit = () => {
    if (actionType === "respond") {
      if (!respuesta.trim()) {
        alert("Debe ingresar una respuesta");
        return;
      }
      onSubmit?.(respuesta.trim(), "respond");
    } else if (actionType === "delegate") {
      if (!selectedUser) {
        alert("Debe seleccionar un usuario para delegar");
        return;
      }
      onDelegate?.(selectedUser);
    } else if (actionType === "cancel") {
      if (!respuesta.trim()) {
        alert("Debe ingresar el motivo de cancelación");
        return;
      }
      onSubmit?.(respuesta.trim(), "cancel");
    } else if (actionType === "reassign") {
      if (!selectedUser) {
        alert("Debe seleccionar un usuario para re-asignar");
        return;
      }
      onReassign?.(selectedUser);
    } else if (actionType === "selfassign") {
      if (!respuesta.trim()) {
        alert("Debe ingresar una respuesta");
        return;
      }
      // Primero autoasignar, luego responder
      onSelfAssign?.();
      // La respuesta se maneja como una respuesta normal después de autoasignar
      onSubmit?.(respuesta.trim(), "respond");
    } else {
      // Modo original para compatibilidad
      if (!respuesta.trim() && mode === "attend") {
        alert("Debe ingresar una respuesta");
        return;
      }
      onSubmit?.(respuesta.trim());
    }
  };

  const handleClose = () => {
    setRespuesta("");
    setActionType("");
    setSelectedUser("");
    onClose?.();
  };

  const handleActionChange = (newActionType) => {
    // Limpiar estado previo
    setRespuesta("");
    setSelectedUser("");
    setActionType(newActionType);
  };

  if (!isOpen || !ticket) return null;

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          <HeaderContent>
            <PriorityBadge
              $priority={ticket.prioridades?.prioridad?.toLowerCase()}
            >
              {ticket.prioridades?.prioridad}
            </PriorityBadge>
            <h3>#{ticket.idTicket}</h3>
          </HeaderContent>
          <CloseButton onClick={handleClose}>×</CloseButton>
        </ModalHeader>

        <ModalBody>
          {/* Información del empleado en formato amigable */}
          <EmployeeInfo>
            <EmployeeName>
              {ticket.empleados?.nombre} ({ticket.empleados?.codigoEmpleado}) -{" "}
              {ticket.empleados?.plantas?.planta}
            </EmployeeName>
          </EmployeeInfo>
          {/* Fecha de generación del ticket */}
          <DateContainer>
            <DateLabel>Fecha de generación:</DateLabel>{" "}
            <DateValue>
              {ticket.seguimientos?.find((s) => s.idEstado === 1)?.fecha
                ? formatMexicanDate(
                    ticket.seguimientos.find((s) => s.idEstado === 1).fecha
                  )
                : "No disponible"}
            </DateValue>
          </DateContainer>

          {/* Tipo de solicitud como título */}
          <RequestTitle>Tipo: {ticket.tiposSolicitud?.tipoSolicitud}</RequestTitle>

          {/* Descripción */}
          <DescriptionSection>
            <DescriptionText>{ticket.descripcion}</DescriptionText>
          </DescriptionSection>

          {/* Información de delegación para administradores (idRol 1 y 2) */}
          {mode === "attend" &&
            ticket.idEstado === 2 &&
            currentUser &&
            (currentUser.idRol === 1 || currentUser.idRol === 2) &&
            ticket.delegaciones &&
            ticket.delegaciones.length > 0 && (
              <DelegationInfo>
                {ticket.delegaciones
                  .filter((d) => d.bActivo === true)
                  .map((delegacion) => (
                    <DelegationDetail key={delegacion.idDelegacion}>
                      <strong>Reasignado a:</strong>{" "}
                      {delegacion.usuarios?.nombre || "Usuario desconocido"}
                    </DelegationDetail>
                  ))}
              </DelegationInfo>
            )}

          {/* Botones de acción para tickets delegados (idEstado = 2) - Solo para administradores (idRol 1 y 2) */}
          {mode === "attend" &&
            ticket.idEstado === 2 &&
            currentUser &&
            (currentUser.idRol === 1 || currentUser.idRol === 2) && (
              <ActionButtonsRow>
                <ActionButton
                  $active={actionType === "reassign"}
                  onClick={() => handleActionChange("reassign")}
                >
                  Re-asignar
                </ActionButton>
                <ActionButton
                  $active={actionType === "selfassign"}
                  onClick={() => handleActionChange("selfassign")}
                >
                  Autoasignar
                </ActionButton>
              </ActionButtonsRow>
            )}

          {/* Re-asignación de ticket */}
          {actionType === "reassign" && (
            <DelegateSection>
              <DelegateLabel>Re-asignar a:</DelegateLabel>
              <UserSelect
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
              >
                <option value="">Seleccione un usuario</option>
                {users
                  .filter((user) => {
                    // Excluir usuarios que ya tienen el ticket asignado
                    const usuarioActualAsignado =
                      ticket.delegaciones
                        ?.filter((d) => d.bActivo === true)
                        ?.map((d) => d.usuarios?.idUsuario) || [];

                    return (
                      user.idRol === 3 &&
                      !usuarioActualAsignado.includes(user.idUsuario)
                    );
                  })
                  .map((user) => (
                    <option key={user.idUsuario} value={user.idUsuario}>
                      {user.nombre}
                    </option>
                  ))}
              </UserSelect>
            </DelegateSection>
          )}

          {/* Respuesta directa para autoasignación */}
          {actionType === "selfassign" && (
            <ResponseSection>
              <ResponseLabel>
                {ticket.idEstado === 5 ? "Su motivo de cancelación:" : "Su respuesta:"}
              </ResponseLabel>
              <ResponseTextArea
                rows="4"
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}
                placeholder={
                  ticket.idEstado === 5 
                    ? "Escriba su motivo de cancelación..." 
                    : "Escriba su respuesta al ticket..."
                }
              />
            </ResponseSection>
          )}

          {/* Nueva interfaz para administradores con tickets en estado 1 (sin responder/delegar) */}
          {mode === "attend" && ticket.idEstado === 1 && (
            <>
              <ActionButtonsRow>
                <ActionButton
                  $active={actionType === "respond"}
                  onClick={() => handleActionChange("respond")}
                >
                  Responder
                </ActionButton>
                <ActionButton
                  $active={actionType === "delegate"}
                  onClick={() => handleActionChange("delegate")}
                >
                  Reasignar
                </ActionButton>
                <ActionButton
                  $active={actionType === "cancel"}
                  onClick={() => handleActionChange("cancel")}
                >
                  Cancelar
                </ActionButton>
              </ActionButtonsRow>

              {actionType === "respond" && (
                <ResponseSection>
                  <ResponseLabel>
                    {ticket.idEstado === 5 ? "Motivo de cancelación:" : "Respuesta:"}
                  </ResponseLabel>
                  <ResponseTextArea
                    rows="4"
                    value={respuesta}
                    onChange={(e) => setRespuesta(e.target.value)}
                    placeholder={
                      ticket.idEstado === 5 
                        ? "Escriba el motivo de cancelación..." 
                        : "Escriba su respuesta al ticket..."
                    }
                  />
                </ResponseSection>
              )}

              {actionType === "delegate" && (
                <DelegateSection>
                  <DelegateLabel>Delegar a:</DelegateLabel>
                  <UserSelect
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e.target.value)}
                  >
                    <option value="">Seleccione un usuario</option>
                    {users
                      .filter((user) => user.idRol === 3)
                      .map((user) => (
                        <option key={user.idUsuario} value={user.idUsuario}>
                          {user.nombre}
                        </option>
                      ))}
                  </UserSelect>
                </DelegateSection>
              )}

              {actionType === "cancel" && (
                <CancelSection>
                  <CancelLabel>Motivo de cancelación:</CancelLabel>
                  <ResponseTextArea
                    rows="4"
                    value={respuesta}
                    onChange={(e) => setRespuesta(e.target.value)}
                    placeholder="Escriba el motivo por el cual se cancela este ticket..."
                  />
                </CancelSection>
              )}
            </>
          )}

          {/* Interfaz original para compatibilidad con otros estados */}
          {mode === "attend" &&
            ticket.idEstado !== 1 &&
            !(
              ticket.idEstado === 2 &&
              currentUser &&
              (currentUser.idRol === 1 || currentUser.idRol === 2)
            ) && (
              <>
                <label>
                  {ticket.idEstado === 5 ? "Motivo de cancelación:" : "Respuesta:"}
                </label>
                <ResponseTextArea
                  rows="4"
                  value={respuesta}
                  onChange={(e) => setRespuesta(e.target.value)}
                  placeholder={
                    ticket.idEstado === 5 
                      ? "Escriba el motivo de cancelación..." 
                      : "Escriba su respuesta al ticket..."
                  }
                />
              </>
            )}

          {mode === "response" && (
            <>
              {/* Respuesta con el mismo formato que la descripción */}
              <ResponseViewSection>
                <ResponseViewLabel>
                  {ticket.idEstado === 5 ? "Motivo de cancelación:" : "Respuesta:"}
                </ResponseViewLabel>
                <ResponseViewText>
                  {ticket.atenciones?.[0]?.respuesta ||
                    (ticket.idEstado === 5 ? "No hay motivo de cancelación disponible" : "No hay respuesta disponible")}
                </ResponseViewText>
              </ResponseViewSection>

              <ResponseInfo>
                <strong>
                  {ticket.idEstado === 5 ? "Cancelado por:" : "Atendido por:"}
                </strong>{" "}
                {usuarioQueAtendio?.nombre || "No disponible"}
                <br />
                <strong>
                  {ticket.idEstado === 5 ? "Fecha de cancelación:" : "Fecha de atención:"}
                </strong>{" "}
                {usuarioQueAtendio?.fecha
                  ? formatMexicanDate(usuarioQueAtendio.fecha)
                  : "No disponible"}
              </ResponseInfo>

              {/* Mostrar calificación y comentarios del empleado si el ticket está cerrado */}
              {ticket.idEstado === 4 && ticket.atenciones?.[0] && (
                <EmployeeFeedbackSection>
                  <FeedbackTitle>Evaluación del Empleado</FeedbackTitle>
                  
                  {ticket.atenciones[0].calificacion && (
                    <RatingSection>
                      <RatingLabel>Calificación:</RatingLabel>
                      <StarRating $rating={ticket.atenciones[0].calificacion}>
                        {[1, 2, 3].map((star) => (
                          <Star 
                            key={star}
                            $filled={star <= ticket.atenciones[0].calificacion}
                          >
                            ★
                          </Star>
                        ))}
                      </StarRating>
                    </RatingSection>
                  )}

                  {ticket.atenciones[0].comentario && (
                    <CommentSection>
                      <CommentLabel>Comentario del empleado:</CommentLabel>
                      <CommentText>
                        {ticket.atenciones[0].comentario}
                      </CommentText>
                    </CommentSection>
                  )}

                  {!ticket.atenciones[0].calificacion && !ticket.atenciones[0].comentario && (
                    <NoFeedbackText>
                      El empleado no proporcionó evaluación del servicio
                    </NoFeedbackText>
                  )}
                </EmployeeFeedbackSection>
              )}
            </>
          )}
        </ModalBody>

        {/* Footer solo aparece cuando se selecciona una acción o en otros modos, pero NO para tickets cerrados */}
        {mode !== "response" && 
         ticket.idEstado !== 4 && 
         ((mode === "attend" && ticket.idEstado === 1 && actionType) ||
          (mode === "attend" && ticket.idEstado === 2 && actionType) ||
          (mode === "attend" &&
            ticket.idEstado !== 1 &&
            !(
              ticket.idEstado === 2 &&
              currentUser &&
              (currentUser.idRol === 1 || currentUser.idRol === 2)
            )) ||
          mode !== "attend") && (
          <ModalFooter>
            {mode === "attend" && (
              <SubmitButton
                onClick={handleSubmit}
                disabled={
                  loading ||
                  (actionType === "respond" && !respuesta.trim()) ||
                  (actionType === "cancel" && !respuesta.trim()) ||
                  (actionType === "delegate" && !selectedUser) ||
                  (actionType === "reassign" && !selectedUser) ||
                  (actionType === "selfassign" && !respuesta.trim())
                }
              >
                {loading
                  ? "Enviando..."
                  : actionType === "delegate"
                  ? "Reasignar Ticket"
                  : actionType === "cancel"
                  ? "Cancelar Ticket"
                  : actionType === "reassign"
                  ? "Re-asignar Ticket"
                  : actionType === "selfassign"
                  ? "Autoasignar y Responder"
                  : "Enviar Respuesta"}
              </SubmitButton>
            )}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

// Styled Components
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 100vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;

  h3 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.2rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);

  &:hover {
    color: var(--color-primary);
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;

  p {
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--color-primary);
  }
`;

const ResponseTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #dee2e6;
`;

const SubmitButton = styled.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`;

const ResponseInfo = styled.div`
  padding: 1rem;
  background: #e9f7ef;
  border-radius: 4px;
  border-left: 4px solid #28a745;
  color: #155724;
  font-size: 0.9rem;
`;

// Nuevos styled components para una interfaz más amigable
const EmployeeInfo = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--color-accent);
`;

const EmployeeName = styled.h4`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`;

const RequestTitle = styled.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #dee2e6;
`;

const PriorityBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;

  background: ${(props) => {
    switch (props.$priority) {
      case "alta":
        return "#dc3545";
      case "media":
        return "#fd7e14";
      case "baja":
        return "#28a745";
      default:
        return "#6c757d";
    }
  }};

  color: white;
`;

const DescriptionSection = styled.div`
  margin-bottom: 1.5rem;
`;

const DescriptionText = styled.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`;

const ActionButtonsRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid
    ${(props) => (props.$active ? "var(--color-accent)" : "#dee2e6")};
  background: ${(props) => (props.$active ? "var(--color-accent)" : "white")};
  color: ${(props) => (props.$active ? "white" : "var(--color-primary)")};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  flex: 1;

  &:hover {
    border-color: var(--color-accent);
    background: ${(props) => (props.$active ? "#e54a2e" : "#fff5f5")};
  }
`;

const UserSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9rem;
  background: white;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const ResponseSection = styled.div`
  margin-top: 1rem;
`;

const ResponseLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

const DelegateSection = styled.div`
  margin-top: 1rem;
`;

const DelegateLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

const CancelSection = styled.div`
  margin-top: 1rem;
`;

const CancelLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

// Nuevos styled components para la vista de respuesta
const ResponseViewSection = styled.div`
  margin-bottom: 1.5rem;
`;

const ResponseViewLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

const ResponseViewText = styled.div`
  padding: 0.75rem;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2.5rem;
`;

// Nuevos styled components para información de delegación
const DelegationInfo = styled.div`
  margin-bottom: 1.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  background: #e3f2fd;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`;

const DelegationDetail = styled.p`
  margin: 1rem;
  color: #424242;
  font-size: 1rem;
  font-weight: 500;
  vertical-align: middle;
`;

// Styled components para fecha de generación del ticket
const DateContainer = styled.div`
  margin-bottom: 0.5rem;
`;

const DateLabel = styled.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`;

const DateValue = styled.span`
  color: var(--color-gray);
  font-size: 0.9rem;
  display: inline;
`;

// Styled components para la sección de evaluación del empleado
const EmployeeFeedbackSection = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f0f8f5;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  border-left: 4px solid #28a745;
`;

const FeedbackTitle = styled.h4`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
`;

const RatingSection = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RatingLabel = styled.span`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.2rem;
`;

const Star = styled.span`
  font-size: 1.2rem;
  color: ${props => props.$filled ? '#ffc107' : '#e9ecef'};
  text-shadow: ${props => props.$filled ? '0 0 1px rgba(0,0,0,0.3)' : 'none'};
`;

const CommentSection = styled.div`
  margin-bottom: 0.5rem;
`;

const CommentLabel = styled.div`
  font-weight: 500;
  color: var(--color-text);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const CommentText = styled.div`
  padding: 0.75rem;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  color: #495057;
  line-height: 1.5;
  min-height: 2rem;
  font-style: italic;
`;

const NoFeedbackText = styled.div`
  color: #6c757d;
  font-style: italic;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;
`;

export default TicketModal;
