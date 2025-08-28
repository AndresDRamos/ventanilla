/**
 * Utilidades específicas para el modal de tickets
 */

/**
 * Determina las acciones disponibles según el ticket y el usuario actual
 */
export const getAvailableActions = (ticket, currentUser) => {
  if (!ticket || !currentUser) return [];

  const actions = [];
  
  // Solo para usuarios con permisos de admin o delegado
  if (currentUser.idRol === 1 || currentUser.idRol === 2 || currentUser.idRol === 3) {
    // Para tickets sin atender (estado 1)
    if (ticket.idEstado === 1) {
      actions.push({ type: "respond", label: "Responder" });
      actions.push({ type: "cancel", label: "Cancelar" });
      
      // Solo admins pueden delegar
      if (currentUser.idRol === 1 || currentUser.idRol === 2) {
        actions.push({ type: "delegate", label: "Asignar" });
      }
      
      // Autoasignarse (solo si no está ya asignado al usuario actual)
    }
    
    // Para tickets reasignados (estado 2)
    if (ticket.idEstado === 2) {
      actions.push({ type: "respond", label: "Responder" });
      actions.push({ type: "cancel", label: "Cancelar" });
      
      // Solo admins pueden reasignar
      if (currentUser.idRol === 1 || currentUser.idRol === 2) {
        actions.push({ type: "reassign", label: "Reasignar" });
      }
    }
  }
  
  return actions;
};

/**
 * Obtiene el texto del botón de submit según el tipo de acción
 */
export const getSubmitButtonText = (actionType, loading = false) => {
  if (loading) return "Procesando...";
  
  switch (actionType) {
    case "respond":
      return "Enviar Respuesta";
    case "cancel":
      return "Cancelar Ticket";
    case "delegate":
      return "Asignar";
    case "reassign":
      return "Reasignar";
    case "selfassign":
      return "Autoasignar y Responder";
    default:
      return "Procesar";
  }
};

/**
 * Determina si el botón de submit debe estar habilitado
 */
export const isSubmitEnabled = (actionType, respuesta, selectedUser, loading) => {
  if (loading) return false;
  
  switch (actionType) {
    case "respond":
    case "cancel":
    case "selfassign":
      return respuesta.trim().length > 0;
    case "delegate":
    case "reassign":
      return selectedUser.length > 0;
    default:
      return false;
  }
};

/**
 * Obtiene la etiqueta para el campo de respuesta según el tipo de acción
 */
export const getResponseLabel = (actionType, ticket) => {
  if (ticket?.idEstado === 5) {
    return "Motivo de cancelación:";
  }
  
  switch (actionType) {
    case "cancel":
      return "Motivo de cancelación:";
    case "respond":
    case "selfassign":
    default:
      return "Su respuesta:";
  }
};

/**
 * Obtiene el placeholder para el textarea según el tipo de acción
 */
export const getResponsePlaceholder = (actionType) => {
  switch (actionType) {
    case "cancel":
      return "Ingrese el motivo por el cual se cancela este ticket...";
    case "respond":
    case "selfassign":
    default:
      return "Ingrese su respuesta aquí...";
  }
};
