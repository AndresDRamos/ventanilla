import { createContext, useContext } from 'react';
import theme from '../../styles/theme';
import { TICKET_STATE_COLORS } from '../constants/estados';
import { PRIORITY_COLORS } from '../constants/routes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Funciones helper para obtener colores por estado y prioridad
  const getStatusColor = (status) => {
    return TICKET_STATE_COLORS[status] || theme.colors.gray[400];
  };

  const getPriorityColor = (priority) => {
    return PRIORITY_COLORS[priority] || theme.colors.gray[400];
  };

  const getRoleColor = (role) => {
    const roleColors = {
      1: theme.colors.danger,     // Admin
      2: theme.colors.warning,    // Supervisor
      3: theme.colors.info        // Delegado
    };
    return roleColors[role] || theme.colors.gray[500];
  };

  // Funciones helper para estilos comunes
  const getButtonStyle = (variant = 'primary', size = 'medium') => {
    const variants = {
      primary: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.primaryDark
        }
      },
      secondary: {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.secondaryDark
        }
      },
      success: {
        backgroundColor: theme.colors.success,
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.successDark
        }
      },
      danger: {
        backgroundColor: theme.colors.danger,
        color: theme.colors.white,
        '&:hover': {
          backgroundColor: theme.colors.dangerDark
        }
      },
      outline: {
        backgroundColor: 'transparent',
        color: theme.colors.primary,
        border: `2px solid ${theme.colors.primary}`,
        '&:hover': {
          backgroundColor: theme.colors.primary,
          color: theme.colors.white
        }
      }
    };

    const sizes = {
      small: {
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        fontSize: theme.fontSize.sm
      },
      medium: {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: theme.fontSize.base
      },
      large: {
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        fontSize: theme.fontSize.lg
      }
    };

    return {
      ...variants[variant],
      ...sizes[size],
      borderRadius: theme.borderRadius.md,
      border: 'none',
      cursor: 'pointer',
      transition: theme.transitions.base,
      fontFamily: theme.fontFamily.primary,
      fontWeight: theme.fontWeight.medium
    };
  };

  const getCardStyle = () => ({
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    boxShadow: theme.shadows.sm,
    border: `1px solid ${theme.colors.gray[200]}`,
    padding: theme.spacing.lg
  });

  const getInputStyle = () => ({
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    border: `1px solid ${theme.colors.gray[300]}`,
    fontSize: theme.fontSize.base,
    fontFamily: theme.fontFamily.primary,
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.primary,
      boxShadow: `0 0 0 3px ${theme.colors.primary}25`
    }
  });

  // Media queries helpers
  const mediaQueries = {
    mobile: `@media (max-width: ${theme.breakpoints.sm})`,
    tablet: `@media (max-width: ${theme.breakpoints.md})`,
    desktop: `@media (min-width: ${theme.breakpoints.lg})`
  };

  const value = {
    theme,
    getStatusColor,
    getPriorityColor,
    getRoleColor,
    getButtonStyle,
    getCardStyle,
    getInputStyle,
    mediaQueries
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export default ThemeContext;
