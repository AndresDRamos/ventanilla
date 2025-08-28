import { 
  ActionSection, 
  AttendButton, 
  ResponseSection, 
  ViewResponseButton, 
  MobileExpandButton 
} from './TicketCard.styles';

const AdminActions = ({ 
  ticket, 
  ticketData, 
  onAtender, 
  onVerRespuesta,
  isExpanded,
  onToggleExpand
}) => {
  const handleAtender = (e) => {
    e.stopPropagation();
    onAtender?.(ticket);
  };

  const handleVerRespuesta = (e) => {
    e.stopPropagation();
    onVerRespuesta?.(ticket);
  };

  const handleMobileToggle = (e) => {
    e.stopPropagation();
    onToggleExpand?.();
  };

  return (
    <>
      {ticketData.isResolved ? (
        <ResponseSection>
          <ViewResponseButton 
            onClick={handleVerRespuesta} 
            title="Ver respuesta del ticket"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </ViewResponseButton>
        </ResponseSection>
      ) : (
        <ActionSection>
          <AttendButton onClick={handleAtender}>
            Atender
          </AttendButton>
        </ActionSection>
      )}
      
      <MobileExpandButton onClick={handleMobileToggle}>
        {isExpanded ? "▲" : "▼"}
      </MobileExpandButton>
    </>
  );
};

export default AdminActions;
