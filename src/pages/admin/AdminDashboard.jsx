import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppAuth } from "../../contexts/AuthContext.jsx";
import {
  useAdminTickets,
  useTicketStats,
  useAsignaciones,
  useAtenciones,
} from "../../hooks/useAdminTickets.js";
import {
  usePlantas,
  useTiposSolicitud,
  usePrioridades,
} from "../../hooks/useTickets.js";
import { useUsuariosAtencion } from "../../hooks/useUsuariosAtencion.js";
import { formatMexicanDate } from "../../utils/dateUtils.js";

// Components
import DashboardHeader from "../../components/DashboardHeader.jsx";
import StatsSection from "../../components/StatsSection.jsx";
import FiltersSection from "../../components/FiltersSection.jsx";
import TicketsGrid from "../../components/TicketsGrid.jsx";
import TicketModal from "../../components/ticket-modal/TicketModal.jsx";

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
  const [statsFilter, setStatsFilter] = useState("sinAtender"); // 'sinAtender', 'reasignados', 'atendidos', 'cancelados', null
  const [modalState, setModalState] = useState({
    show: false,
    mode: "view", // "view", "response", "attend"
    ticket: null,
  });
  const [usuarioQueAtendio, setUsuarioQueAtendio] = useState(null);
  const [expandedTicketId, setExpandedTicketId] = useState(null);

  // Hooks para datos
  const { asignaciones, loading: loadingAsignaciones, getResponsable } = useAsignaciones();
  
  const {
    tickets,
    loading: loadingTickets,
    refetchTickets,
  } = useAdminTickets(user, asignaciones);
  
  const stats = useTicketStats(tickets);
  const { 
    crearAtencion, 
    delegarTicket, 
    cancelarTicket, 
    reasignarTicket, 
    autoasignarTicket,
    loading: creatingAtencion 
  } = useAtenciones(user);
  const { obtenerUsuarioQueAtendio } = useUsuariosAtencion();
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
    setModalState({
      show: true,
      mode: "attend",
      ticket: ticket,
    });
  };

  const handleVerRespuesta = async (ticket) => {
    setModalState({
      show: true,
      mode: "response",
      ticket: ticket,
    });
    
    // Obtener información del usuario que atendió el ticket
    try {
      const usuario = await obtenerUsuarioQueAtendio(ticket.idTicket, ticket.idEstado);
      setUsuarioQueAtendio(usuario);
    } catch (error) {
      console.error('Error obteniendo usuario que atendió:', error);
      setUsuarioQueAtendio(null);
    }
  };

  const handleCloseModal = () => {
    setModalState({
      show: false,
      mode: "view",
      ticket: null,
    });
    setUsuarioQueAtendio(null);
  };

  const handleSubmitAtencion = async (respuesta, actionType = "respond") => {
    let result;

    try {
      if (actionType === "respond") {
        result = await crearAtencion(
          modalState.ticket.idTicket,
          user.id,
          respuesta
        );
      } else if (actionType === "cancel") {
        result = await cancelarTicket(
          modalState.ticket.idTicket,
          user.id,
          respuesta // En este caso, respuesta es el motivo de cancelación
        );
      }

      if (result.success) {
        handleCloseModal();
        refetchTickets(filters); // Recargar tickets
        // Popup removido - solo cerrar modal
      } else {
        alert("Error al procesar la solicitud: " + result.error);
      }
    } catch (error) {
      alert("Error inesperado: " + error.message);
    }
  };

  const handleDelegate = async (selectedUserId) => {
    const result = await delegarTicket(
      modalState.ticket.idTicket,
      user.id,
      selectedUserId
    );

    if (result.success) {
      handleCloseModal();
      refetchTickets(filters); // Recargar tickets
      // Popup removido - solo cerrar modal
    } else {
      alert("Error al delegar el ticket: " + result.error);
    }
  };

  // Nueva función para re-asignar ticket
  const handleReassign = async (selectedUserId) => {
    if (!modalState.ticket) return;

    const result = await reasignarTicket(
      modalState.ticket.idTicket,
      selectedUserId
    );

    if (result.success) {
      handleCloseModal();
      refetchTickets(filters); // Recargar tickets
    } else {
      alert("Error al re-asignar el ticket: " + result.error);
    }
  };

  // Nueva función para autoasignarse el ticket
  const handleSelfAssign = async () => {
    if (!modalState.ticket) return;

    const result = await autoasignarTicket(modalState.ticket.idTicket);

    if (result.success) {
      // No cerrar el modal aquí, se cierra después de la respuesta
      // El modal maneja la respuesta automáticamente después de autoasignar
    } else {
      alert("Error al autoasignarse el ticket: " + result.error);
    }
  };

  const handleToggleExpand = (ticketId) => {
    setExpandedTicketId(expandedTicketId === ticketId ? null : ticketId);
  };

  // Filtrar tickets según el filtro de estadísticas
  const filteredTickets = tickets.filter((ticket) => {
    // Para usuarios con idRol = 3, no aplicar filtro de stats (no tienen acceso a la sección)
    if (user?.idRol === 3 || !statsFilter) return true;

    // Filtrar por estado de ticket según la selección
    switch (statsFilter) {
      case "sinAtender":
        return ticket.idEstado === 1;
      case "reasignados":
        return ticket.idEstado === 2;
      case "atendidos":
        return ticket.idEstado === 3;
      case "cerrados":
        return ticket.idEstado === 4;
      case "cancelados":
        return ticket.idEstado === 5;
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
      case 3:
        return "#E06363"; // Alta - Rojo
      case 2:
        return "#E0C563"; // Media - Amarillo
      case 1:
        return "#636EE0"; // Baja - Verde
      default:
        return "#6c757d"; // Default - Gris
    }
  };

  const formatDate = (dateString) => {
    return formatMexicanDate(dateString);
  };

  // El loading general debe considerar ambos estados para usuarios idRol = 2
  const isGeneralLoading = user?.idRol === 2 ? (loadingAsignaciones || loadingTickets) : loadingTickets;

  if (isGeneralLoading) {
    return (
      <Container>
        <LoadingMessage>Cargando dashboard...</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      {/* Área fija - Header, Stats y Filtros */}
      <FixedContent>
        {/* Header */}
        <DashboardHeader user={user} onLogout={logout} />

        {/* Estadísticas - Solo para usuarios con idRol 1 y 2 */}
        {user?.idRol !== 3 && (
          <StatsSection
            stats={stats}
            statsFilter={statsFilter}
            onStatsFilterChange={handleStatsFilter}
          />
        )}

        {/* Filtros */}
        <FiltersSection
          tempFilters={tempFilters}
          onTempFilterChange={handleTempFilterChange}
          onApplyFilters={handleApplyFilters}
          onClearFilters={handleClearFilters}
          plantas={plantas}
          tipos={tipos}
          prioridades={prioridades}
        />
      </FixedContent>

      {/* Área de Tickets con Scroll Independiente */}
      <TicketsGrid
        tickets={filteredTickets}
        mode="admin"
        onAtender={handleAtender}
        onVerRespuesta={handleVerRespuesta}
        getResponsable={getResponsable}
        formatDate={formatDate}
        getPriorityColor={getPriorityColor}
        expandedTicketId={expandedTicketId}
        onToggleExpand={handleToggleExpand}
        currentUser={user}
      />

      {/* Modal de Atención/Respuesta */}
      <TicketModal
        ticket={modalState.ticket}
        isOpen={modalState.show}
        onClose={handleCloseModal}
        mode={modalState.mode}
        onSubmit={handleSubmitAtencion}
        onDelegate={handleDelegate}
        onReassign={handleReassign}
        onSelfAssign={handleSelfAssign}
        currentUser={user}
        loading={creatingAtencion}
        usuarioQueAtendio={usuarioQueAtendio}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f8f9fa;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 0.5rem;
    height: 100vh;
  }
`;

const FixedContent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
  color: var(--color-gray);
`;

export default AdminDashboard;
