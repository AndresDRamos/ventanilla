import styled from "styled-components";
import { formatMexicanDate } from "../utils/dateUtils.js";

const TicketCard = ({
  ticket,
  mode = "employee", // "admin" | "employee"
  formatDate,
  getPriorityColor,
  getResponsable,
  onAtender,
  onVerRespuesta,
  onShowDetails,
  isResolved = false,
  isExpanded = false,
  onToggleExpand,
}) => {
  // Función para obtener el color de la tarjeta según el estado
  const getCardBorderColor = () => {
    if (mode === "employee") {
      return isResolved ? "#28a745" : "#ffc107";
    }
    return ticket.atenciones && ticket.atenciones.length > 0
      ? "#28a745"
      : "#ffc107";
  };

  const isTicketResolved =
    mode === "employee"
      ? isResolved
      : ticket.atenciones && ticket.atenciones.length > 0;

  return (
    <Card 
      $isResolved={isTicketResolved} 
      $borderColor={getCardBorderColor()}
      $isExpanded={isExpanded}
    >
      <TopBar 
        onClick={() => onToggleExpand && onToggleExpand(ticket.idTicket)}
      >
        <LeftSection>
          <PriorityBadge $priority={getPriorityColor(ticket.idPrioridad)}>
            {ticket.prioridades?.prioridad}
          </PriorityBadge>
          <TicketNumber>#{ticket.idTicket}</TicketNumber>
        </LeftSection>

        <RightSection>
          {mode === "admin" ? (
            // Modo Admin: Mostrar botón de atender o ver respuesta
            isTicketResolved ? (
              <ResponseSection>
                <ViewResponseButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onVerRespuesta && onVerRespuesta(ticket);
                  }}
                >
                  Ver Respuesta
                </ViewResponseButton>
                {/* Flecha de expansión para móvil */}
                <MobileExpandButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleExpand && onToggleExpand(ticket.idTicket);
                  }}
                >
                  {isExpanded ? "▲" : "▼"}
                </MobileExpandButton>
              </ResponseSection>
            ) : (
              <ActionSection>
                <AttendButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onAtender && onAtender(ticket);
                  }}
                >
                  Atender
                </AttendButton>
                {/* Flecha de expansión para móvil */}
                <MobileExpandButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleExpand && onToggleExpand(ticket.idTicket);
                  }}
                >
                  {isExpanded ? "▲" : "▼"}
                </MobileExpandButton>
              </ActionSection>
            )
          ) : (
            // Modo Employee: Mostrar badge de estado
            <EmployeeSection>
              <StatusBadge 
                $isResolved={isResolved}
                onClick={(e) => {
                  e.stopPropagation();
                  onShowDetails && onShowDetails(ticket);
                }}
              >
                {isResolved ? "Resuelto" : "Pendiente"}
              </StatusBadge>
              {/* Flecha de expansión para móvil */}
              <MobileExpandButton
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleExpand && onToggleExpand(ticket.idTicket);
                }}
              >
                {isExpanded ? "▲" : "▼"}
              </MobileExpandButton>
            </EmployeeSection>
          )}
        </RightSection>
      </TopBar>

      <Content $isExpanded={isExpanded}>
        {mode === "admin" ? (
          // Modo Admin: Layout completo
          <>
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
              <InfoValue>
                {formatDate
                  ? formatDate(ticket.fechaCreacion)
                  : formatMexicanDate(ticket.fechaCreacion)}
              </InfoValue>
            </InfoRow>

            {getResponsable && (
              <InfoRow>
                <InfoLabel>Responsable:</InfoLabel>
                <InfoValue>
                  {getResponsable(
                    ticket.empleados?.idPlanta,
                    ticket.idTipoSolicitud
                  )}
                </InfoValue>
              </InfoRow>
            )}
          </>
        ) : (
          // Modo Employee: Layout simplificado
          <>
            <InfoRow>
              <InfoLabel>Fecha creación:</InfoLabel>
              <InfoValue>
                {formatDate
                  ? formatDate(ticket.fechaCreacion)
                  : formatMexicanDate(ticket.fechaCreacion)}
              </InfoValue>
            </InfoRow>

            <InfoRow>
              <InfoLabel>Tipo:</InfoLabel>
              <InfoValue>{ticket.tiposSolicitud?.tipoSolicitud}</InfoValue>
            </InfoRow>

            <InfoRow>
              <InfoLabel>Descripción:</InfoLabel>
              <InfoValue>
                <TruncatedDescription>
                  {ticket.descripcion}
                </TruncatedDescription>
              </InfoValue>
            </InfoRow>
          </>
        )}
      </Content>
    </Card>
  );
};

// Styled Components - Unificando estilos de ambos componentes
const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  border-left: 4px solid ${(props) => props.$borderColor || "#ffc107"};
  
  @media (min-width: 769px) {
    /* En escritorio, sin restricciones de altura */
    min-height: auto;
    max-height: none;
  }

  @media (max-width: 768px) {
    /* En móvil, sin restricciones para permitir expansión */
    min-height: auto;
    max-height: none;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #e9ecef;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    min-width: 0;
    flex-shrink: 0;
  }
`;

const PriorityBadge = styled.span`
  background: ${(props) => props.$priority || "#6c757d"};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const TicketNumber = styled.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

const StatusBadge = styled.button`
  background: ${(props) => (props.$isResolved ? "#28a745" : "#ffc107")};
  color: ${(props) => (props.$isResolved ? "white" : "#212529")};
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const AttendButton = styled.button`
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #e54a2e;
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
  }
`;

const ResponseSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`;

const ViewResponseButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background: #0056b3;
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.7rem;
  }
`;

const Content = styled.div`
  padding: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  
  @media (min-width: 769px) {
    /* En escritorio, mostrar siempre */
    display: block;
  }
  
  @media (max-width: 768px) {
    /* En móvil, mostrar solo si está expandido */
    display: ${props => props.$isExpanded ? 'block' : 'none'};
    padding: ${props => props.$isExpanded ? '1rem' : '0'};
    max-height: ${props => props.$isExpanded ? 'none' : '0'};
  }
`;

const MobileExpandButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  transition: background-color 0.2s ease;

  &:hover {
    background: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const EmployeeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const InfoLabel = styled.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.85rem;
  min-width: fit-content;
`;

const InfoValue = styled.span`
  color: #495057;
  font-size: 0.85rem;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const TruncatedDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export default TicketCard;
