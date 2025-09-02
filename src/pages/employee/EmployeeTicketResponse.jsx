import { useEmployeeTicketResponse } from '../../hooks/useEmployeeTicketResponse';
import { EmployeeResponseCard } from '../../components/employee-response/EmployeeResponseCard';
import { LoadingState, ErrorState, SuccessState } from '../../components/ticket-response/TicketResponseStates';
import { Container } from '../../components/ticket-response/TicketResponse.styles';

const EmployeeTicketResponse = () => {
  const responseData = useEmployeeTicketResponse();
  
  const {
    loading,
    error,
    success,
    isSubmitted,
    responseMessage
  } = responseData;

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
          actionType="calificacion"
          responseMessage={responseMessage || "¡Gracias por tu calificación! Tu opinión nos ayuda a mejorar nuestro servicio."}
        />
      </Container>
    );
  }

  return (
    <Container>
      <EmployeeResponseCard responseData={responseData} />
    </Container>
  );
};

export default EmployeeTicketResponse;
