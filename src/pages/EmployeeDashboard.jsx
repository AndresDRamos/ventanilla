import { useState, useEffect } from 'react';
import EmployeeQuestionnaire from '../components/EmployeeQuestionnaire.jsx';
import EmployeeTicketsPage from './EmployeeTicketsPage.jsx';
import TicketSuccess from '../components/TicketSuccess.jsx';
import useEmployeeTickets from '../utils/useEmployeeTickets.js';

const EmployeeDashboard = ({ employeeData, onLogout }) => {
  const [currentStep, setCurrentStep] = useState('loading'); // loading, tickets, questionnaire, success
  const [createdTicket, setCreatedTicket] = useState(null);
  
  // Usar idEmpleado en lugar de codigoEmpleado
  const { tickets, loading } = useEmployeeTickets(employeeData?.idEmpleado);

  useEffect(() => {
    if (!loading) {
      // Si el empleado tiene tickets previos, mostrar la página de tickets
      // Si no tiene tickets, ir directamente al cuestionario
      const nextStep = tickets.length > 0 ? 'tickets' : 'questionnaire';
      setCurrentStep(nextStep);
    }
  }, [tickets, loading]);

  const handleTicketSubmitted = (ticket) => {
    setCreatedTicket(ticket);
    setCurrentStep('success');
  };

  const handleCreateAnother = () => {
    setCreatedTicket(null);
    // Si el empleado tiene tickets, volver a la página de tickets
    // Si no, ir directamente al cuestionario
    setCurrentStep(tickets.length > 0 ? 'tickets' : 'questionnaire');
  };

  const handleBackToTickets = () => {
    setCurrentStep('tickets');
  };

  // Estado de carga
  if (currentStep === 'loading') {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, var(--color-primary) 0%, #1e3c72 100%)',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        Cargando...
      </div>
    );
  }

  // Mostrar página de tickets existentes
  if (currentStep === 'tickets') {
    return (
      <EmployeeTicketsPage 
        employeeData={employeeData}
        onLogout={onLogout}
      />
    );
  }

  // Mostrar cuestionario para crear nuevo ticket
  if (currentStep === 'questionnaire') {
    return (
      <EmployeeQuestionnaire 
        employeeData={employeeData}
        onTicketSubmitted={handleTicketSubmitted}
        onLogout={onLogout}
        onBack={tickets.length > 0 ? handleBackToTickets : null}
      />
    );
  }

  // Mostrar página de éxito
  return (
    <TicketSuccess 
      ticket={createdTicket}
      onCreateAnother={handleCreateAnother}
      onLogout={onLogout}
    />
  );
};

export default EmployeeDashboard;
