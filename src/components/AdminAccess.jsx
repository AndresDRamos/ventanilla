import { useState } from "react";
import styled from "styled-components";
import { useAppAuth } from "../contexts/AuthContext.jsx";

const AdminAccess = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { adminLogin, loading } = useAppAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Por favor, complete todos los campos");
      return;
    }

    console.log("Intentando autenticar admin con:", { usuario: username.trim(), contraseña: password });

    const result = await adminLogin(username.trim(), password);

    if (result.success) {
      console.log("Admin autenticado correctamente:", result.user);
    } else {
      setError(result.error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Acceso Administrador</Title>
      <Description>
        Ingresa tus credenciales de administrador para acceder al panel de control
      </Description>
      
      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}

      <FormGroup>
        <Label>Usuario</Label>
        <Input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
        />
      </FormGroup>

      <FormGroup>
        <Label>Contraseña</Label>
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </FormGroup>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
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
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &:disabled {
    background-color: var(--color-light);
    cursor: not-allowed;
  }
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
  transition: background-color 0.2s ease;
  font-family: inherit;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
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
`;

export default AdminAccess;
