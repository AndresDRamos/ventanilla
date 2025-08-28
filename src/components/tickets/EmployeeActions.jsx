import { 
  EmployeeSection, 
  StatusBadge, 
  MobileExpandButton 
} from './TicketCard.styles';

const EmployeeActions = ({ 
  ticket, 
  ticketData, 
  onShowDetails,
  isExpanded,
  onToggleExpand
}) => {
  const handleShowDetails = (e) => {
    e.stopPropagation();
    onShowDetails?.(ticket);
  };

  const handleMobileToggle = (e) => {
    e.stopPropagation();
    onToggleExpand?.();
  };

  return (
    <>
      <EmployeeSection>
        <StatusBadge
          $estadoColor={ticketData.estadoColor}
          onClick={handleShowDetails}
          title="Ver detalles del ticket"
        >
          {ticketData.estadoTexto}
        </StatusBadge>
      </EmployeeSection>
      
      <MobileExpandButton onClick={handleMobileToggle}>
        {isExpanded ? "▲" : "▼"}
      </MobileExpandButton>
    </>
  );
};

export default EmployeeActions;
