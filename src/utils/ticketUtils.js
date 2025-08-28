/**
 * Utilidades para el manejo de tickets
 */

export const getResponsableLabel = (currentUser, ticketState, mode) => {
  if (mode === "employee") {
    return "Asignado a:";
  }
  
  // Mode admin
  if (currentUser?.idRol === 3) {
    return ticketState === 2 ? "Asignado a:" : "Asignado por:";
  }
  
  return "Asignado a:";
};

export const getResponsableValue = (ticket, ticketData, getResponsable) => {
  // Primero intentar obtener el usuario asignado desde ticketData
  if (ticketData.usuarioDelegado) {
    return ticketData.usuarioDelegado;
  }
  
  // Fallback al responsable original si no hay asignación
  return getResponsable?.(ticket.empleados?.idPlanta, ticket.idTipoSolicitud) || "No asignado";
};

export const getEstadoClass = (idEstado) => {
  const clases = {
    1: 'sin-atender',
    2: 'delegado',
    3: 'atendido',
    4: 'cerrado',
    5: 'cancelado'
  };
  return clases[idEstado] || 'sin-atender';
};

export const truncateText = (text, maxLength = 20) => {
  if (!text) return '';
  return text.length > maxLength ? `${text.substring(0, maxLength).trim()}...` : text;
};
