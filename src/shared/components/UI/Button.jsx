import styled, { css } from 'styled-components';
import { useTheme } from '../../../core/contexts/ThemeContext';

const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  loading = false,
  disabled = false,
  children, 
  ...props 
}) => {
  const { theme } = useTheme();
  
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      $loading={loading}
      $theme={theme}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <Spinner />
          Cargando...
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};

// Variantes de botón
const variants = {
  primary: css`
    background-color: ${props => props.$theme.colors.primary};
    color: ${props => props.$theme.colors.white};
    border: 2px solid ${props => props.$theme.colors.primary};
    
    &:hover:not(:disabled) {
      background-color: ${props => props.$theme.colors.primaryDark};
      border-color: ${props => props.$theme.colors.primaryDark};
      transform: translateY(-1px);
    }
  `,
  secondary: css`
    background-color: ${props => props.$theme.colors.secondary};
    color: ${props => props.$theme.colors.white};
    border: 2px solid ${props => props.$theme.colors.secondary};
    
    &:hover:not(:disabled) {
      background-color: ${props => props.$theme.colors.secondaryDark};
      border-color: ${props => props.$theme.colors.secondaryDark};
      transform: translateY(-1px);
    }
  `,
  success: css`
    background-color: ${props => props.$theme.colors.success};
    color: ${props => props.$theme.colors.white};
    border: 2px solid ${props => props.$theme.colors.success};
    
    &:hover:not(:disabled) {
      background-color: ${props => props.$theme.colors.successDark};
      border-color: ${props => props.$theme.colors.successDark};
      transform: translateY(-1px);
    }
  `,
  danger: css`
    background-color: ${props => props.$theme.colors.danger};
    color: ${props => props.$theme.colors.white};
    border: 2px solid ${props => props.$theme.colors.danger};
    
    &:hover:not(:disabled) {
      background-color: ${props => props.$theme.colors.dangerDark};
      border-color: ${props => props.$theme.colors.dangerDark};
      transform: translateY(-1px);
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${props => props.$theme.colors.primary};
    border: 2px solid ${props => props.$theme.colors.primary};
    
    &:hover:not(:disabled) {
      background-color: ${props => props.$theme.colors.primary};
      color: ${props => props.$theme.colors.white};
      transform: translateY(-1px);
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${props => props.$theme.colors.gray[600]};
    border: 2px solid transparent;
    
    &:hover:not(:disabled) {
      background-color: ${props => props.$theme.colors.gray[100]};
      color: ${props => props.$theme.colors.gray[800]};
    }
  `
};

// Tamaños de botón
const sizes = {
  small: css`
    padding: ${props => props.$theme.spacing.xs} ${props => props.$theme.spacing.sm};
    font-size: ${props => props.$theme.fontSize.sm};
    gap: ${props => props.$theme.spacing.xs};
  `,
  medium: css`
    padding: ${props => props.$theme.spacing.sm} ${props => props.$theme.spacing.md};
    font-size: ${props => props.$theme.fontSize.base};
    gap: ${props => props.$theme.spacing.xs};
  `,
  large: css`
    padding: ${props => props.$theme.spacing.md} ${props => props.$theme.spacing.lg};
    font-size: ${props => props.$theme.fontSize.lg};
    gap: ${props => props.$theme.spacing.sm};
  `
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${props => props.$theme.fontFamily.primary};
  font-weight: ${props => props.$theme.fontWeight.medium};
  border-radius: ${props => props.$theme.borderRadius.md};
  cursor: pointer;
  transition: all ${props => props.$theme.transitions.base};
  text-decoration: none;
  user-select: none;
  
  ${props => variants[props.$variant || 'primary']}
  ${props => sizes[props.$size || 'medium']}
  
  ${props => props.$fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => `${props.$theme.colors.primary}25`};
  }
`;

const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export { Button };
export default Button;
