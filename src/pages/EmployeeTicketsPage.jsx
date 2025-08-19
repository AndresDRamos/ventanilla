import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppAuth } from "../contexts/AuthContext.jsx";
import useEmployeeTickets from "../utils/useEmployeeTickets.js";
import { useEmpleados } from "../utils/useEmpleados.js";
import { useEsquemasPago } from "../utils/useTickets.js";
import { formatMexicanDate } from "../utils/dateUtils.js";
import TicketCard from "../components/TicketCard.jsx";
import EmployeeQuestionnaire from "../components/EmployeeQuestionnaire.jsx";

const EmployeeTicketsPage = ({ employeeData, onLogout }) => {
  const { logout } = useAppAuth();
  const [activeTab, setActiveTab] = useState("pending"); // 'pending' o 'resolved'
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [empleadoCompleto, setEmpleadoCompleto] = useState(null);
  const [loadingEmpleado, setLoadingEmpleado] = useState(true);
  const [expandedTicketId, setExpandedTicketId] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const { buscarEmpleadoPorCodigo } = useEmpleados();
  const { esquemas } = useEsquemasPago();

  const {
    pendingTickets,
    resolvedTickets,
    loading: loadingTickets,
    error,
    refetch,
  } = useEmployeeTickets(empleadoCompleto?.idEmpleado);

  // Combinar estados de loading
  const loading = loadingEmpleado || loadingTickets;

  // Buscar el empleado completo por código al montar el componente
  useEffect(() => {
    const buscarEmpleado = async () => {
      if (!employeeData?.codigoEmpleado) return;

      setLoadingEmpleado(true);
      try {
        const result = await buscarEmpleadoPorCodigo(
          employeeData.codigoEmpleado
        );
        if (result.success && result.empleado) {
          setEmpleadoCompleto(result.empleado);
        } else {
          // Si no se encuentra el empleado en la BD, usar los datos de sesión
          console.warn(
            "No se encontró el empleado en BD, usando datos de sesión"
          );
          setEmpleadoCompleto({
            idEmpleado: employeeData.idEmpleado,
            codigoEmpleado: employeeData.codigoEmpleado,
            nombre: employeeData.empleado,
            idPlanta: employeeData.idPlanta,
            plantas: { planta: employeeData.planta },
          });
        }
      } catch (err) {
        console.error("Error al buscar empleado:", err);
        // En caso de error, usar los datos de sesión como fallback
        setEmpleadoCompleto({
          idEmpleado: employeeData.idEmpleado,
          codigoEmpleado: employeeData.codigoEmpleado,
          nombre: employeeData.empleado,
          idPlanta: employeeData.idPlanta,
          plantas: { planta: employeeData.planta },
        });
      } finally {
        setLoadingEmpleado(false);
      }
    };

    buscarEmpleado();
  }, [employeeData, buscarEmpleadoPorCodigo]);

  // Función para obtener color de prioridad
  const getPriorityColor = (idPrioridad) => {
    switch (idPrioridad) {
      case 1:
        return "#dc3545"; // Alta - Rojo
      case 2:
        return "#ffc107"; // Media - Amarillo
      case 3:
        return "#28a745"; // Baja - Verde
      default:
        return "#6c757d"; // Default - Gris
    }
  };

  // Función para formatear fecha
  const formatDate = (dateString) => {
    return formatMexicanDate(dateString);
  };

  // Función para manejar la expansión de tickets
  const handleToggleExpand = (ticketId) => {
    setExpandedTicketId(expandedTicketId === ticketId ? null : ticketId);
  };

  // Función para manejar la vista de detalles
  const handleShowDetails = (ticket) => {
    setSelectedTicket(ticket);
    setShowDetailModal(true);
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
        employeeData={empleadoCompleto || employeeData}
        onTicketSubmitted={handleTicketSubmitted}
        onLogout={handleLogout}
        onBack={() => setShowNewTicket(false)}
      />
    );
  }

  return (
    <Container>
      <FixedContent>
        <Header>
          <HeaderLeft>
            <WelcomeText>
              {empleadoCompleto?.nombre || employeeData?.empleado}
            </WelcomeText>
            <EmployeeInfo>
              Código:{" "}
              {empleadoCompleto?.codigoEmpleado || employeeData?.codigoEmpleado}{" "}
              | Planta:{" "}
              {empleadoCompleto?.plantas?.planta || employeeData?.planta} |
              Esquema:{" "}
              {esquemas.find(
                (e) =>
                  e.idEsquemaPago ===
                  (empleadoCompleto?.idEsquemaPago ||
                    employeeData?.idEsquemaPago)
              )?.esquemaPago || "No configurado"}
            </EmployeeInfo>
          </HeaderLeft>

          <HeaderRight>
            <LogoutButton onClick={handleLogout}>Cerrar Sesión</LogoutButton>
          </HeaderRight>
        </Header>

        <TabsContainer>
          <Tab
            active={activeTab === "pending"}
            onClick={() => {
              setActiveTab("pending");
              setExpandedTicketId(null);
            }}
          >
            Tickets Pendientes ({pendingTickets.length})
          </Tab>
          <Tab
            active={activeTab === "resolved"}
            onClick={() => {
              setActiveTab("resolved");
              setExpandedTicketId(null);
            }}
          >
            Tickets Resueltos ({resolvedTickets.length})
          </Tab>
        </TabsContainer>
      </FixedContent>

      <ScrollableTicketsArea>
        {loading ? (
          <LoadingMessage>Cargando tickets...</LoadingMessage>
        ) : error ? (
          <ErrorMessage>Error al cargar tickets: {error}</ErrorMessage>
        ) : (
          <TicketsContainer>
            <TicketsSection>
              {activeTab === "pending" ? (
                <>
                  {pendingTickets.length === 0 ? (
                    <EmptyMessage>
                      <EmptyIcon>📋</EmptyIcon>
                      <EmptyTitle>No tienes tickets pendientes</EmptyTitle>
                      <EmptySubtitle>
                        Aquí aparecerán los tickets que hayas creado y aún no
                        han sido atendidos.
                      </EmptySubtitle>
                    </EmptyMessage>
                  ) : (
                    pendingTickets.map((ticket) => (
                      <TicketCard
                        key={ticket.idTicket}
                        ticket={ticket}
                        mode="employee"
                        formatDate={formatDate}
                        getPriorityColor={getPriorityColor}
                        isResolved={false}
                        isExpanded={expandedTicketId === ticket.idTicket}
                        onToggleExpand={handleToggleExpand}
                        onShowDetails={handleShowDetails}
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
                    resolvedTickets.map((ticket) => (
                      <TicketCard
                        key={ticket.idTicket}
                        ticket={ticket}
                        mode="employee"
                        formatDate={formatDate}
                        getPriorityColor={getPriorityColor}
                        isResolved={true}
                        isExpanded={expandedTicketId === ticket.idTicket}
                        onToggleExpand={handleToggleExpand}
                        onShowDetails={handleShowDetails}
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
          </TicketsContainer>
        )}
      </ScrollableTicketsArea>

      {/* Modal de Detalles */}
      {showDetailModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h3>Detalles - Ticket #{selectedTicket?.idTicket}</h3>
              <CloseButton onClick={() => setShowDetailModal(false)}>
                ×
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              <InfoRow>
                <InfoLabel>Fecha creación:</InfoLabel>
                <InfoValue>
                  {formatDate(selectedTicket?.fechaCreacion)}
                </InfoValue>
              </InfoRow>

              <InfoRow>
                <InfoLabel>Tipo:</InfoLabel>
                <InfoValue>
                  {selectedTicket?.tiposSolicitud?.tipoSolicitud}
                </InfoValue>
              </InfoRow>

              <InfoRow>
                <InfoLabel>Prioridad:</InfoLabel>
                <InfoValue>{selectedTicket?.prioridades?.prioridad}</InfoValue>
              </InfoRow>

              <InfoRow>
                <InfoLabel>Descripción:</InfoLabel>
                <InfoValue>{selectedTicket?.descripcion}</InfoValue>
              </InfoRow>

              {/* Mostrar respuesta solo si el ticket está resuelto */}
              {selectedTicket?.atenciones &&
                selectedTicket.atenciones.length > 0 && (
                  <>
                    <InfoRow>
                      <InfoLabel>Respuesta:</InfoLabel>
                      <InfoValue style={{ textAlign: "left" }}>
                        <ResponseDisplay>
                          {selectedTicket.atenciones[0].respuesta ||
                            "No hay respuesta disponible"}
                        </ResponseDisplay>
                      </InfoValue>
                    </InfoRow>

                    <ResponseInfo>
                      <strong>Atendido por:</strong>{" "}
                      {selectedTicket.atenciones[0].usuarios?.nombre ||
                        "No disponible"}{" "}
                      <br />
                      <strong>Fecha de atención:</strong>{" "}
                      {selectedTicket.atenciones[0].fechaAtencion
                        ? formatDate(selectedTicket.atenciones[0].fechaAtencion)
                        : "No disponible"}
                    </ResponseInfo>
                  </>
                )}
            </ModalBody>

            <ModalFooter>
              <CancelButton onClick={() => setShowDetailModal(false)}>
                Cerrar
              </CancelButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  min-height: 100vh;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const FixedContent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const ScrollableTicketsArea = styled.div`
  flex: 1;
  overflow-y: auto;

  /* Estilo del scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
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
  background: #e9ecef;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
`;

const TicketsContainer = styled.div`
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 100vw;
`;

const Tab = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  background: ${(props) => (props.active ? "white" : "#e9ecef")};
  color: ${(props) => (props.active ? "var(--color-primary)" : "#6c757d")};
  font-weight: ${(props) => (props.active ? "600" : "500")};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${(props) => (props.active ? "white" : "#d1ecf1")};
    color: ${(props) => (props.active ? "var(--color-primary)" : "#495057")};
  }
`;

const TicketsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 1rem;
  align-content: start;
  flex: 1;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0.8rem;
    grid-row-gap: 0.8rem;
    padding: 0.5rem;
  }
`;

const CreateTicketSection = styled.div`
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #dee2e6;
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 100vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #dee2e6;

  h3 {
    margin: 0;
    color: var(--color-primary);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--color-gray);

  &:hover {
    color: var(--color-primary);
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;

  p {
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--color-primary);
  }
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #dee2e6;
`;

const CancelButton = styled.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #5a6268;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
  min-width: fit-content;
`;

const InfoValue = styled.span`
  color: #495057;
  font-size: 0.9rem;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const ResponseDisplay = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  margin-bottom: 1rem;
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const ResponseInfo = styled.div`
  padding: 1rem;
  background: #e9f7ef;
  border-radius: 4px;
  border-left: 4px solid #28a745;
  color: #155724;
  font-size: 0.9rem;
`;

export default EmployeeTicketsPage;
