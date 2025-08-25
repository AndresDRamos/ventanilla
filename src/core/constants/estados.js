// Estados de tickets
export const TICKET_STATES = {
  NEW: 1,
  ASSIGNED: 2,
  ATTENDED: 3,
  CLOSED: 4,
  CANCELLED: 5
};

export const TICKET_STATE_LABELS = {
  [TICKET_STATES.NEW]: 'Nuevo',
  [TICKET_STATES.ASSIGNED]: 'Asignado',
  [TICKET_STATES.ATTENDED]: 'Atendido',
  [TICKET_STATES.CLOSED]: 'Cerrado',
  [TICKET_STATES.CANCELLED]: 'Cancelado'
};

export const TICKET_STATE_COLORS = {
  [TICKET_STATES.NEW]: '#17a2b8',      // info
  [TICKET_STATES.ASSIGNED]: '#ffc107',  // warning
  [TICKET_STATES.ATTENDED]: '#28a745',  // success
  [TICKET_STATES.CLOSED]: '#6c757d',    // secondary
  [TICKET_STATES.CANCELLED]: '#dc3545'  // danger
};
