import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppAuth } from "../contexts/AuthContext.jsx";
import {
  useAdminTickets,
  useTicketStats,
  useAsignaciones,
  useAtenciones,
} from "../utils/useAdminTickets.js";
import {
  usePlantas,
  useTiposSolicitud,
  usePrioridades,
} from "../utils/useTickets.js";
import TicketCard from "../components/TicketCard.jsx";

const AdminDashboard = () => {
  const { user, logout } = useAppAuth();
  const [filters, setFilters] = useState({
    planta: "",
    tipoSolicitud: "",
    prioridad: "",
    empleado: "",
    sortBy: "fecha",
  });
  // Filtros temporales que se aplican solo al hacer clic en "Aplicar"
  const [tempFilters, setTempFilters] = useState({
    planta: "",
    tipoSolicitud: "",
    prioridad: "",
    empleado: "",
    sortBy: "fecha",
  });
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [statsFilter, setStatsFilter] = useState("todos"); // 'todos', 'sinAtender', 'respondidos'
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [respuesta, setRespuesta] = useState("");

  // Hooks para datos
  const {
    tickets,
    loading: loadingTickets,
    refetchTickets,
  } = useAdminTickets(user);
  const stats = useTicketStats(tickets);
  const { getResponsable } = useAsignaciones();
  const { crearAtencion, loading: creatingAtencion } = useAtenciones();
  const { plantas } = usePlantas();
  const { tipos } = useTiposSolicitud();
  const { prioridades } = usePrioridades();

  // Aplicar filtros cuando cambien
  useEffect(() => {
    if (user) {
      refetchTickets(filters);
    }
  }, [filters, user, refetchTickets]);

  const handleTempFilterChange = (field, value) => {
    setTempFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      planta: "",
      tipoSolicitud: "",
      prioridad: "",
      empleado: "",
      sortBy: "fecha",
    };
    setTempFilters(clearedFilters);
    setFilters(clearedFilters);
  };

  const handleAtender = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
    setRespuesta("");
  };

  const handleSubmitAtencion = async () => {
    if (!respuesta.trim()) {
      alert("Debe ingresar una respuesta");
      return;
    }

    const result = await crearAtencion(
      selectedTicket.idTicket,
      user.id,
      respuesta.trim()
    );

    if (result.success) {
      setShowModal(false);
      setSelectedTicket(null);
      setRespuesta("");
      refetchTickets(filters); // Recargar tickets
      alert("Atención registrada correctamente");
    } else {
      alert("Error al registrar la atención: " + result.error);
    }
  };

  // Filtrar tickets según el filtro de estadísticas
  const filteredTickets = tickets.filter((ticket) => {
    const tieneAtencion = ticket.atenciones && ticket.atenciones.length > 0;

    switch (statsFilter) {
      case "sinAtender":
        return !tieneAtencion;
      case "respondidos":
        return tieneAtencion;
      case "todos":
      default:
        return true;
    }
  });

  // Función para cambiar el filtro de estadísticas
  const handleStatsFilter = (filterType) => {
    setStatsFilter(filterType);
  };

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loadingTickets) {
    return (
      <Container>
        <LoadingMessage>Cargando dashboard...</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      {/* Header */}
      <Header>
        <AdminInfo>
          <h1>Dashboard Administrativo</h1>
          <p>Bienvenido, {user?.nombre}</p>
        </AdminInfo>
        <LogoutButton onClick={logout}>🚪 Cerrar Sesión</LogoutButton>
      </Header>

      {/* Estadísticas */}
      <StatsSection>
        <StatCard
          active={statsFilter === "sinAtender"}
          onClick={() => handleStatsFilter("sinAtender")}
        >
          <StatNumber>{stats.sinAtender}</StatNumber>
          <StatLabel>Sin Atender</StatLabel>
        </StatCard>
        <StatCard
          active={statsFilter === "respondidos"}
          onClick={() => handleStatsFilter("respondidos")}
        >
          <StatNumber>{stats.respondidos}</StatNumber>
          <StatLabel>Atendidos</StatLabel>
        </StatCard>
        <StatCard
          active={statsFilter === "todos"}
          onClick={() => handleStatsFilter("todos")}
        >
          <StatNumber>{stats.total}</StatNumber>
          <StatLabel>Totales</StatLabel>
        </StatCard>
      </StatsSection>

      {/* Filtros */}
      <FiltersSection>
        <FiltersHeader onClick={() => setFiltersExpanded(!filtersExpanded)}>
          <h3>Filtros</h3>
          <ExpandIcon expanded={filtersExpanded}>
            {filtersExpanded ? "▲" : "▼"}
          </ExpandIcon>
        </FiltersHeader>
        
        {filtersExpanded && (
          <FiltersContent>
            <FiltersRow>
              <FilterGroup>
                <label>Planta:</label>
                <select
                  value={tempFilters.planta}
                  onChange={(e) => handleTempFilterChange("planta", e.target.value)}
                >
                  <option value="">Todas</option>
                  {plantas.map((planta) => (
                    <option key={planta.idPlanta} value={planta.idPlanta}>
                      {planta.planta}
                    </option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup>
                <label>Tipo:</label>
                <select
                  value={tempFilters.tipoSolicitud}
                  onChange={(e) =>
                    handleTempFilterChange("tipoSolicitud", e.target.value)
                  }
                >
                  <option value="">Todos</option>
                  {tipos
                    .sort((a, b) => a.idTipoSolicitud - b.idTipoSolicitud)
                    .map((tipo) => (
                      <option
                        key={tipo.idTipoSolicitud}
                        value={tipo.idTipoSolicitud}
                      >
                        {tipo.tipoSolicitud}
                      </option>
                    ))}
                </select>
              </FilterGroup>

              <FilterGroup>
                <label>Prioridad:</label>
                <select
                  value={tempFilters.prioridad}
                  onChange={(e) => handleTempFilterChange("prioridad", e.target.value)}
                >
                  <option value="">Todas</option>
                  {prioridades.map((prioridad) => (
                    <option
                      key={prioridad.idPrioridad}
                      value={prioridad.idPrioridad}
                    >
                      {prioridad.prioridad}
                    </option>
                  ))}
                </select>
              </FilterGroup>

              <FilterGroup>
                <label>Empleado:</label>
                <input
                  type="text"
                  placeholder="Código o nombre..."
                  value={tempFilters.empleado}
                  onChange={(e) => handleTempFilterChange("empleado", e.target.value)}
                />
              </FilterGroup>
            </FiltersRow>

            <SortSection>
              <label>Ordenar por:</label>
              <select
                value={tempFilters.sortBy}
                onChange={(e) => handleTempFilterChange("sortBy", e.target.value)}
              >
                <option value="fecha">Fecha de creación</option>
                <option value="prioridad">Prioridad</option>
              </select>
            </SortSection>

            <FilterButtons>
              <ClearButton onClick={handleClearFilters}>
                Limpiar
              </ClearButton>
              <ApplyButton onClick={handleApplyFilters}>
                Aplicar
              </ApplyButton>
            </FilterButtons>
          </FiltersContent>
        )}
      </FiltersSection>

      {/* Lista de Tickets */}
      <TicketsSection>
        {filteredTickets.length === 0 ? (
          <EmptyMessage>No se encontraron tickets</EmptyMessage>
        ) : (
          filteredTickets.map((ticket) => (
            <TicketCard
              key={ticket.idTicket}
              ticket={ticket}
              onAtender={handleAtender}
              getResponsable={getResponsable}
              formatDate={formatDate}
              getPriorityColor={getPriorityColor}
            />
          ))
        )}
      </TicketsSection>

      {/* Modal de Atención */}
      {showModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h3>Atender Ticket #{selectedTicket?.idTicket}</h3>
              <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            </ModalHeader>

            <ModalBody>
              <p>
                <strong>Empleado:</strong> {selectedTicket?.empleado}
              </p>
              <p>
                <strong>Descripción:</strong>
              </p>
              <p>{selectedTicket?.descripcion}</p>

              <label>Respuesta:</label>
              <ResponseTextArea
                rows="4"
                value={respuesta}
                onChange={(e) => setRespuesta(e.target.value)}
                placeholder="Escriba su respuesta al ticket..."
              />
            </ModalBody>

            <ModalFooter>
              <CancelButton onClick={() => setShowModal(false)}>
                Cancelar
              </CancelButton>
              <SubmitButton
                onClick={handleSubmitAtencion}
                disabled={creatingAtencion}
              >
                {creatingAtencion ? "Enviando..." : "Enviar Respuesta"}
              </SubmitButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}

      {/* Modal de Detalles - removido ya que no es necesario */}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f8f9fa;
  
  @media (max-width: 768px) {
    padding: 0.5rem;
    height: 100vh;
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: var(--color-gray);
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const AdminInfo = styled.div`
  h1 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin: 0.3rem 0 0 0;
    color: var(--color-gray);
    font-size: 0.9rem;
    
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const LogoutButton = styled.button`
  background-color: var(--color-danger);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d63384;
    transform: translateY(-1px);
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 0.6rem;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 0.8rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  border: 2px solid
    ${(props) => (props.active ? "var(--color-primary)" : "transparent")};

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.active ? "80%" : "0")};
    height: 3px;
    background: var(--color-primary);
    transition: width 0.3s ease;
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
  margin-bottom: 0.2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.1rem;
  }
`;

const StatLabel = styled.div`
  color: var(--color-gray);
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const FiltersSection = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const FiltersHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: ${props => props.expanded ? '1px solid #eee' : 'none'};
  
  h3 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.1rem;
  }
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const ExpandIcon = styled.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
`;

const FiltersContent = styled.div`
  padding: 1rem;
  padding-top: 0.5rem;
  
  @media (max-width: 768px) {
    padding: 0.8rem;
    padding-top: 0.5rem;
  }
`;

const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-bottom: 0.6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.3rem;
    font-weight: 500;
    color: var(--color-primary);
    font-size: 0.85rem;
  }

  select,
  input {
    padding: 0.4rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.85rem;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
    }
  }
`;

const SortSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;

  label {
    font-weight: 500;
    color: var(--color-primary);
    font-size: 0.85rem;
  }

  select {
    padding: 0.4rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.85rem;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
    }
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid #eee;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const ApplyButton = styled.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`;

const ClearButton = styled.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: #5a6268;
  }
`;

const TicketsSection = styled.div`
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding-right: 0.5rem;
  grid-auto-rows: 1fr;
  align-content: start;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 0.5rem;
    padding-right: 0.5rem;
  }

  /* Estilo del scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;

    &:hover {
      background: #a8a8a8;
    }
  }
`;

const EmptyMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
  font-size: 1.1rem;
  background: white;
  border-radius: 8px;
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
  max-height: 80vh;
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

const ResponseTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
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

const SubmitButton = styled.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`;

export default AdminDashboard;
