import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || '200px'};
  width: 100%;
  gap: 1rem;
`;

const SpinnerElement = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  animation: ${spin} 1s linear infinite;
`;

const SpinnerText = styled.div`
  color: ${props => props.textColor || '#6c757d'};
  font-size: 0.9rem;
  text-align: center;
  font-weight: 500;
`;

const Spinner = ({ 
  size = '40px', 
  height = '200px',
  text = 'Cargando...',
  showText = true,
  textColor = '#6c757d'
}) => {
  return (
    <SpinnerContainer height={height}>
      <SpinnerElement size={size} />
      {showText && <SpinnerText textColor={textColor}>{text}</SpinnerText>}
    </SpinnerContainer>
  );
};

export default Spinner;
