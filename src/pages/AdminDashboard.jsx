import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAppAuth } from '../contexts/AuthContext.jsx';
import { useAdminTickets, useTicketStats, useAsignaciones, useAtenciones } from '../utils/useAdminTickets.js';
import { usePlantas, useTiposSolicitud, usePrioridades } from '../utils/useTickets.js';

const AdminDashboard = () => {
  const { user, logout } = useAppAuth();
  const [filters, setFilters] = useState({
    planta: '',
    tipoSolicitud: '',
    prioridad: '',
    empleado: '',
    sortBy: 'fecha'
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [respuesta, setRespuesta] = useState('');

  // Hooks para datos
  const { tickets, loading: loadingTickets, refetchTickets } = useAdminTickets(user);
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

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAtender = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
    setRespuesta('');
  };

  const handleSubmitAtencion = async () => {
    if (!respuesta.trim()) {
      alert('Debe ingresar una respuesta');
      return;
    }

    const result = await crearAtencion(selectedTicket.idTicket, user.id, respuesta.trim());
    
    if (result.success) {
      setShowModal(false);
      setSelectedTicket(null);
      setRespuesta('');
      refetchTickets(filters); // Recargar tickets
      alert('Atención registrada correctamente');
    } else {
      alert('Error al registrar la atención: ' + result.error);
    }
  };

  const getPriorityColor = (idPrioridad) => {
    switch (idPrioridad) {
      case 1: return '#dc3545'; // Alta - Rojo
      case 2: return '#ffc107'; // Media - Amarillo
      case 3: return '#28a745'; // Baja - Verde
      default: return '#6c757d'; // Default - Gris
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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
        <LogoutButton onClick={logout}>
          🚪 Cerrar Sesión
        </LogoutButton>
      </Header>

      {/* Estadísticas */}
      <StatsSection>
        <StatCard>
          <StatNumber>{stats.sinAtender}</StatNumber>
          <StatLabel>Sin Atender</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.respondidos}</StatNumber>
          <StatLabel>Respondidos</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.total}</StatNumber>
          <StatLabel>Totales</StatLabel>
        </StatCard>
      </StatsSection>

      {/* Filtros */}
      <FiltersSection>
        <FiltersRow>
          <FilterGroup>
            <label>Planta:</label>
            <select 
              value={filters.planta} 
              onChange={(e) => handleFilterChange('planta', e.target.value)}
            >
              <option value="">Todas</option>
              {plantas.map(planta => (
                <option key={planta.idPlanta} value={planta.idPlanta}>
                  {planta.planta}
                </option>
              ))}
            </select>
          </FilterGroup>

          <FilterGroup>
            <label>Tipo:</label>
            <select 
              value={filters.tipoSolicitud} 
              onChange={(e) => handleFilterChange('tipoSolicitud', e.target.value)}
            >
              <option value="">Todos</option>
              {tipos.map(tipo => (
                <option key={tipo.idTipoSolicitud} value={tipo.idTipoSolicitud}>
                  {tipo.tipoSolicitud}
                </option>
              ))}
            </select>
          </FilterGroup>

          <FilterGroup>
            <label>Prioridad:</label>
            <select 
              value={filters.prioridad} 
              onChange={(e) => handleFilterChange('prioridad', e.target.value)}
            >
              <option value="">Todas</option>
              {prioridades.map(prioridad => (
                <option key={prioridad.idPrioridad} value={prioridad.idPrioridad}>
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
              value={filters.empleado}
              onChange={(e) => handleFilterChange('empleado', e.target.value)}
            />
          </FilterGroup>
        </FiltersRow>

        <SortSection>
          <label>Ordenar por:</label>
          <select 
            value={filters.sortBy} 
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          >
            <option value="fecha">Fecha de creación</option>
            <option value="prioridad">Prioridad</option>
          </select>
        </SortSection>
      </FiltersSection>

      {/* Lista de Tickets */}
      <TicketsSection>
        {tickets.length === 0 ? (
          <EmptyMessage>No se encontraron tickets</EmptyMessage>
        ) : (
          tickets.map(ticket => (
            <TicketCard key={ticket.idTicket}>
              <TicketHeader>
                <TicketNumber>#{ticket.idTicket}</TicketNumber>
                <PriorityBadge priority={getPriorityColor(ticket.idPrioridad)}>
                  {ticket.prioridades?.prioridad}
                </PriorityBadge>
              </TicketHeader>

              <TicketBody>
                <TicketInfo>
                  <InfoRow>
                    <strong>Empleado:</strong> {ticket.empleado} (#{ticket.codigoEmpleado})
                  </InfoRow>
                  <InfoRow>
                    <strong>Tipo:</strong> {ticket.tiposSolicitud?.tipoSolicitud}
                  </InfoRow>
                  <InfoRow>
                    <strong>Planta:</strong> {ticket.plantas?.planta}
                  </InfoRow>
                  <InfoRow>
                    <strong>Fecha:</strong> {formatDate(ticket.fechaCreacion)}
                  </InfoRow>
                  <InfoRow>
                    <strong>Descripción:</strong>
                    <Description>{ticket.descripcion}</Description>
                  </InfoRow>
                  <InfoRow>
                    <strong>Responsable:</strong> {getResponsable(ticket.idPlanta, ticket.idTipoSolicitud)}
                  </InfoRow>
                </TicketInfo>

                <TicketActions>
                  {ticket.atenciones && ticket.atenciones.length > 0 ? (
                    <AtendedStatus>
                      ✅ Atendido
                      <small>
                        {formatDate(ticket.atenciones[0].fechaAtencion)}
                      </small>
                    </AtendedStatus>
                  ) : (
                    <AttendButton onClick={() => handleAtender(ticket)}>
                      📝 Atender
                    </AttendButton>
                  )}
                </TicketActions>
              </TicketBody>
            </TicketCard>
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
              <p><strong>Empleado:</strong> {selectedTicket?.empleado}</p>
              <p><strong>Descripción:</strong></p>
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
                {creatingAtencion ? 'Enviando...' : 'Enviar Respuesta'}
              </SubmitButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
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
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex-shrink: 0;
`;

const AdminInfo = styled.div`
  h1 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.5rem;
  }

  p {
    margin: 0.3rem 0 0 0;
    color: var(--color-gray);
    font-size: 0.9rem;
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
  gap: 1rem;
  margin-bottom: 1rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const StatNumber = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--color-primary);
  margin-bottom: 0.3rem;
`;

const StatLabel = styled.div`
  color: var(--color-gray);
  font-weight: 500;
  font-size: 0.9rem;
`;

const FiltersSection = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
  flex-shrink: 0;
`;

const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
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
  
  select, input {
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

const TicketsSection = styled.div`
  flex: 1;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding-right: 0.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

const TicketCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const TicketNumber = styled.h3`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.2rem;
`;

const PriorityBadge = styled.span`
  background-color: ${props => props.priority};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const TicketBody = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  padding: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InfoRow = styled.div`
  color: var(--color-primary);
  font-size: 0.9rem;
`;

const Description = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 4px;
  font-style: italic;
  color: var(--color-gray);
`;

const TicketActions = styled.div`
  display: flex;
  align-items: center;
`;

const AttendButton = styled.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e54a2e;
    transform: translateY(-1px);
  }
`;

const AtendedStatus = styled.div`
  color: #28a745;
  font-weight: 600;
  text-align: center;
  
  small {
    display: block;
    color: var(--color-gray);
    font-weight: normal;
    margin-top: 0.25rem;
  }
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
