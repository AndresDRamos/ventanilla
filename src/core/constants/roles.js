// Roles de usuario
export const USER_ROLES = {
  ADMIN: 1,
  SUPERVISOR: 2,
  DELEGATED: 3
};

export const USER_ROLE_LABELS = {
  [USER_ROLES.ADMIN]: 'Administrador',
  [USER_ROLES.SUPERVISOR]: 'Supervisor',
  [USER_ROLES.DELEGATED]: 'Delegado'
};

export const USER_ROLE_PERMISSIONS = {
  [USER_ROLES.ADMIN]: {
    canViewAllTickets: true,
    canAssignTickets: true,
    canResponseTickets: true,
    canCancelTickets: true,
    canManageUsers: true
  },
  [USER_ROLES.SUPERVISOR]: {
    canViewAllTickets: false, // Solo tickets asignados
    canAssignTickets: true,
    canResponseTickets: true,
    canCancelTickets: true,
    canManageUsers: false
  },
  [USER_ROLES.DELEGATED]: {
    canViewAllTickets: false, // Solo asignaciones activas
    canAssignTickets: false,
    canResponseTickets: true,
    canCancelTickets: false,
    canManageUsers: false
  }
};
