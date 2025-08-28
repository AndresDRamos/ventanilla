import { ModalHeader, HeaderContent, CloseButton, PriorityBadge } from './TicketModal.styles';

const TicketModalHeader = ({ ticket, onClose }) => {
  return (
    <ModalHeader>
      <HeaderContent>
        <PriorityBadge $priority={ticket.prioridades?.prioridad}>
          {ticket.prioridades?.prioridad}
        </PriorityBadge>
        <h3>#{ticket.idTicket}</h3>
      </HeaderContent>
      <CloseButton onClick={onClose}>×</CloseButton>
    </ModalHeader>
  );
};

export default TicketModalHeader;
