// Rutas de la aplicación
export const ROUTES = {
  // Public routes
  HOME: '/',
  
  // Employee routes
  EMPLOYEE_LOGIN: '/employee/login',
  EMPLOYEE_DASHBOARD: '/employee/dashboard',
  EMPLOYEE_REGISTER: '/employee/register',
  
  // Admin routes
  ADMIN_LOGIN: '/admin/login',
  ADMIN_DASHBOARD: '/admin/dashboard',
  TICKET_RESPONSE: '/admin/ticket/:token',
  
  // Shared routes
  NOT_FOUND: '/404'
};

// Prioridades
export const PRIORITIES = {
  LOW: 1,
  MEDIUM: 2,
  HIGH: 3
};

export const PRIORITY_LABELS = {
  [PRIORITIES.LOW]: 'Baja',
  [PRIORITIES.MEDIUM]: 'Media',
  [PRIORITIES.HIGH]: 'Alta'
};

export const PRIORITY_COLORS = {
  [PRIORITIES.LOW]: '#28a745',   // success
  [PRIORITIES.MEDIUM]: '#ffc107', // warning  
  [PRIORITIES.HIGH]: '#dc3545'   // danger
};
