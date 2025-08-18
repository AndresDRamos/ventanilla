import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el state para mostrar la UI de error en el siguiente renderizado
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h2>¡Ups! Algo salió mal</h2>
          <p>Ha ocurrido un error inesperado.</p>
          <pre>{this.state.error?.toString()}</pre>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              background: 'var(--color-accent)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Intentar de nuevo
          </button>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background: var(--color-pink);
  border: 1px solid var(--color-danger);
  border-radius: 8px;
  margin: 2rem;

  h2 {
    color: var(--color-danger);
    margin-bottom: 1rem;
  }

  pre {
    background: rgba(0,0,0,0.1);
    padding: 1rem;
    border-radius: 4px;
    margin: 1rem 0;
    overflow-x: auto;
    font-size: 0.8rem;
  }
`;

export default ErrorBoundary;
