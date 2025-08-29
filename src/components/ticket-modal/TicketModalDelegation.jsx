import { formatMexicanDate } from "../../utils/dateUtils";
import { useTicketCard } from "../../hooks/useTicketCard";
import {
  AssignmentInfo,
  AssignmentRow,
  AssignmentLabel,
  AssignmentValue,
} from "./TicketModal.styles";

const TicketModalDelegation = ({ ticket, mode }) => {
  // Usar useTicketCard para obtener información del usuario asignado
  const ticketData = useTicketCard(ticket, "admin", (date) =>
    formatMexicanDate(date)
  );

  // No mostrar nada si no hay ticket o es modo respuesta
  if (!ticket || mode === "response") return null;

  // Para tickets estado 1 (pendiente inicial) - mostrar asignación
  if (ticket.idEstado === 1) {
    return (
      <AssignmentInfo>
        <AssignmentRow>
          <AssignmentLabel>Asignado a:</AssignmentLabel>
          <AssignmentValue>
            {ticketData?.usuarioDelegado || "Determinando asignación..."}
          </AssignmentValue>
        </AssignmentRow>
      </AssignmentInfo>
    );
  }

  // Para tickets estado 2 (reasignado) - mostrar delegación/reasignación
  if (ticket.idEstado === 2) {
    const fechaDelegacion = ticket.seguimientos?.find(
      (s) => s.idEstado === 2
    )?.fecha;

    return (
      <>
        <AssignmentInfo>
          <AssignmentRow>
            <AssignmentLabel>Asignado a:</AssignmentLabel>
            <AssignmentValue>
              {ticketData?.usuarioDelegado || "Usuario no disponible"}
            </AssignmentValue>
          </AssignmentRow>
          <AssignmentRow>
            <AssignmentLabel>Fecha de asignación:</AssignmentLabel>
            <AssignmentValue>
              {fechaDelegacion
                ? formatMexicanDate(fechaDelegacion)
                : "Fecha no disponible"}
            </AssignmentValue>
          </AssignmentRow>
        </AssignmentInfo>
        {/*         
        <DelegationInfo>
          <DelegationText>
            Este ticket fue reasignado el{" "}
            {fechaDelegacion ? formatMexicanDate(fechaDelegacion) : "fecha no disponible"}.
            {currentUser?.idRol === 3 && (
              <span> Usted puede atender este ticket directamente.</span>
            )}
          </DelegationText>
        </DelegationInfo> */}
      </>
    );
  }

  return null;
};

export default TicketModalDelegation;
