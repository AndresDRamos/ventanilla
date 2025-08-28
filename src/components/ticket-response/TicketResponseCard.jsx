import TicketResponseHeader from './TicketResponseHeader';
import TicketResponseContent from './TicketResponseContent';
import TicketResponseActions from './TicketResponseActions';
import TicketResponseFooter from './TicketResponseFooter';
import { TicketCard } from './TicketResponse.styles';

const TicketResponseCard = ({ ticketData, actions }) => {
  return (
    <TicketCard>
      <TicketResponseHeader ticket={ticketData.ticket} />
      
      <TicketResponseContent ticket={ticketData.ticket} />
      
      <TicketResponseActions 
        ticketData={ticketData}
        actions={actions}
      />
      
      <TicketResponseFooter ticket={ticketData.ticket} />
    </TicketCard>
  );
};

export default TicketResponseCard;
