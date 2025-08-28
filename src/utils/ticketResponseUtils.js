export const getButtonText = (actionType, isSubmitting) => {
  if (isSubmitting) return 'Procesando...';
  
  switch (actionType) {
    case 'responder': return 'Enviar Respuesta y Cerrar Ticket';
    case 'reasignar': return 'Reasignar Ticket';
    case 'cancelar': return 'Cancelar Ticket';
    default: return 'Procesar';
  }
};

export const getHelpText = (actionType) => {
  switch (actionType) {
    case 'responder': 
      return 'Una vez enviada la respuesta, el ticket se marcará como atendido.';
    case 'reasignar':
      return 'El ticket será reasignado al usuario seleccionado.';
    case 'cancelar':
      return 'El ticket será marcado como cancelado con el motivo especificado.';
    default: 
      return '';
  }
};

export const getSuccessTitle = (actionType) => {
  switch (actionType) {
    case 'reasignar': return '¡Ticket Reasignado!';
    case 'cancelar': return '¡Ticket Cancelado!';
    default: return '¡Respuesta Enviada!';
  }
};

export const validateActionInput = (actionType, response, selectedUser) => {
  switch (actionType) {
    case 'responder':
      return response.trim() ? null : 'Debe ingresar una respuesta';
    case 'reasignar':
      return selectedUser ? null : 'Debe seleccionar un usuario para reasignar';
    case 'cancelar':
      return response.trim() ? null : 'Debe ingresar el motivo de cancelación';
    default:
      return 'Acción no válida';
  }
};
