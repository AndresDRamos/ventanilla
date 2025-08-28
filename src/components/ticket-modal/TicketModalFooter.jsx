import {
  getSubmitButtonText,
  isSubmitEnabled,
} from "../../utils/ticketModalUtils";
import { ModalFooter, SubmitButton } from "./TicketModal.styles";

const TicketModalFooter = ({
  mode,
  actionType,
  loading,
  onSubmit,
  respuesta,
  selectedUser,
  calificacion
}) => {
  const shouldShowSubmitButton = mode === "attend" && actionType;
  const shouldShowRatingButton = mode === "rating";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  const isRatingValid = calificacion >= 1 && calificacion <= 3;

  return (
    <ModalFooter>
      {shouldShowSubmitButton && (
        <SubmitButton
          onClick={handleSubmit}
          disabled={
            !isSubmitEnabled(actionType, respuesta, selectedUser, loading)
          }
        >
          {getSubmitButtonText(actionType, loading)}
        </SubmitButton>
      )}
      
      {shouldShowRatingButton && (
        <SubmitButton
          onClick={handleSubmit}
          disabled={!isRatingValid || loading}
        >
          {loading ? "Enviando..." : "Enviar Calificación"}
        </SubmitButton>
      )}
    </ModalFooter>
  );
};

export default TicketModalFooter;
