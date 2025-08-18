import { useState } from "react";
import styled from "styled-components";
import { useAppAuth } from "../contexts/AuthContext.jsx";
import { usePlantas } from "../utils/useTickets.js";

const EmployeeAccess = () => {
  const [employeeCode, setEmployeeCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedPlanta, setSelectedPlanta] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { employeeLogin } = useAppAuth();
  const { plantas, loading: loadingPlantas } = usePlantas();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!employeeCode.trim() || !fullName.trim() || !selectedPlanta) {
      setError("Por favor, complete todos los campos");
      return;
    }

    if (!/^\d+$/.test(employeeCode)) {
      setError("El código de empleado debe contener solo números");
      return;
    }

    setLoading(true);

    try {
      const result = employeeLogin({
        codigoEmpleado: employeeCode.trim(),
        empleado: fullName.trim(),
        idPlanta: selectedPlanta,
      });

      console.log("Empleado autenticado:", result.employee);
    } catch (err) {
      setError("Error al procesar el acceso");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Acceso Empleado</Title>
      <Description>
        Ingresa tu código de empleado y nombre completo para acceder al sistema
      </Description>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <FormGroup>
        <Label>Número de Empleado</Label>
        <NumericInput
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Ej: 12345"
          value={employeeCode}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, ""); // Solo números
            setEmployeeCode(value);
          }}
          disabled={loading}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Nombre Completo</Label>
        <TextInput
          type="text"
          placeholder="Ej: Juan Pérez García"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={loading}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Planta</Label>
        {loadingPlantas ? (
          <LoadingSelect disabled>Cargando plantas...</LoadingSelect>
        ) : (
          <Select
            value={selectedPlanta}
            onChange={(e) => setSelectedPlanta(e.target.value)}
            disabled={loading}
            required
          >
            <option value="">Seleccione su planta...</option>
            {plantas.map((planta) => (
              <option key={planta.idPlanta} value={planta.idPlanta}>
                {planta.planta}
              </option>
            ))}
          </Select>
        )}
      </FormGroup>

      <SubmitButton type="submit" disabled={loading}>
        {loading ? "Accediendo..." : "Acceder"}
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

const BaseInput = styled.input`
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

const NumericInput = styled(BaseInput)`
  /* Ocultar botones de incremento/decremento en navegadores webkit */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Ocultar botones en Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

const TextInput = styled(BaseInput)``;

const Select = styled.select`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  background-color: var(--color-white);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`;

const LoadingSelect = styled.div`
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  font-size: 1rem;
  background-color: #f8f9fa;
  color: var(--color-gray);
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

export default EmployeeAccess;
