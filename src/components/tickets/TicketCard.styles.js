import styled from "styled-components";

// Componente principal de la tarjeta
export const Card = styled.div`
  background: white;
  border-radius: 8px;
  border-left: 4px solid var(--color-secondary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`;

// Header de la tarjeta
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${props => props.$isResolved ? '#f8f9fa' : 'white'};
  border-bottom: ${props => props.$isExpanded ? '1px solid #e9ecef' : 'none'};

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

// Secciones del header
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Badges y elementos de identificación
export const PriorityBadge = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${props => props.$priority || 'var(--color-secondary)'};
`;

export const TicketNumber = styled.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

// Secciones de acciones
export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const EmployeeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Botones de acción
export const AttendButton = styled.button`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2a2d29;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`;

export const ViewResponseButton = styled.button`
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.4rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  width: 32px;
  height: 32px;

  &:hover {
    background: var(--color-accent-dark, #d4ac0d);
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const StatusBadge = styled.button`
  background: ${props => props.$estadoColor || "#ffc107"};
  color: white;
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1);
  }

  @media (max-width: 768px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
`;

export const MobileExpandButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-gray);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-primary);
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

// Contenido expandible
export const Content = styled.div`
  overflow: hidden;
  
  @media (max-width: 768px) {
    /* Controlar altura y visibilidad sin cambiar layout interno */
    max-height: ${props => props.$isExpanded ? '500px' : '0px'};
    padding: ${props => props.$isExpanded ? '0.5rem 0' : '0'};
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;
    
    /* Forzar layout consistente manteniendo los elementos en su estado expandido */
    /* para evitar cambios de altura durante la transición */
  }

  @media (min-width: 769px) {
    max-height: none;
  }
`;

// Filas de propiedades
export const PropertyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #f8f9fa;
`;

export const PropertyLabel = styled.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
  min-width: 120px;
`;

export const PropertyValue = styled.span`
  color: var(--color-text);
  font-size: 0.85rem;
  text-align: right;
  flex: 1;
`;

// Fila especial para descripción
export const DescriptionRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
  }
`;

export const DescriptionText = styled.p`
  margin: 0;
  color: #495057;
  font-size: 0.85rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

// Sección de respuesta
export const ResponseSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
