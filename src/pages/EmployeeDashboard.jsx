import { useState } from 'react';
import EmployeeQuestionnaire from '../components/EmployeeQuestionnaire.jsx';
import TicketSuccess from '../components/TicketSuccess.jsx';

const EmployeeDashboard = ({ employeeData, onLogout }) => {
  const [currentStep, setCurrentStep] = useState('questionnaire'); // Ir directamente al cuestionario
  const [createdTicket, setCreatedTicket] = useState(null);

  const handleTicketSubmitted = (ticket) => {
    setCreatedTicket(ticket);
    setCurrentStep('success');
  };

  const handleCreateAnother = () => {
    setCreatedTicket(null);
    setCurrentStep('questionnaire'); // Volver directamente al cuestionario
  };

  // Mostrar cuestionario
  if (currentStep === 'questionnaire') {
    return (
      <EmployeeQuestionnaire 
        employeeData={employeeData}
        onTicketSubmitted={handleTicketSubmitted}
        onLogout={onLogout}
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
