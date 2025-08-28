import { useTicketModal } from '../../hooks/useTicketModal';
import { useTicketModalActions } from '../../hooks/useTicketModalActions';
import TicketModalHeader from './TicketModalHeader';
import TicketModalContent from './TicketModalContent';
import TicketModalDelegation from './TicketModalDelegation';
import TicketModalActions from './TicketModalActions';
import TicketModalResponse from './TicketModalResponse';
import TicketModalFooter from './TicketModalFooter';
import { Modal, ModalContent, ModalBody } from './TicketModal.styles';

const TicketModal = ({
  ticket,
  isOpen,
  onClose,
  mode = "view",
  onSubmit,
  onDelegate,
  onReassign,
  onSelfAssign,
  loading = false,
  usuarioQueAtendio = null,
  currentUser = null,
}) => {
  const modalState = useTicketModal(isOpen, onClose);
  const modalActions = useTicketModalActions({
    onSubmit,
    onDelegate,
    onReassign,
    onSelfAssign
  });

  if (!isOpen || !ticket) return null;

  const handleSubmit = () => {
    // Para modo rating, usar los datos de calificación del modalState
    if (mode === "rating" && onSubmit) {
      onSubmit({
        calificacion: modalState.calificacion,
        comentario: modalState.comentario
      });
      return;
    }

    // Para otros modos, usar la lógica original
    const success = modalActions.handleSubmit(
      modalState.actionType,
      modalState.respuesta,
      modalState.selectedUser
    );
    
    if (success) {
      modalState.resetState();
    }
  };

  // Determinar si debe mostrar respuesta o acciones
  const shouldShowResponse = mode === "response" || 
    (mode === "view" && (ticket.idEstado === 3 || ticket.idEstado === 4 || ticket.idEstado === 5));
  
  const shouldShowRating = mode === "rating" || 
    (mode === "view" && ticket.idEstado === 3 && 
     currentUser?.tipo === "employee" &&
     ticket.atenciones?.[0] && 
     (!ticket.atenciones[0].calificacion || ticket.atenciones[0].calificacion === 0));

  return (
    <Modal>
      <ModalContent>
        <TicketModalHeader 
          ticket={ticket}
          onClose={modalState.handleClose}
        />
        
        <ModalBody>
          <TicketModalContent ticket={ticket} />
          
          <TicketModalDelegation 
            ticket={ticket}
            mode={mode}
            currentUser={currentUser}
          />
          
          {shouldShowResponse ? (
            <TicketModalResponse 
              ticket={ticket}
              usuarioQueAtendio={usuarioQueAtendio}
            />
          ) : (
            <TicketModalActions
              ticket={ticket}
              mode={shouldShowRating ? "rating" : mode}
              currentUser={currentUser}
              modalState={modalState}
            />
          )}
        </ModalBody>

        <TicketModalFooter
          mode={shouldShowRating ? "rating" : mode}
          actionType={modalState.actionType}
          loading={loading}
          onSubmit={handleSubmit}
          respuesta={modalState.respuesta}
          selectedUser={modalState.selectedUser}
          onClose={modalState.handleClose}
          calificacion={modalState.calificacion}
        />
      </ModalContent>
    </Modal>
  );
};

export default TicketModal;
