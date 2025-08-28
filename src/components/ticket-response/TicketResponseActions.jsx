import { 
  ResponseSection, 
  SectionTitle, 
  ActionButtonsRow, 
  ActionButton,
  ResponseTextarea,
  CharacterCount,
  ErrorAlert,
  ActionSection,
  SubmitButton,
  HelpText
} from './TicketResponse.styles';
import { getButtonText, getHelpText } from '../../utils/ticketResponseUtils';
import { UserSelector } from '../../shared/components/UI';
import { useEffect } from 'react';

const TicketResponseActions = ({ ticketData, actions }) => {
  const {
    actionType,
    setActionType,
    response,
    setResponse,
    selectedUser,
    setSelectedUser,
    isSubmitting,
    error,
    ticket
  } = ticketData;

  // Obtener el rol del usuario desde los datos del ticket
  const userRole = ticket?.usuarios?.idRol;

  // Determinar qué acciones están disponibles según el rol
  const getAvailableActions = () => {
    const baseActions = ['responder']; // Todos pueden responder
    
    if (userRole === 2) {
      // Admin: puede responder, reasignar y cancelar
      return ['responder', 'reasignar', 'cancelar'];
    } else if (userRole === 3) {
      // Delegado: solo puede responder
      return ['responder'];
    }
    
    return baseActions;
  };

  const availableActions = getAvailableActions();

  // Resetear el actionType si la acción actual no está disponible para este rol
  useEffect(() => {
    if (!availableActions.includes(actionType)) {
      setActionType(availableActions[0] || 'responder');
    }
  }, [actionType, availableActions, setActionType]);

  const handleActionSubmit = async () => {
    try {
      switch (actionType) {
        case 'responder':
          await actions.handleSubmitResponse(
            response, 
            ticketData.setIsSubmitting, 
            ticketData.setError, 
            ticketData.setSuccess
          );
          break;
        case 'reasignar':
          await actions.handleReasignTicket(
            selectedUser, 
            ticketData.setIsSubmitting, 
            ticketData.setResponseMessage, 
            ticketData.setIsSubmitted
          );
          break;
        case 'cancelar':
          await actions.handleCancelTicket(
            response, 
            ticketData.setIsSubmitting, 
            ticketData.setResponseMessage, 
            ticketData.setIsSubmitted
          );
          break;
        default:
          throw new Error('Acción no válida');
      }
    } catch (err) {
      ticketData.setError(err.message);
    }
  };

  return (
    <>
      <ResponseSection>
        <ActionButtonsRow>
          {availableActions.includes('responder') && (
            <ActionButton
              $selected={actionType === 'responder'}
              onClick={() => setActionType('responder')}
            >
               Responder
            </ActionButton>
          )}
          {availableActions.includes('reasignar') && (
            <ActionButton
              $selected={actionType === 'reasignar'}
              onClick={() => setActionType('reasignar')}
            >
               Reasignar
            </ActionButton>
          )}
          {availableActions.includes('cancelar') && (
            <ActionButton
              $selected={actionType === 'cancelar'}
              onClick={() => setActionType('cancelar')}
            >
               Cancelar
            </ActionButton>
          )}
        </ActionButtonsRow>

        <ActionContent 
          actionType={actionType}
          response={response}
          setResponse={setResponse}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          isSubmitting={isSubmitting}
        />
      </ResponseSection>

      {error && (
        <ErrorAlert>
          ❌ {error}
        </ErrorAlert>
      )}

      <ActionSection>
        <SubmitButton 
          onClick={handleActionSubmit}
          disabled={
            isSubmitting || 
            (actionType === 'responder' && !response.trim()) ||
            (actionType === 'reasignar' && !selectedUser) ||
            (actionType === 'cancelar' && !response.trim())
          }
        >
          {getButtonText(actionType, isSubmitting)}
        </SubmitButton>
        <HelpText>
          {getHelpText(actionType)}
        </HelpText>
      </ActionSection>
    </>
  );
};

const ActionContent = ({ 
  actionType, 
  response, 
  setResponse, 
  selectedUser, 
  setSelectedUser, 
  isSubmitting 
}) => {
  switch (actionType) {
    case 'responder':
      return (
        <div>
          <SectionTitle>Tu Respuesta</SectionTitle>
          <ResponseTextarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Escribe aquí tu respuesta o solución al problema..."
            rows={4}
            disabled={isSubmitting}
          />
          <CharacterCount $isNearLimit={response.length > 400}>
            {response.length}/500 caracteres
          </CharacterCount>
        </div>
      );
    
    case 'reasignar':
      return (
        <div>
          <SectionTitle>Reasignar a</SectionTitle>
          <UserSelector
            selectedUser={selectedUser}
            onUserSelect={setSelectedUser}
            placeholder="Seleccionar usuario para reasignación..."
            excludeRoles={[1]}
            disabled={isSubmitting}
          />
        </div>
      );
    
    case 'cancelar':
      return (
        <div>
          <SectionTitle>Motivo de cancelación</SectionTitle>
          <ResponseTextarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Describe el motivo por el cual se cancela este ticket..."
            rows={4}
            disabled={isSubmitting}
          />
          <CharacterCount $isNearLimit={response.length > 400}>
            {response.length}/500 caracteres
          </CharacterCount>
        </div>
      );
    
    default:
      return null;
  }
};

export default TicketResponseActions;
