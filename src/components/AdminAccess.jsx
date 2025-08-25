import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppAuth } from "../contexts/AuthContext.jsx";

const AdminAccess = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [localLoading, setLocalLoading] = useState(false);
  const { adminLogin, authError, clearAuthError } = useAppAuth();
  const navigate = useNavigate();
  const usernameRef = useRef(null);

  // Auto-focus en el campo de usuario al cargar
  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // No validaciones client-side ahora - solo verificar que no estén vacíos
    if (!username.trim() || !password.trim()) {
      return;
    }

    clearAuthError(); // Limpiar errores del contexto
    setLocalLoading(true);

    try {
      const result = await adminLogin(username.trim(), password);

      if (result.success) {
        // Login exitoso - limpiar form y redirigir
        setUsername("");
        setPassword("");
        navigate('/admin');
      }
      // El error ya se maneja en el contexto y se guarda en authError
    } catch (error) {
      console.error('Error en handleSubmit:', error);
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Acceso Administrador</Title>
      <Description>
        Ingresa tus credenciales de administrador para acceder al panel de control
      </Description>
      
      {authError && (
        <ErrorMessage $shake={!!authError}>
          <ErrorIcon>⚠️</ErrorIcon>
          {authError}
        </ErrorMessage>
      )}

      <FormGroup>
        <Label>Usuario</Label>
        <Input
          ref={usernameRef}
          type="text"
          placeholder="Ingrese su usuario"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            // Limpiar error cuando el usuario empieza a escribir
            if (authError) clearAuthError();
          }}
          disabled={localLoading}
          autoComplete="username"
          $hasError={authError && !username.trim()}
        />
      </FormGroup>

      <FormGroup>
        <Label>Contraseña</Label>
        <Input
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            // Limpiar error cuando el usuario empieza a escribir
            if (authError) clearAuthError();
          }}
          disabled={localLoading}
          autoComplete="current-password"
          $hasError={authError && !password.trim()}
        />
      </FormGroup>

      <SubmitButton 
        type="submit" 
        disabled={localLoading || !username.trim() || !password.trim()}
        onSubmit={(e) => e.preventDefault()} // Prevenir double-submit
      >
        {localLoading ? (
          <>
            <LoadingSpinner />
            Iniciando sesión...
          </>
        ) : (
          'Iniciar Sesión'
        )}
      </SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: var(--color-white);
  border-radius: 8px;
  position: relative;
`;

const Description = styled.p`
  text-align: center;
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

const Title = styled.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.$hasError ? 'var(--color-danger)' : 'var(--color-secondary)'};
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.$hasError ? 'var(--color-danger)' : 'var(--color-accent)'};
    box-shadow: 0 0 0 3px ${props => props.$hasError ? 'rgba(220, 53, 69, 0.25)' : 'rgba(229, 74, 46, 0.25)'};
  }

  &:disabled {
    background-color: var(--color-light);
    cursor: not-allowed;
    opacity: 0.7;
  }

  ${props => props.$hasError && `
    background-color: rgba(220, 53, 69, 0.05);
  `}
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: var(--color-accent);
  color: var(--color-white);
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(229, 74, 46, 0.3);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    opacity: 0.7;
  }
`;

const ErrorMessage = styled.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: ${props => props.$shake ? 'shake 0.5s ease-in-out' : 'none'};
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`;

const ErrorIcon = styled.span`
  font-size: 1rem;
  flex-shrink: 0;
`;

const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default AdminAccess;
