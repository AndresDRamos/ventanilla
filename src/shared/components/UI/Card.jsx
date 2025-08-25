import styled, { css } from 'styled-components';
import { useTheme } from '../../../core/contexts/ThemeContext';

const Card = ({ 
  variant = 'default',
  padding = 'default',
  hover = false,
  className,
  children,
  ...props 
}) => {
  const { theme } = useTheme();
  
  return (
    <StyledCard
      $variant={variant}
      $padding={padding}
      $hover={hover}
      $theme={theme}
      className={className}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

// Variantes de card
const variants = {
  default: css`
    background: ${props => props.$theme.colors.white};
    border: 1px solid ${props => props.$theme.colors.gray[200]};
    box-shadow: ${props => props.$theme.shadows.sm};
  `,
  elevated: css`
    background: ${props => props.$theme.colors.white};
    border: 1px solid ${props => props.$theme.colors.gray[100]};
    box-shadow: ${props => props.$theme.shadows.md};
  `,
  outlined: css`
    background: ${props => props.$theme.colors.white};
    border: 2px solid ${props => props.$theme.colors.gray[300]};
    box-shadow: none;
  `,
  filled: css`
    background: ${props => props.$theme.colors.gray[50]};
    border: 1px solid ${props => props.$theme.colors.gray[200]};
    box-shadow: none;
  `,
  success: css`
    background: ${props => props.$theme.colors.successLight};
    border: 1px solid ${props => props.$theme.colors.success};
    box-shadow: none;
  `,
  warning: css`
    background: ${props => props.$theme.colors.warningLight};
    border: 1px solid ${props => props.$theme.colors.warning};
    box-shadow: none;
  `,
  danger: css`
    background: ${props => props.$theme.colors.dangerLight};
    border: 1px solid ${props => props.$theme.colors.danger};
    box-shadow: none;
  `,
  info: css`
    background: ${props => props.$theme.colors.infoLight};
    border: 1px solid ${props => props.$theme.colors.info};
    box-shadow: none;
  `
};

// Padding variants
const paddings = {
  none: css`
    padding: 0;
  `,
  small: css`
    padding: ${props => props.$theme.spacing.sm};
  `,
  default: css`
    padding: ${props => props.$theme.spacing.md};
  `,
  large: css`
    padding: ${props => props.$theme.spacing.lg};
  `,
  extra: css`
    padding: ${props => props.$theme.spacing.xl};
  `
};

const StyledCard = styled.div`
  border-radius: ${props => props.$theme.borderRadius.lg};
  transition: all ${props => props.$theme.transitions.base};
  
  ${props => variants[props.$variant || 'default']}
  ${props => paddings[props.$padding || 'default']}
  
  ${props => props.$hover && css`
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${props => props.$theme.shadows.lg};
    }
  `}
`;

// Componentes relacionados
const CardHeader = styled.div`
  padding-bottom: ${props => props.theme?.spacing?.md || '1rem'};
  border-bottom: 1px solid ${props => props.theme?.colors?.gray?.[200] || '#dee2e6'};
  margin-bottom: ${props => props.theme?.spacing?.md || '1rem'};
  
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const CardBody = styled.div`
  /* Contenido principal del card */
`;

const CardFooter = styled.div`
  padding-top: ${props => props.theme?.spacing?.md || '1rem'};
  border-top: 1px solid ${props => props.theme?.colors?.gray?.[200] || '#dee2e6'};
  margin-top: ${props => props.theme?.spacing?.md || '1rem'};
  
  &:first-child {
    margin-top: 0;
    border-top: none;
    padding-top: 0;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 ${props => props.theme?.spacing?.sm || '0.5rem'} 0;
  color: ${props => props.theme?.colors?.gray?.[800] || '#212529'};
  font-size: ${props => props.theme?.fontSize?.lg || '1.125rem'};
  font-weight: ${props => props.theme?.fontWeight?.semibold || 600};
`;

const CardSubtitle = styled.p`
  margin: 0 0 ${props => props.theme?.spacing?.sm || '0.5rem'} 0;
  color: ${props => props.theme?.colors?.gray?.[600] || '#6c757d'};
  font-size: ${props => props.theme?.fontSize?.sm || '0.875rem'};
`;

export { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  CardTitle, 
  CardSubtitle 
};

export default Card;
