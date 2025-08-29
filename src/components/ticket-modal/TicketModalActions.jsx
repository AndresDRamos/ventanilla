import { getAvailableActions, getResponseLabel, getResponsePlaceholder } from '../../utils/ticketModalUtils';
import UserSelector from '../UI/UserSelector';
import { 
  ActionButtonsRow, 
  ActionButton, 
  ResponseSection, 
  ResponseLabel, 
  ResponseTextArea,
  DelegateSection,
  DelegateLabel,
  RatingSection,
  RatingTitle,
  StarsContainer,
  StarButton,
  CommentSection,
  CommentLabel,
  CommentTextArea
} from './TicketModal.styles';

const TicketModalActions = ({ ticket, mode, currentUser, modalState }) => {
  // Si es modo rating, mostrar interfaz de calificación
  if (mode === "rating") {
    return (
      <RatingSection>
        <RatingTitle>¿Cómo calificarías el servicio?</RatingTitle>
        
        <StarsContainer>
          {Array.from({length: 3}, (_, i) => (
            <StarButton
              key={i}
              type="button"
              $filled={i < modalState.calificacion}
              onClick={() => modalState.setCalificacion(i + 1)}
            >
              {i < modalState.calificacion ? '★' : '☆'}
            </StarButton>
          ))}
        </StarsContainer>
        
        <CommentSection>
          <CommentLabel>Comentario adicional (opcional):</CommentLabel>
          <CommentTextArea
            value={modalState.comentario}
            onChange={(e) => modalState.setComentario(e.target.value)}
            placeholder="Comparte tu experiencia con el servicio..."
            rows={3}
          />
        </CommentSection>
      </RatingSection>
    );
  }
  
  if (mode !== "attend") return null;

  const availableActions = getAvailableActions(ticket, currentUser);
  
  return (
    <>
      {availableActions.length > 0 && (
        <ActionButtonsRow>
          {availableActions.map((action) => (
            <ActionButton
              key={action.type}
              $active={modalState.actionType === action.type}
              onClick={() => modalState.handleActionChange(action.type)}
            >
              {action.label}
            </ActionButton>
          ))}
        </ActionButtonsRow>
      )}

      <ActionContent 
        actionType={modalState.actionType}
        ticket={ticket}
        modalState={modalState}
      />
    </>
  );
};

const ActionContent = ({ actionType, ticket, modalState }) => {
  switch (actionType) {
    case "respond":
    case "selfassign":
    case "cancel":
      return (
        <ResponseSection>
          <ResponseLabel>
            {getResponseLabel(actionType, ticket)}
          </ResponseLabel>
          <ResponseTextArea
            value={modalState.respuesta}
            onChange={(e) => modalState.setRespuesta(e.target.value)}
            placeholder={getResponsePlaceholder(actionType)}
            rows={6}
          />
        </ResponseSection>
      );
      
    case "delegate":
      return (
        <DelegateSection>
          <DelegateLabel>Seleccionar usuario para delegar:</DelegateLabel>
          <UserSelector
            selectedUser={modalState.selectedUser}
            onUserSelect={(userId) => modalState.setSelectedUser(userId)}
            placeholder="Seleccione un usuario..."
            allowedRoles={[2, 3]}
            customFilter={(user) => {
              // Excluir el usuario actual
              if (user.idUsuario === modalState.currentUser?.id) return false;
              
              // Excluir usuario que respondió (si existe)
              const usuarioQueRespondio = ticket.atenciones?.[0]?.idUsuario;
              if (usuarioQueRespondio && user.idUsuario === usuarioQueRespondio) return false;
              
              // Excluir usuario que tiene el token activo (delegado actual)
              const usuarioConTokenActivo = ticket.ticket_tokens?.find(token => token.bActivo)?.idUsuario;
              if (usuarioConTokenActivo && user.idUsuario === usuarioConTokenActivo) return false;
              
              return true;
            }}
          />
        </DelegateSection>
      );
      
    case "reassign":
      return (
        <DelegateSection>
          <DelegateLabel>Seleccionar usuario para reasignar:</DelegateLabel>
          <UserSelector
            selectedUser={modalState.selectedUser}
            onUserSelect={(userId) => modalState.setSelectedUser(userId)}
            placeholder="Seleccione un usuario..."
            allowedRoles={[2, 3]}
            customFilter={(user) => {
              // Excluir el usuario actual
              if (user.idUsuario === modalState.currentUser?.id) return false;
              
              // Excluir usuario que respondió (si existe)
              const usuarioQueRespondio = ticket.atenciones?.[0]?.idUsuario;
              if (usuarioQueRespondio && user.idUsuario === usuarioQueRespondio) return false;
              
              // Excluir usuario que tiene el token activo (delegado actual)
              const usuarioConTokenActivo = ticket.ticket_tokens?.find(token => token.bActivo)?.idUsuario;
              if (usuarioConTokenActivo && user.idUsuario === usuarioConTokenActivo) return false;
              
              return true;
            }}
          />
        </DelegateSection>
      );
      
    default:
      return null;
  }
};

export default TicketModalActions;
