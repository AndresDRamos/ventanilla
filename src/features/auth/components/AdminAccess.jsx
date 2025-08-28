import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppAuth } from "../../../core/contexts/AuthContext";
import { useTheme } from "../../../core/contexts/ThemeContext";

const AdminAccess = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { adminLogin, loading } = useAppAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Por favor, complete todos los campos");
      return;
    }

    const result = await adminLogin(username.trim(), password);

    if (result.success) {
      // Login exitoso - redirigir al dashboard admin
      navigate('/admin');
    } else {
      setError(result.error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} $theme={theme}>
      <Title $theme={theme}>Acceso Administrador</Title>
      <Description $theme={theme}>
        Ingresa tus credenciales de administrador para acceder al panel de control
      </Description>
      
      {error && (
        <ErrorMessage $theme={theme}>
          {error}
        </ErrorMessage>
      )}

      <FormGroup>
        <Label $theme={theme}>Usuario</Label>
        <Input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
          autoComplete="username"
          $theme={theme}
        />
      </FormGroup>

      <FormGroup>
        <Label $theme={theme}>Contraseña</Label>
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          autoComplete="current-password"
          $theme={theme}
        />
      </FormGroup>

      <SubmitButton type="submit" disabled={loading} $theme={theme}>
        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.$theme.colors.white};
  border-radius: ${props => props.$theme.borderRadius};
  box-shadow: ${props => props.$theme.shadows.sm};
  position: relative;
`;

const Description = styled.p`
  text-align: center;
  color: ${props => props.$theme.colors.gray[600]};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

const Title = styled.h2`
  text-align: center;
  color: ${props => props.$theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.$theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.$theme.colors.gray[300]};
  border-radius: ${props => props.$theme.borderRadius};
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.$theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.$theme.colors.primary}20;
  }

  &:disabled {
    background-color: ${props => props.$theme.colors.gray[100]};
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${props => props.$theme.colors.primary};
  color: ${props => props.$theme.colors.white};
  border: none;
  border-radius: ${props => props.$theme.borderRadius};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${props => props.$theme.colors.primaryDark};
    transform: translateY(-1px);
  }

  &:disabled {
    background: ${props => props.$theme.colors.gray[400]};
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMessage = styled.div`
  background: ${props => props.$theme.colors.danger}20;
  color: ${props => props.$theme.colors.danger};
  padding: 0.75rem;
  border-radius: ${props => props.$theme.borderRadius};
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: center;
  border: 1px solid ${props => props.$theme.colors.danger}40;
`;

export default AdminAccess;
