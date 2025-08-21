import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppAuth } from "../contexts/AuthContext.jsx";
import useEmployeeTickets from "../hooks/useEmployeeTickets.js";
import { useEmpleados } from "../hooks/useEmpleados.js";
import { useEsquemasPago } from "../hooks/useTickets.js";
import { useAsignaciones } from "../hooks/useAdminTickets.js";
import { useUsuariosAtencion } from "../hooks/useUsuariosAtencion.js";
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
  const [usuarioQueAtendio, setUsuarioQueAtendio] = useState(null);
  
  // Estados para calificación
  const [calificacion, setCalificacion] = useState(1);
  const [comentario, setComentario] = useState("");
  const [showCalificacion, setShowCalificacion] = useState(false);
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
  const handleShowDetails = async (ticket) => {
    setSelectedTicket(ticket);
    setShowDetailModal(true);
    setUsuarioQueAtendio(null);
    
    // Resetear estados de calificación
    setCalificacion(1);
    setComentario("");
    setShowCalificacion(false);
    
    // Para tickets atendidos o cancelados, obtener información del usuario
    if ((ticket.idEstado === 3 || ticket.idEstado === 5) || (ticket.atenciones && ticket.atenciones.length > 0)) {
      try {
        const usuario = await obtenerUsuarioQueAtendio(ticket.idTicket, ticket.idEstado);
        setUsuarioQueAtendio(usuario);
        
        // Si el ticket está atendido (idEstado = 3) y no tiene calificación, mostrar opción
        if (ticket.idEstado === 3 && ticket.atenciones && ticket.atenciones.length > 0 && 
            (!ticket.atenciones[0].calificacion || ticket.atenciones[0].calificacion === 0)) {
          setShowCalificacion(true);
        }
      } catch (error) {
        console.error('Error obteniendo usuario que atendió/canceló:', error);
        setUsuarioQueAtendio(null);
      }
    }
  };

  // Función para enviar calificación
  const handleSubmitCalificacion = async () => {
    if (comentario.trim() && calificacion === 1) {
      const confirmar = window.confirm(
        "Has escrito un comentario pero tienes la calificación mínima (1 estrella). ¿Deseas continuar?"
      );
      if (!confirmar) return;
    }

    setLoadingCalificacion(true);
    try {
      const resultado = await calificarTicket(selectedTicket.idTicket, calificacion, comentario);
      
      if (resultado.success) {
        alert('Calificación enviada exitosamente. El ticket ha sido cerrado.');
        setShowCalificacion(false);
        setShowDetailModal(false);
        // refetch ya se ejecuta dentro de calificarTicket
      } else {
        alert(`Error al enviar la calificación: ${resultado.error}`);
      }
    } catch (error) {
      console.error('Error enviando calificación:', error);
      alert('Error al enviar la calificación. Inténtalo de nuevo.');
    } finally {
      setLoadingCalificacion(false);
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

      {/* Modal de Detalles */}
      {showDetailModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <HeaderContent>
                <PriorityBadge
                  $color={getPriorityColor(selectedTicket?.idPrioridad)}
                >
                  {selectedTicket?.prioridades?.prioridad}
                </PriorityBadge>
                <h3>#{selectedTicket?.idTicket}</h3>
              </HeaderContent>
              <CloseButton onClick={() => setShowDetailModal(false)}>
                ×
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              {/* Fecha de generación del ticket */}
              <InfoRow>
                <InfoLabel>Fecha de creación:</InfoLabel>
                <InfoValue>
                  {(() => {
                    const fechaCreacion = selectedTicket?.seguimientos?.find(s => s.idEstado === 1)?.fecha;
                    return fechaCreacion ? formatMexicanDate(fechaCreacion) : "Pendiente seguimiento inicial";
                  })()}
                </InfoValue>
              </InfoRow>

              {/* Tipo de solicitud */}
              <InfoRow>
                <InfoLabel>Tipo:</InfoLabel>
                <InfoValue>{selectedTicket?.tiposSolicitud?.tipoSolicitud}</InfoValue>
              </InfoRow>

              {/* Descripción */}
              <DescriptionSection>
                <DescriptionText>{selectedTicket?.descripcion}</DescriptionText>
              </DescriptionSection>

              {/* Respuesta y información de atención - Solo para tickets atendidos, cancelados o cerrados */}
              {(selectedTicket?.atenciones && selectedTicket.atenciones.length > 0) || selectedTicket?.idEstado === 5 ? (
                <>
                  {/* Mostrar respuesta solo para tickets que tienen atenciones */}
                  {selectedTicket?.atenciones && selectedTicket.atenciones.length > 0 && (
                    <ResponseSection>
                      <ResponseTitle>Respuesta:</ResponseTitle>
                      <ResponseDisplay>
                        {selectedTicket.atenciones[0].respuesta || "No hay respuesta disponible"}
                      </ResponseDisplay>
                    </ResponseSection>
                  )}

                  <AttentionInfo $idEstado={selectedTicket?.idEstado}>
                    <InfoRow>
                      <InfoLabel>
                        {selectedTicket?.idEstado === 5 ? "Cancelado por:" : "Atendido por:"}
                      </InfoLabel>
                      <InfoValue>{usuarioQueAtendio?.nombre || "No disponible"}</InfoValue>
                    </InfoRow>
                    <InfoRow>
                      <InfoLabel>
                        {selectedTicket?.idEstado === 5 ? "Fecha de cancelación:" : "Fecha de atención:"}
                      </InfoLabel>
                      <InfoValue>
                        {(() => {
                          // Obtener fecha desde seguimientos según el estado
                          const estadoBuscado = selectedTicket?.idEstado === 5 ? 5 : 3;
                          const fechaEstado = selectedTicket?.seguimientos?.find(s => s.idEstado === estadoBuscado)?.fecha;
                          return fechaEstado ? formatMexicanDate(fechaEstado) : "No disponible";
                        })()}
                      </InfoValue>
                    </InfoRow>
                  </AttentionInfo>

                  {/* Mostrar calificación existente si la hay - Solo para tickets atendidos */}
                  {selectedTicket?.atenciones && selectedTicket.atenciones.length > 0 && 
                   selectedTicket.atenciones[0].calificacion && selectedTicket.atenciones[0].calificacion > 0 && (
                    <CalificacionExistente>
                      <CalificacionExistenteTitle>Tu calificación:</CalificacionExistenteTitle>
                      <StarsDisplay>
                        {Array.from({length: 3}, (_, i) => (
                          <Star key={i} $filled={i < selectedTicket.atenciones[0].calificacion}>
                            ★
                          </Star>
                        ))}
                      </StarsDisplay>
                      {selectedTicket.atenciones[0].comentario && (
                        <ComentarioExistente>
                          <strong>Tu comentario:</strong> {selectedTicket.atenciones[0].comentario}
                        </ComentarioExistente>
                      )}
                    </CalificacionExistente>
                  )}
                </>
              ) : null}

              {/* Sección de calificación compacta para tickets atendidos sin calificar */}
              {showCalificacion && selectedTicket?.idEstado === 3 && (
                <>
                  <CalificacionTitle>¿Cómo lo calificarías?</CalificacionTitle>
                  
                  <StarsContainer>
                    {Array.from({length: 3}, (_, i) => (
                      <StarButton
                        key={i}
                        $filled={i < calificacion}
                        onClick={() => setCalificacion(i + 1)}
                      />
                    ))}
                  </StarsContainer>
                  
                  <ComentarioInput
                    placeholder="Comentario adicional (opcional)"
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    rows={2}
                  />
                </>
              )}
            </ModalBody>

            <ModalFooter>
              {showCalificacion && selectedTicket?.idEstado === 3 && (
                <SubmitCalificacionButton 
                  onClick={handleSubmitCalificacion}
                  disabled={loadingCalificacion}
                >
                  {loadingCalificacion ? "Enviando..." : "Enviar Calificación"}
                </SubmitCalificacionButton>
              )}
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
  flex: 1;
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
  grid-template-columns: repeat(4, minmax(250px, 1fr));
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
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;

  h3 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.1rem;
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

// Styled components básicos para info
const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.4rem 0;
  border-bottom: 1px dotted #e9ecef;
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
  min-width: fit-content;
  margin-right: 1rem;
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

const AttentionInfo = styled.div`
  margin-top: 0.8rem;
  padding: 0.8rem;
  background: ${props => {
    switch(props.$idEstado) {
      case 5: return 'var(--color-estado-cancelado-bg)'; // Cancelado - Fondo rojo claro
      case 3: return '#e9f7ef'; // Atendido - Fondo verde claro
      default: return '#e9f7ef';
    }
  }};
  border-radius: 4px;
  border-left: 4px solid ${props => {
    switch(props.$idEstado) {
      case 5: return 'var(--color-estado-cancelado)'; // Cancelado - Borde rojo
      case 3: return '#28a745'; // Atendido - Borde verde
      default: return '#28a745';
    }
  }};
  
  ${InfoRow} {
    padding: 0.25rem 0;
    margin-bottom: 0;
  }
  
  ${InfoLabel} {
    font-size: 0.85rem;
  }
  
  ${InfoValue} {
    font-size: 0.85rem;
  }
`;

const CalificacionExistenteTitle = styled.div`
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

// Styled components existentes...
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const PriorityBadge = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${(props) => props.$color || 'var(--color-gray)'};
`;

const DescriptionSection = styled.div`
  margin-bottom: 1rem;
`;

const DescriptionText = styled.p`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid var(--color-primary);
  color: #495057;
  line-height: 1.5;
  white-space: pre-wrap;
  margin: 0;
`;

const ResponseSection = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dee2e6;
`;

const ResponseTitle = styled.h5`
  margin: 0 0 1rem 0;
  color: var(--color-primary);
  font-weight: 600;
`;

const ModalBody = styled.div`
  padding: 1rem;

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
  padding: 1rem;
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

// Styled components para el sistema de calificación
const CalificacionTitle = styled.h5`
  margin: 1.5rem 0 0.8rem 0;
  color: var(--color-primary);
  text-align: center;
  font-size: 1rem;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.8rem;
`;

const StarButton = styled.button`
  background: none !important;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 0;
  margin: 0 0.1rem;
  
  /* Eliminar todos los efectos de fondo y selección */
  background-color: transparent !important;
  box-shadow: none !important;
  
  /* Usar diferentes caracteres para relleno y borde más fino */
  color: var(--color-accent);
  
  &:before {
    content: ${props => props.$filled ? '"★"' : '"☆"'};
  }

  &:hover {
    color: var(--color-accent);
    background: none !important;
    background-color: transparent !important;
  }

  &:focus {
    outline: none;
    background: none !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &:active {
    background: none !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  &:visited {
    background: none !important;
    background-color: transparent !important;
  }
`;

const ComentarioInput = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(55, 58, 54, 0.1);
  }
`;

const SubmitCalificacionButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-right: 1rem;

  &:hover:not(:disabled) {
    background: #218838;
  }

  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;

const CalificacionExistente = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #e8f5e8;
  border-radius: 4px;
  border: 1px solid #28a745;
`;

const StarsDisplay = styled.div`
  display: inline-flex;
  margin-left: 0.5rem;
`;

const Star = styled.span`
  color: ${props => props.$filled ? '#ffc107' : '#ddd'};
  font-size: 1.2rem;
`;

const ComentarioExistente = styled.div`
  margin-top: 0.5rem;
  font-style: italic;
  color: #495057;
`;

export default EmployeeTicketsPage;
