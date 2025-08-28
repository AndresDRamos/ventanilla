import { Component } from 'react';
import styled from 'styled-components';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(_error) {
    // Actualiza el state para mostrar el UI de error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Captura el error y la información adicional
    console.error('ErrorBoundary capturó un error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Aquí podrías enviar el error a un servicio de logging
    // logErrorToService(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // UI de error personalizado
      return (
        <ErrorContainer>
          <ErrorContent>
            <ErrorIcon>⚠️</ErrorIcon>
            <ErrorTitle>¡Oops! Algo salió mal</ErrorTitle>
            <ErrorMessage>
              Ha ocurrido un error inesperado. Por favor, intenta recargar la página 
              o regresa al inicio.
            </ErrorMessage>
            
            <ErrorActions>
              <ErrorButton onClick={this.handleReload} $primary>
                Recargar Página
              </ErrorButton>
              <ErrorButton onClick={this.handleGoHome}>
                Ir al Inicio
              </ErrorButton>
            </ErrorActions>

            {import.meta.env.DEV && (
              <ErrorDetails>
                <summary>Detalles del error (solo en desarrollo)</summary>
                <ErrorCode>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </ErrorCode>
              </ErrorDetails>
            )}
          </ErrorContent>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

// Styled Components
const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ErrorContent = styled.div`
  max-width: 500px;
  text-align: center;
  background: white;
  border-radius: 12px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h1`
  color: #dc3545;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
`;

const ErrorMessage = styled.p`
  color: #6c757d;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1rem;
`;

const ErrorActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const ErrorButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  
  ${props => props.$primary ? `
    background-color: #007bff;
    color: white;
    &:hover {
      background-color: #0056b3;
    }
  ` : `
    background-color: #f8f9fa;
    color: #6c757d;
    border: 1px solid #dee2e6;
    &:hover {
      background-color: #e9ecef;
    }
  `}
`;

const ErrorDetails = styled.details`
  margin-top: 2rem;
  text-align: left;
  
  summary {
    cursor: pointer;
    font-weight: 500;
    color: #6c757d;
    margin-bottom: 1rem;
    
    &:hover {
      color: #495057;
    }
  }
`;

const ErrorCode = styled.pre`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #dc3545;
  overflow-x: auto;
  max-width: 100%;
`;

export { ErrorBoundary };
export default ErrorBoundary;
