import AdminActions from './AdminActions';
import EmployeeActions from './EmployeeActions';
import { 
  TopBar, 
  LeftSection, 
  RightSection, 
  PriorityBadge, 
  TicketNumber 
} from './TicketCard.styles';

const TicketHeader = ({ 
  ticket, 
  mode, 
  ticketData, 
  getPriorityColor,
  onAtender,
  onVerRespuesta,
  onShowDetails,
  isExpanded,
  onToggleExpand
}) => {
  return (
    <TopBar 
      $isResolved={ticketData.isResolved}
      $isExpanded={isExpanded}
      onClick={onToggleExpand}
    >
      <LeftSection>
        <PriorityBadge $priority={getPriorityColor(ticket.idPrioridad)}>
          {ticket.prioridades?.prioridad}
        </PriorityBadge>
        <TicketNumber>#{ticket.idTicket}</TicketNumber>
      </LeftSection>

      <RightSection>
        {mode === "admin" ? (
          <AdminActions 
            ticket={ticket}
            ticketData={ticketData}
            onAtender={onAtender}
            onVerRespuesta={onVerRespuesta}
            isExpanded={isExpanded}
            onToggleExpand={onToggleExpand}
          />
        ) : (
          <EmployeeActions 
            ticket={ticket}
            ticketData={ticketData}
            onShowDetails={onShowDetails}
            isExpanded={isExpanded}
            onToggleExpand={onToggleExpand}
          />
        )}
      </RightSection>
    </TopBar>
  );
};

export default TicketHeader;
