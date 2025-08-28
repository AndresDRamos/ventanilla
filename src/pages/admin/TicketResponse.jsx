import { useTicketResponse } from '../../hooks/useTicketResponse';
import { useTicketResponseActions } from '../../hooks/useTicketResponseActions';
import TicketResponseCard from '../../components/ticket-response/TicketResponseCard';
import { LoadingState, ErrorState, SuccessState } from '../../components/ticket-response/TicketResponseStates';
import { Container } from '../../components/ticket-response/TicketResponse.styles';

const TicketResponse = () => {
  const ticketResponseData = useTicketResponse();
  const actions = useTicketResponseActions(
    ticketResponseData.ticket, 
    ticketResponseData.token, 
    ticketResponseData.navigate
  );

  const {
    loading,
    error,
    success,
    isSubmitted,
    actionType,
    responseMessage
  } = ticketResponseData;

  if (loading) {
    return (
      <Container>
        <LoadingState />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorState error={error} />
      </Container>
    );
  }

  if (success || isSubmitted) {
    return (
      <Container>
        <SuccessState 
          actionType={actionType}
          responseMessage={responseMessage}
        />
      </Container>
    );
  }

  return (
    <Container>
      <TicketResponseCard 
        ticketData={ticketResponseData}
        actions={actions}
      />
    </Container>
  );
};

export default TicketResponse;
