import { useState } from 'react';
import styled from 'styled-components';
import { useAppAuth } from '../contexts/AuthContext.jsx';
import useEmployeeTickets from '../utils/useEmployeeTickets.js';
import EmployeeTicketCard from '../components/EmployeeTicketCard.jsx';
import EmployeeQuestionnaire from '../components/EmployeeQuestionnaire.jsx';

const EmployeeTicketsPage = ({ employeeData, onLogout }) => {
  const { logout } = useAppAuth();
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' o 'resolved'
  const [showNewTicket, setShowNewTicket] = useState(false);
  
  const {
    pendingTickets,
    resolvedTickets,
    loading,
    error,
    refetch
  } = useEmployeeTickets(employeeData?.codigoEmpleado);

  // Función para obtener color de prioridad
  const getPriorityColor = (idPrioridad) => {
    switch (idPrioridad) {
      case 1: return '#dc3545'; // Alta - Rojo
      case 2: return '#ffc107'; // Media - Amarillo
      case 3: return '#28a745'; // Baja - Verde
      default: return '#6c757d'; // Default - Gris
    }
  };

  // Función para formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const handleTicketSubmitted = () => {
    setShowNewTicket(false);
    refetch(); // Recargar tickets después de crear uno nuevo
  };

  const handleLogout = () => {
    logout();
    if (onLogout) onLogout();
  };

  if (showNewTicket) {
    return (
      <EmployeeQuestionnaire
        employeeData={employeeData}
        onTicketSubmitted={handleTicketSubmitted}
        onLogout={handleLogout}
        onBack={() => setShowNewTicket(false)}
      />
    );
  }

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <WelcomeText>
            Bienvenido, {employeeData?.empleado}
          </WelcomeText>
          <EmployeeInfo>
            Código: {employeeData?.codigoEmpleado} | Planta: {employeeData?.plantas?.planta}
          </EmployeeInfo>
        </HeaderLeft>
        
        <HeaderRight>
          <LogoutButton onClick={handleLogout}>
            Cerrar Sesión
          </LogoutButton>
        </HeaderRight>
      </Header>

      <TabsContainer>
        <Tab 
          active={activeTab === 'pending'}
          onClick={() => setActiveTab('pending')}
        >
          Tickets Pendientes ({pendingTickets.length})
        </Tab>
        <Tab 
          active={activeTab === 'resolved'}
          onClick={() => setActiveTab('resolved')}
        >
          Tickets Resueltos ({resolvedTickets.length})
        </Tab>
      </TabsContainer>

      <MainContent>
        {loading ? (
          <LoadingMessage>Cargando tickets...</LoadingMessage>
        ) : error ? (
          <ErrorMessage>Error al cargar tickets: {error}</ErrorMessage>
        ) : (
          <>
            <TicketsSection>
              {activeTab === 'pending' ? (
                <>
                  {pendingTickets.length === 0 ? (
                    <EmptyMessage>
                      <EmptyIcon>📋</EmptyIcon>
                      <EmptyTitle>No tienes tickets pendientes</EmptyTitle>
                      <EmptySubtitle>
                        ¡Perfecto! Todos tus tickets han sido atendidos.
                      </EmptySubtitle>
                    </EmptyMessage>
                  ) : (
                    pendingTickets.map(ticket => (
                      <EmployeeTicketCard
                        key={ticket.idTicket}
                        ticket={ticket}
                        formatDate={formatDate}
                        getPriorityColor={getPriorityColor}
                        isResolved={false}
                      />
                    ))
                  )}
                </>
              ) : (
                <>
                  {resolvedTickets.length === 0 ? (
                    <EmptyMessage>
                      <EmptyIcon>✅</EmptyIcon>
                      <EmptyTitle>No tienes tickets resueltos</EmptyTitle>
                      <EmptySubtitle>
                        Aquí aparecerán los tickets que hayan sido atendidos.
                      </EmptySubtitle>
                    </EmptyMessage>
                  ) : (
                    resolvedTickets.map(ticket => (
                      <EmployeeTicketCard
                        key={ticket.idTicket}
                        ticket={ticket}
                        formatDate={formatDate}
                        getPriorityColor={getPriorityColor}
                        isResolved={true}
                      />
                    ))
                  )}
                </>
              )}
            </TicketsSection>

            <CreateTicketSection>
              <CreateTicketButton onClick={() => setShowNewTicket(true)}>
                + Crear Nuevo Ticket
              </CreateTicketButton>
            </CreateTicketSection>
          </>
        )}
      </MainContent>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-primary) 0%, #1e3c72 100%);
  padding: 1rem;
`;

const Header = styled.header`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const WelcomeText = styled.h1`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 600;
`;

const EmployeeInfo = styled.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`;

const LogoutButton = styled.button`
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background: #e54a2e;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Tab = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  background: ${props => props.active ? 'var(--color-primary)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--color-gray)'};
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.active ? 'var(--color-primary)' : '#f8f9fa'};
  }
`;

const MainContent = styled.main`
  background: white;
  border-radius: 0 0 12px 12px;
  min-height: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TicketsSection = styled.div`
  padding: 1.5rem;
  max-height: 60vh;
  overflow-y: auto;
`;

const CreateTicketSection = styled.div`
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #dee2e6;
  background: #f8f9fa;
  border-radius: 0 0 12px 12px;
`;

const CreateTicketButton = styled.button`
  width: 100%;
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background: #e54a2e;
    transform: translateY(-1px);
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #dc3545;
  font-size: 1rem;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
`;

const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const EmptyTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: var(--color-primary);
  font-size: 1.2rem;
`;

const EmptySubtitle = styled.p`
  margin: 0;
  color: var(--color-gray);
  font-size: 0.9rem;
`;

export default EmployeeTicketsPage;
