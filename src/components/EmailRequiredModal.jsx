import { useState } from 'react';
import styled from 'styled-components';

const EmailRequiredModal = ({ isOpen, onEmailSaved }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Por favor, ingrese su correo electrónico');
      return;
    }

    if (!validateEmail(email.trim())) {
      setError('Por favor, ingrese un correo electrónico válido');
      return;
    }

    setLoading(true);

    try {
      // Llamar a la función proporcionada para guardar el email
      const result = await onEmailSaved(email.trim());
      
      if (!result.success) {
        setError(result.error || 'Error al guardar el correo electrónico');
        setLoading(false);
        return;
      }

      // Éxito - cerrar modal
      setEmail('');
      setError('');
    } catch (err) {
      setError('Error al guardar el correo electrónico');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <Title>Correo Electrónico Requerido</Title>
        </ModalHeader>

        <ModalBody>
          <Message>
            Para mejorar nuestro servicio, necesitamos tu correo electrónico 
            para enviarte notificaciones cuando tus tickets sean atendidos.
          </Message>

          <Form onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <FormGroup>
              <Label>Correo Electrónico *</Label>
              <EmailInput
                type="email"
                placeholder="tu.correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </FormGroup>

            <ButtonGroup>
        
              <SaveButton
                type="submit"
                disabled={loading || !email.trim()}
              >
                {loading ? 'Guardando...' : 'Guardar Correo'}
              </SaveButton>
            </ButtonGroup>
          </Form>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 20px;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  padding: 30px 30px 20px 30px;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: 600;
`;


const ModalBody = styled.div`
  padding: 30px;
`;

const Message = styled.p`
  color: #495057;
  line-height: 1.6;
  margin-bottom: 25px;
  text-align: center;
  background: #e3f2fd;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
`;

const EmailInput = styled.input`
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px 16px;
  border-radius: 6px;
  border-left: 4px solid #dc3545;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const SaveButton = styled(Button)`
  background: #007bff;
  color: white;

  &:hover:not(:disabled) {
    background: #0056b3;
  }
`;

export default EmailRequiredModal;
