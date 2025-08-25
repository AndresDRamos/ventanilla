// Colores del sistema
export const colors = {
  // Colores principales
  primary: '#007bff',
  primaryDark: '#0056b3',
  primaryLight: '#b3d7ff',
  
  secondary: '#6c757d',
  secondaryDark: '#495057',
  secondaryLight: '#e9ecef',
  
  // Colores de estado
  success: '#28a745',
  successDark: '#1e7e34',
  successLight: '#d4edda',
  
  info: '#17a2b8',
  infoDark: '#117a8b',
  infoLight: '#d1ecf1',
  
  warning: '#ffc107',
  warningDark: '#e0a800',
  warningLight: '#fff3cd',
  
  danger: '#dc3545',
  dangerDark: '#c82333',
  dangerLight: '#f8d7da',
  
  // Escalas de grises
  white: '#ffffff',
  gray: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#6c757d',
    600: '#495057',
    700: '#343a40',
    800: '#212529',
    900: '#000000'
  },
  
  // Estados de tickets (usando constantes)
  status: {
    new: '#17a2b8',      // info
    assigned: '#ffc107',  // warning
    attended: '#28a745',  // success
    closed: '#6c757d',    // secondary
    cancelled: '#dc3545'  // danger
  },
  
  // Prioridades
  priority: {
    low: '#28a745',      // success
    medium: '#ffc107',   // warning
    high: '#dc3545'      // danger
  }
};

export default colors;
