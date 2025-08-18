import styled from 'styled-components';

const AccessSelector = ({ selectedType, onSelectType }) => {
  return (
    <Container>
      <Title>Selecciona tu tipo de acceso</Title>
      <ButtonGroup>
        <AccessButton 
          selected={selectedType === 'employee'} 
          onClick={() => onSelectType('employee')}
        >
          <Icon>👤</Icon>
          <span>Acceso Empleado</span>
          <Description>Para crear tickets y solicitudes</Description>
        </AccessButton>
        
        <AccessButton 
          selected={selectedType === 'admin'} 
          onClick={() => onSelectType('admin')}
        >
          <Icon>🔑</Icon>
          <span>Acceso Administrador</span>
          <Description>Para gestionar el sistema</Description>
        </AccessButton>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const AccessButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border: 2px solid ${props => props.selected ? 'var(--color-accent)' : 'var(--color-secondary)'};
  background: ${props => props.selected ? 'var(--color-accent)' : 'var(--color-white)'};
  color: ${props => props.selected ? 'var(--color-white)' : 'var(--color-primary)'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;
  font-family: inherit;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px var(--color-shadow);
  }

  span {
    font-weight: 600;
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
`;

const Description = styled.small`
  font-size: 0.85rem;
  opacity: 0.8;
  text-align: center;
`;

export default AccessSelector;
