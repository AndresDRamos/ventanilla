import styled from "styled-components";

const TicketCard = ({
  ticket,
  onAtender,
  getResponsable,
  formatDate,
  getPriorityColor,
}) => {
  // Función para formatear fecha corta (dd/mm/aa, hh:mm)
  const formatShortDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
  };

  // Función para preparar la descripción (remover saltos de línea)
  const getTruncatedDescription = (text) => {
    if (!text) return "";
    // Reemplazar saltos de línea con espacios para una mejor visualización en una línea
    return text.replace(/\n/g, " ").trim();
  };

  return (
    <Card>
      <TopBar onClick={(e) => e.stopPropagation()}>
        <LeftSection>
          <PriorityBadge priority={getPriorityColor(ticket.idPrioridad)}>
            {ticket.prioridades?.prioridad}
          </PriorityBadge>
          <TicketNumber>#{ticket.idTicket}</TicketNumber>
        </LeftSection>

        <RightSection>
          {ticket.atenciones && ticket.atenciones.length > 0 ? (
            <AtendedStatus>
              Atendido el {formatShortDate(ticket.atenciones[0].fechaAtencion)}
            </AtendedStatus>
          ) : (
            <AttendButton
              onClick={(e) => {
                e.stopPropagation();
                onAtender(ticket);
              }}
            >
              Atender
            </AttendButton>
          )}
        </RightSection>
      </TopBar>

      <Content onClick={(e) => e.stopPropagation()}>
        <InfoRow>
          <InfoLabel>Empleado:</InfoLabel>
          <InfoValue>
            {ticket.empleados?.nombre} (#{ticket.empleados?.codigoEmpleado})
          </InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Tipo:</InfoLabel>
          <InfoValue>{ticket.tiposSolicitud?.tipoSolicitud}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Planta:</InfoLabel>
          <InfoValue>{ticket.empleados?.plantas?.planta}</InfoValue>
        </InfoRow>

        <InfoRow>
          <InfoLabel>Fecha:</InfoLabel>
          <InfoValue>{formatDate(ticket.fechaCreacion)}</InfoValue>
        </InfoRow>
        <InfoRow>
          <InfoLabel>Responsable:</InfoLabel>
          <InfoValue>
            {getResponsable(ticket.empleados?.idPlanta, ticket.idTipoSolicitud)}
          </InfoValue>
        </InfoRow>

        <DescriptionSection>
          <Description>
            {getTruncatedDescription(ticket.descripcion)}
          </Description>
        </DescriptionSection>
      </Content>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 270px;
  max-height: 270px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
`;

const TicketNumber = styled.h3`
  margin: 0;
  color: var(--color-primary);
  font-size: 1.1rem;
  font-weight: 600;
`;

const PriorityBadge = styled.span`
  background-color: ${(props) => props.priority};
  color: white;
  padding: 0.25rem 0.6rem;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
`;

const InfoLabel = styled.span`
  color: var(--color-primary);
  font-weight: 600;
  min-width: 80px;
`;

const InfoValue = styled.span`
  color: var(--color-gray);
  text-align: right;
  flex: 1;
  margin-left: 1rem;
`;

const DescriptionSection = styled.div`
  margin-bottom: 0.25rem;
`;

const Description = styled.div`
  margin-top: 0.5rem;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  color: var(--color-gray);
  line-height: 1.4;
  border-left: 3px solid var(--color-accent);
  font-size: 0.9rem;

  /* Limitar a una sola línea */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AttendButton = styled.button`
  background-color: var(--color-bg);
  color: var(--color-primary);
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.85rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-accent);
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const AtendedStatus = styled.div`
  color: #28a745;
  font-weight: 500;
  font-size: 0.85rem;
`;

export default TicketCard;
