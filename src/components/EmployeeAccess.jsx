import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppAuth } from "../contexts/AuthContext.jsx";
import { usePlantas, useEsquemasPago } from "../hooks/useTickets.js";
import { useEmpleados } from "../hooks/useEmpleados.js";
import EmailRequiredModal from "./EmailRequiredModal.jsx";

const EmployeeAccess = () => {
  const [employeeCode, setEmployeeCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlanta, setSelectedPlanta] = useState("");
  const [selectedEsquemaPago, setSelectedEsquemaPago] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1: Código empleado, 2: Datos completos
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [foundEmployee, setFoundEmployee] = useState(null);
  
  const { employeeLogin } = useAppAuth();
  const navigate = useNavigate();
  const { plantas, loading: loadingPlantas } = usePlantas();
  const { esquemas, loading: loadingEsquemas } = useEsquemasPago();
  const { buscarEmpleadoPorCodigo, crearEmpleado, actualizarCorreo, loading: loadingEmpleados } = useEmpleados();

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!employeeCode.trim()) {
      setError("Por favor, ingrese su código de empleado");
      return;
    }

    if (!/^\d+$/.test(employeeCode)) {
      setError("El código de empleado debe contener solo números");
      return;
    }

    setLoading(true);

    try {
      const result = await buscarEmpleadoPorCodigo(employeeCode.trim());
      
      if (!result.success) {
        setError("Error al buscar empleado: " + result.error);
        setLoading(false);
        return;
      }

      if (result.empleado) {
        // Empleado encontrado, verificar si tiene correo
        if (!result.empleado.correo) {
          // Sin correo - mostrar modal para solicitarlo
          setFoundEmployee(result.empleado);
          setShowEmailModal(true);
          setLoading(false);
          return;
        }

        // Empleado encontrado con correo, hacer login directo
        const loginData = {
          idEmpleado: result.empleado.idEmpleado,
          codigoEmpleado: result.empleado.codigoEmpleado,
          empleado: result.empleado.nombre,
          correo: result.empleado.correo,
          idPlanta: result.empleado.idPlanta,
          planta: result.empleado.plantas?.planta,
          idEsquemaPago: result.empleado.idEsquemaPago || null
        };
        
        employeeLogin(loginData);
        // Empleado autenticado exitosamente - redirigir
        navigate('/employee');
      } else {
        // Empleado no encontrado, mostrar formulario de registro
        setStep(2);
      }
    } catch (err) {
      setError("Error al procesar la búsqueda");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Función para guardar el correo del empleado encontrado
  const handleEmailSaved = async (email) => {
    try {
      const result = await actualizarCorreo(foundEmployee.idEmpleado, email);
      
      if (!result.success) {
        return { success: false, error: result.error };
      }

      // Actualizar datos del empleado con el nuevo correo
      const updatedEmployee = { ...foundEmployee, correo: email };
      
      // Hacer login con los datos actualizados
      const loginData = {
        idEmpleado: updatedEmployee.idEmpleado,
        codigoEmpleado: updatedEmployee.codigoEmpleado,
        empleado: updatedEmployee.nombre,
        correo: updatedEmployee.correo,
        idPlanta: updatedEmployee.idPlanta,
        planta: updatedEmployee.plantas?.planta,
        idEsquemaPago: updatedEmployee.idEsquemaPago || null
      };
      
      employeeLogin(loginData);
      
      // Cerrar modal y redirigir
      setShowEmailModal(false);
      setFoundEmployee(null);
      navigate('/employee');
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Función para cancelar el modal (continuar sin correo por ahora)
  const handleEmailModalCancel = () => {
    // Hacer login sin correo
    const loginData = {
      idEmpleado: foundEmployee.idEmpleado,
      codigoEmpleado: foundEmployee.codigoEmpleado,
      empleado: foundEmployee.nombre,
      correo: null,
      idPlanta: foundEmployee.idPlanta,
      planta: foundEmployee.plantas?.planta,
      idEsquemaPago: foundEmployee.idEsquemaPago || null
    };
    
    employeeLogin(loginData);
    
    // Cerrar modal y redirigir
    setShowEmailModal(false);
    setFoundEmployee(null);
    navigate('/employee');
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !selectedPlanta || !selectedEsquemaPago) {
      setError("Por favor, complete todos los campos obligatorios");
      return;
    }

    setLoading(true);

    try {
      const result = await crearEmpleado(
        employeeCode.trim(), 
        fullName.trim(), 
        selectedPlanta, 
        selectedEsquemaPago,
        email.trim() || null // Incluir correo si se proporcionó
      );
      
      if (!result.success) {
        setError("Error al registrar empleado: " + result.error);
        setLoading(false);
        return;
      }

      // Empleado creado, hacer login
      employeeLogin({
        idEmpleado: result.empleado.idEmpleado,
        codigoEmpleado: result.empleado.codigoEmpleado,
        empleado: result.empleado.nombre,
        correo: result.empleado.correo,
        idPlanta: result.empleado.idPlanta,
        planta: result.empleado.plantas?.planta,
        idEsquemaPago: result.empleado.idEsquemaPago || null
      });
      
      // Empleado registrado y autenticado exitosamente - redirigir
      navigate('/employee');
    } catch (err) {
      setError("Error al procesar el registro");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToCode = () => {
    setStep(1);
    setFullName("");
    setEmail("");
    setSelectedPlanta("");
    setSelectedEsquemaPago("");
    setError("");
  };

  if (step === 1) {
    return (
      <>
        <Form onSubmit={handleCodeSubmit}>
          <Title>Acceso Empleado</Title>
          <Description>
            Ingresa tu código de empleado para acceder al sistema
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
              disabled={loading || loadingEmpleados}
              required
              autoComplete="employee-id"
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={loading || loadingEmpleados}>
            {loading || loadingEmpleados ? "Verificando..." : "Acceder"}
          </SubmitButton>
        </Form>

        {/* Modal de correo requerido */}
        <EmailRequiredModal
          isOpen={showEmailModal}
          employeeData={foundEmployee}
          onEmailSaved={handleEmailSaved}
          onCancel={handleEmailModalCancel}
        />
      </>
    );
  }

  return (
    <Form onSubmit={handleRegistrationSubmit}>
      <Title>Registro de Empleado</Title>
      <Description>
        No encontramos tu código de empleado. Por favor, completa la siguiente información:
      </Description>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <InfoMessage>
        Código de empleado: <strong>{employeeCode}</strong>
      </InfoMessage>

      <FormGroup>
        <Label>Nombre Completo</Label>
        <TextInput
          type="text"
          placeholder="Ej: Juan Pérez García"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={loading || loadingEmpleados || loadingEsquemas}
          required
          autoComplete="name"
        />
      </FormGroup>

      <FormGroup>
        <Label>Correo Electrónico</Label>
        <TextInput
          type="email"
          placeholder="tu.correo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading || loadingEmpleados || loadingEsquemas}
          autoComplete="email"
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
            disabled={loading || loadingEmpleados || loadingEsquemas}
            required
          >
            <option value="">Seleccione su planta</option>
            {plantas.map((planta) => (
              <option key={planta.idPlanta} value={planta.idPlanta}>
                {planta.planta}
              </option>
            ))}
          </Select>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Esquema de Pago</Label>
        {loadingEsquemas ? (
          <LoadingSelect disabled>Cargando esquemas...</LoadingSelect>
        ) : (
          <Select
            value={selectedEsquemaPago}
            onChange={(e) => setSelectedEsquemaPago(e.target.value)}
            disabled={loading || loadingEmpleados || loadingEsquemas}
            required
          >
            <option value="">Seleccione su esquema</option>
            {esquemas.map((esquema) => (
              <option key={esquema.idEsquemaPago} value={esquema.idEsquemaPago}>
                {esquema.esquemaPago}
              </option>
            ))}
          </Select>
        )}
      </FormGroup>

      <ButtonGroup>
        <BackButton type="button" onClick={handleBackToCode} disabled={loading || loadingEmpleados || loadingEsquemas}>
          Volver
        </BackButton>
        <SubmitButton type="submit" disabled={loading || loadingEmpleados || loadingEsquemas} style={{flex: 1}}>
          {loading || loadingEmpleados || loadingEsquemas ? "Registrando..." : "Registrar y Acceder"}
        </SubmitButton>
      </ButtonGroup>
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
  min-width: 100%;

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

const InfoMessage = styled.div`
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #1976d2;
  text-align: center;
  font-size: 0.9rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const BackButton = styled.button`
  flex: 1;
  background-color: #6c757d;
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
    background-color: #5a6268;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`;
export default EmployeeAccess;
