import colors from './colors';
import typography from './typography';
import { spacing, breakpoints, borders, shadows } from './spacing';

// Tema completo del sistema
export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
  borders,
  shadows,
  
  // Utilidades del tema
  borderRadius: borders.radius,
  fontFamily: typography.fontFamily,
  fontSize: typography.fontSize,
  fontWeight: typography.fontWeight,
  
  // Transiciones comunes
  transitions: {
    fast: '150ms ease',
    base: '250ms ease',
    slow: '350ms ease'
  },
  
  // Z-index scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  }
};

export default theme;
