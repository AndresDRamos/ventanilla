import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppAuth } from "../../contexts/AuthContext.jsx";
import useEmployeeTickets from "../../hooks/useEmployeeTickets.js";
import { useEmpleados } from "../../hooks/useEmpleados.js";
import { useEsquemasPago } from "../../hooks/useTickets.js";
import { useAsignaciones } from "../../hooks/useAdminTickets.js";
import { useUsuariosAtencion } from "../../hooks/useUsuariosAtencion.js";
import { formatMexicanDate } from "../../utils/dateUtils.js";
import TicketCard from "../../components/tickets/TicketCard.jsx";
import EmployeeQuestionnaire from "../../components/EmployeeQuestionnaire.jsx";
import TicketModal from "../../components/ticket-modal/TicketModal.jsx";

const EmployeeTicketsPage = ({ employeeData, onLogout }) => {
  const { logout } = useAppAuth();
  const [activeTab, setActiveTab] = useState("pending"); // 'pending' o 'resolved'
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [empleadoCompleto, setEmpleadoCompleto] = useState(null);
  const [loadingEmpleado, setLoadingEmpleado] = useState(true);
  const [expandedTicketId, setExpandedTicketId] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [usuarioQueAtendio, setUsuarioQueAtendio] = useState(null);

  // Estados para calificación (ahora manejados por TicketModal)
  const [loadingCalificacion, setLoadingCalificacion] = useState(false);

  const { buscarEmpleadoPorCodigo } = useEmpleados();
  const { esquemas } = useEsquemasPago();
  const { getResponsable } = useAsignaciones();
  const { obtenerUsuarioQueAtendio } = useUsuariosAtencion();

  const {
    pendingTickets,
    resolvedTickets,
    loading: loadingTickets,
    error,
    refetch,
    calificarTicket,
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
          setEmpleadoCompleto({
            idEmpleado: employeeData.idEmpleado,
            codigoEmpleado: employeeData.codigoEmpleado,
            nombre: employeeData.empleado,
            correo: employeeData.correo,
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
          correo: employeeData.correo,
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
  const handleShowDetails = async (ticket) => {
    setSelectedTicket(ticket);
    setShowDetailModal(true);
    setUsuarioQueAtendio(null);

    // Para tickets atendidos o cancelados, obtener información del usuario
    if (
      ticket.idEstado === 3 ||
      ticket.idEstado === 5 ||
      (ticket.atenciones && ticket.atenciones.length > 0)
    ) {
      try {
        const usuario = await obtenerUsuarioQueAtendio(
          ticket.idTicket,
          ticket.idEstado
        );
        setUsuarioQueAtendio(usuario);
      } catch (error) {
        console.error("Error obteniendo usuario que atendió/canceló:", error);
        setUsuarioQueAtendio(null);
      }
    }
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
              {(empleadoCompleto?.correo || employeeData?.correo) && (
                <>
                  {" | Correo: "}{empleadoCompleto?.correo || employeeData?.correo}
                </>
              )}
            </EmployeeInfo>
          </HeaderLeft>

          <HeaderRight>
            <LogoutButton onClick={handleLogout}>Cerrar Sesión</LogoutButton>
          </HeaderRight>
        </Header>

        <TabsContainer>
          <Tab
            $active={activeTab === "pending"}
            onClick={() => {
              setActiveTab("pending");
              setExpandedTicketId(null);
            }}
          >
            Tickets Pendientes ({pendingTickets.length})
          </Tab>
          <Tab
            $active={activeTab === "resolved"}
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
        <TicketsContainer>
          <TicketsSection>
            {loading ? (
              <LoadingMessage>Cargando tickets...</LoadingMessage>
            ) : error ? (
              <ErrorMessage>Error al cargar tickets: {error}</ErrorMessage>
            ) : (
              <>
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
                          getResponsable={getResponsable}
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
                          getResponsable={getResponsable}
                          isResolved={true}
                          isExpanded={expandedTicketId === ticket.idTicket}
                          onToggleExpand={handleToggleExpand}
                          onShowDetails={handleShowDetails}
                        />
                      ))
                    )}
                  </>
                )}
              </>
            )}
          </TicketsSection>
        </TicketsContainer>
      </ScrollableTicketsArea>

      {/* Botón fijo para crear ticket */}
      <CreateTicketSection>
        <CreateTicketButton onClick={() => setShowNewTicket(true)}>
          + Crear Nuevo Ticket
        </CreateTicketButton>
      </CreateTicketSection>

      {/* Modal de Detalles usando TicketModal unificado */}
      <TicketModal
        ticket={selectedTicket}
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        mode={
          selectedTicket?.idEstado === 3 &&
          selectedTicket?.atenciones?.[0] &&
          (!selectedTicket.atenciones[0].calificacion ||
            selectedTicket.atenciones[0].calificacion === 0)
            ? "rating" // Modo especial para calificar
            : "view" // Modo de solo vista
        }
        onSubmit={async (data) => {
          // Manejar envío de calificación
          if (data.calificacion) {
            setLoadingCalificacion(true);
            try {
              const resultado = await calificarTicket(
                selectedTicket.idTicket,
                data.calificacion,
                data.comentario || ""
              );

              if (resultado.success) {
                alert(
                  "Calificación enviada exitosamente. El ticket ha sido cerrado."
                );
                setShowDetailModal(false);
              } else {
                alert(`Error al enviar la calificación: ${resultado.error}`);
              }
            } catch (error) {
              console.error("Error enviando calificación:", error);
              alert("Error al enviar la calificación. Inténtalo de nuevo.");
            } finally {
              setLoadingCalificacion(false);
            }
          }
        }}
        loading={loadingCalificacion}
        usuarioQueAtendio={usuarioQueAtendio}
        currentUser={{
          tipo: "employee",
          idUsuario: empleadoCompleto?.idEmpleado || employeeData?.idEmpleado,
          nombre: empleadoCompleto?.nombre || employeeData?.empleado,
        }}
      />
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
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
  flex: 1;
  min-height: 30vw;
`;

const Tab = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  background: ${(props) => (props.$active ? "white" : "#e9ecef")};
  color: ${(props) => (props.$active ? "var(--color-primary)" : "#6c757d")};
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${(props) => (props.$active ? "white" : "#d1ecf1")};
    color: ${(props) => (props.$active ? "var(--color-primary)" : "#495057")};
  }
`;

const TicketsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 1rem;
  align-content: start;
  flex: 1;
  min-height: 400px;

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
  flex-shrink: 0;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  min-height: 300px;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: #dc3545;
  font-size: 1rem;
  min-height: 300px;
`;

const EmptyMessage = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  min-height: 300px;
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
