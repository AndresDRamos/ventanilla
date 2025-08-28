import {
  LoadingCard,
  LoadingSpinner,
  ErrorCard,
  ErrorIcon,
  ErrorTitle,
  ErrorMessage,
  ErrorSubtext,
  SuccessCard,
  SuccessIcon,
  SuccessTitle,
  SuccessMessage,
  SuccessSubtext
} from './TicketResponse.styles';
import { getSuccessTitle } from '../../utils/ticketResponseUtils';

export const LoadingState = () => (
  <LoadingCard>
    <LoadingSpinner />
    <p>Cargando ticket...</p>
  </LoadingCard>
);

export const ErrorState = ({ error }) => (
  <ErrorCard>
    <ErrorIcon>❌</ErrorIcon>
    <ErrorTitle>Enlace No Válido</ErrorTitle>
    <ErrorMessage>{error}</ErrorMessage>
    <ErrorSubtext>
      Este enlace puede haber expirado, ya fue utilizado, o el ticket ya no está disponible para responder.
    </ErrorSubtext>
  </ErrorCard>
);

export const SuccessState = ({ actionType, responseMessage }) => {
  const getMessage = () => {
    if (responseMessage) return responseMessage;
    return 'Tu respuesta ha sido registrada exitosamente. El ticket ha sido marcado como atendido.';
  };

  return (
    <SuccessCard>
      <SuccessIcon>✅</SuccessIcon>
      <SuccessTitle>{getSuccessTitle(actionType)}</SuccessTitle>
      <SuccessMessage>
        {getMessage()}
      </SuccessMessage>
      <SuccessSubtext>
        Esta ventana se cerrará automáticamente en unos segundos...
      </SuccessSubtext>
    </SuccessCard>
  );
};
