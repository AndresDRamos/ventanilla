import { useTicketCard } from '../../hooks/useTicketCard';
import TicketHeader from './TicketHeader';
import TicketContent from './TicketContent';
import { Card } from './TicketCard.styles';

const TicketCard = ({
  ticket,
  mode = "employee",
  formatDate,
  getPriorityColor,
  getResponsable,
  onAtender,
  onVerRespuesta,
  onShowDetails,
  isExpanded = false,
  onToggleExpand,
  currentUser = null,
}) => {
  const ticketData = useTicketCard(ticket, mode, formatDate);

  const handleToggleExpand = () => {
    onToggleExpand?.(ticket.idTicket);
  };

  return (
    <Card
      $borderColor={ticketData.borderColor}
      $isResolved={ticketData.isResolved}
      $isExpanded={isExpanded}
    >
      <TicketHeader 
        ticket={ticket}
        mode={mode}
        ticketData={ticketData}
        getPriorityColor={getPriorityColor}
        onAtender={onAtender}
        onVerRespuesta={onVerRespuesta}
        onShowDetails={onShowDetails}
        isExpanded={isExpanded}
        onToggleExpand={handleToggleExpand}
      />
      
      <TicketContent
        ticket={ticket}
        mode={mode}
        ticketData={ticketData}
        getResponsable={getResponsable}
        currentUser={currentUser}
        isExpanded={isExpanded}
      />
    </Card>
  );
};

export default TicketCard;
