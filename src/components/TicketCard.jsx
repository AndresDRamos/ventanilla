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
  currentUser = null, // Usuario actual para determinar el rol
}) => {
  // Función para obtener el usuario delegado activo
  const getUsuarioDelegado = (ticket) => {
    if (ticket.idEstado === 2 && ticket.delegaciones?.length > 0) {
      const delegacionActiva = ticket.delegaciones.find(d => d.bActivo === true);
      return delegacionActiva?.usuarios?.nombre || null;
    }
    return null;
  };

  // Función para obtener la fecha de creación desde seguimientos únicamente
  const getFechaCreacion = (ticket) => {
    const fechaSeguimiento = ticket.seguimientos?.find(
      (s) => s.idEstado === 1
    )?.fecha;
    if (fechaSeguimiento) {
      return formatDate
        ? formatDate(fechaSeguimiento)
        : formatMexicanDate(fechaSeguimiento);
    }
    // Si no hay seguimiento de creación, el ticket necesita ser configurado
    return "Pendiente seguimiento inicial";
  };

  // Función para obtener la fecha apropiada según el estado del ticket
  const getFechaRelevante = (ticket) => {
    switch (ticket.idEstado) {
      case 1: {
        return getFechaCreacion(ticket);
      }
      case 2: {
        const fechaDelegacion = ticket.seguimientos?.find(s => s.idEstado === 2)?.fecha;
        return fechaDelegacion 
          ? (formatDate ? formatDate(fechaDelegacion) : formatMexicanDate(fechaDelegacion))
          : getFechaCreacion(ticket);
      }
      case 3: {
        const fechaAtencion = ticket.seguimientos?.find(s => s.idEstado === 3)?.fecha;
        return fechaAtencion 
          ? (formatDate ? formatDate(fechaAtencion) : formatMexicanDate(fechaAtencion))
          : getFechaCreacion(ticket);
      }
      case 4: {
        const fechaCierre = ticket.seguimientos?.find(s => s.idEstado === 4)?.fecha;
        return fechaCierre 
          ? (formatDate ? formatDate(fechaCierre) : formatMexicanDate(fechaCierre))
          : getFechaCreacion(ticket);
      }
      case 5: {
        const fechaCancelacion = ticket.seguimientos?.find(s => s.idEstado === 5)?.fecha;
        return fechaCancelacion 
          ? (formatDate ? formatDate(fechaCancelacion) : formatMexicanDate(fechaCancelacion))
          : getFechaCreacion(ticket);
      }
      default: {
        return getFechaCreacion(ticket);
      }
    }
  };

  const getCardBorderColor = () => {
    // Usar colores basados en el idEstado del ticket
    switch (ticket.idEstado) {
      case 1:
        return "var(--color-estado-sin-atender)"; // Sin atender - Naranja
      case 2:
        return "var(--color-estado-delegado)"; // Delegado - Azul
      case 3:
        return "var(--color-estado-atendido)"; // Atendido - Verde
      case 4:
        return "var(--color-estado-cerrado)"; // Cerrado - Gris
      case 5:
        return "var(--color-estado-cancelado)"; // Cancelado - Rojo
      default:
        return "#ffc107"; // Fallback amarillo
    }
  };

  // Función para obtener el texto del estado del ticket
  const getEstadoTexto = (idEstado) => {
    switch (idEstado) {
      case 1:
        return "Sin atender";
      case 2:
        return "Asignado";
      case 3:
        return "Atendido";
      case 4:
        return "Cerrado";
      case 5:
        return "Cancelado";
      default:
        return "Pendiente";
    }
  };

  // Función para obtener la etiqueta de fecha apropiada según el estado
  const getEtiquetaFecha = (idEstado) => {
    switch (idEstado) {
      case 1: 
        return "Fecha de creación:";
      case 2: 
        return "Fecha de asignación:";
      case 3: 
        return "Fecha de atención:";
      case 4: 
        return "Fecha de cierre:";
      case 5: 
        return "Fecha de cancelación:";
      default: 
        return "Fecha de creación:";
    }
  };

  // Función para obtener el color del estado (mismos colores que el borde)
  const getEstadoColor = (idEstado) => {
    switch (idEstado) {
      case 1:
        return "var(--color-estado-sin-atender)"; // Sin atender - Naranja
      case 2:
        return "var(--color-estado-delegado)"; // Delegado - Azul
      case 3:
        return "var(--color-estado-atendido)"; // Atendido - Verde
      case 4:
        return "var(--color-estado-cerrado)"; // Cerrado - Gris
      case 5:
        return "var(--color-estado-cancelado)"; // Cancelado - Rojo
      default:
        return "#ffc107"; // Fallback amarillo
    }
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
      <TopBar onClick={() => onToggleExpand && onToggleExpand(ticket.idTicket)}>
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
                  title="Ver respuesta del ticket"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </ViewResponseButton>
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
                $estadoColor={getEstadoColor(ticket.idEstado)}
                onClick={(e) => {
                  e.stopPropagation();
                  onShowDetails && onShowDetails(ticket);
                }}
              >
                {getEstadoTexto(ticket.idEstado)}
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
          // Modo Admin: Layout completo con diseño mejorado
          <>
            <PropertyRow>
              <PropertyLabel>Empleado:</PropertyLabel>
              <PropertyValue>
                {ticket.empleados?.nombre} - Código:{" "}
                {ticket.empleados?.codigoEmpleado}
              </PropertyValue>
            </PropertyRow>

            <PropertyRow>
              <PropertyLabel>Planta:</PropertyLabel>
              <PropertyValue>{ticket.empleados?.plantas?.planta}</PropertyValue>
            </PropertyRow>

            <PropertyRow>
              <PropertyLabel>Fecha:</PropertyLabel>
              <PropertyValue>{getFechaRelevante(ticket)}</PropertyValue>
            </PropertyRow>

            {getResponsable && (
              <PropertyRow>
                <PropertyLabel>
                  {/* Para idRol 3: si es delegado mostrar "Delegado a:", si no "Asignado por:" */}
                  {/* Para idRol 1 y 2: mostrar "Responsable:" o "Delegado a:" según el estado */}
                  {currentUser?.idRol === 3 ? 
                    (ticket.idEstado === 2 ? "Delegado a:" : "Asignado por:") :
                    (ticket.idEstado === 2 ? "Delegado a:" : "Responsable:")
                  }
                </PropertyLabel>
                <PropertyValue>
                  {/* Si el ticket está delegado (estado 2), mostrar el usuario delegado */}
                  {ticket.idEstado === 2 && getUsuarioDelegado(ticket) ? 
                    getUsuarioDelegado(ticket) :
                    getResponsable(
                      ticket.empleados?.idPlanta,
                      ticket.idTipoSolicitud
                    )
                  }
                </PropertyValue>
              </PropertyRow>
            )}

            <DescriptionRow>
              <PropertyLabel>Descripción:</PropertyLabel>
              <DescriptionText>{ticket.descripcion}</DescriptionText>
            </DescriptionRow>
          </>
        ) : (
          // Modo Employee: Layout similar al admin pero con información específica del empleado
          <>
            <PropertyRow>
              <PropertyLabel>{getEtiquetaFecha(ticket.idEstado)}</PropertyLabel>
              <PropertyValue>{getFechaRelevante(ticket)}</PropertyValue>
            </PropertyRow>

            <PropertyRow>
              <PropertyLabel>Tipo:</PropertyLabel>
              <PropertyValue>{ticket.tiposSolicitud?.tipoSolicitud}</PropertyValue>
            </PropertyRow>

            <DescriptionRow>
              <PropertyLabel>Descripción:</PropertyLabel>
              <DescriptionText>{ticket.descripcion}</DescriptionText>
            </DescriptionRow>
            
            {getResponsable && (
              <PropertyRow>
                <PropertyLabel>
                  {/* Para todos los roles: si es delegado mostrar "Delegado a:", si no "Responsable:" */}
                  {ticket.idEstado === 2 ? "Delegado a:" : "Responsable:"}
                </PropertyLabel>
                <PropertyValue>
                  {/* Si el ticket está delegado (estado 2), mostrar el usuario delegado */}
                  {ticket.idEstado === 2 && getUsuarioDelegado(ticket) ? 
                    getUsuarioDelegado(ticket) :
                    getResponsable(
                      ticket.empleados?.idPlanta,
                      ticket.idTipoSolicitud
                    )
                  }
                </PropertyValue>
              </PropertyRow>
            )}
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
  border-left: 4px solid ${props => props.$borderColor};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${props => props.$isResolved ? '#f8f9fa' : 'white'};
  border-bottom: ${props => props.$isExpanded ? '1px solid #e9ecef' : 'none'};

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PriorityBadge = styled.span`
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${props => props.$priority};
`;

const TicketNumber = styled.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
`;

const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AttendButton = styled.button`
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #2a2d29;
    transform: translateY(-1px);
  }
`;

const EmployeeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StatusBadge = styled.button`
  background: ${(props) => props.$estadoColor || "#ffc107"};
  color: white;
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    filter: brightness(1.1);
  }
`;

const MobileExpandButton = styled.button`
  background: none;
  border: none;
  color: var(--color-gray);
  cursor: pointer;
  padding: 0.25rem;
  font-size: 0.8rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: var(--color-primary);
  }
`;

const Content = styled.div`
  display: ${props => props.$isExpanded ? 'block' : 'none'};
  padding: 1rem;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;

  @media (min-width: 769px) {
    display: block;
    border-top: none;
    background: white;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const PropertyRow = styled.div`
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

const PropertyLabel = styled.span`
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.8rem;
  min-width: 120px;

  @media (max-width: 768px) {
    min-width: auto;
    font-size: 0.75rem;
  }
`;

const PropertyValue = styled.span`
  color: #495057;
  font-size: 0.8rem;
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 0.75rem;
  }
`;

const DescriptionRow = styled.div`
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e9ecef;
`;

const ResponseSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ViewResponseButton = styled.button`
  background: #17a2b8;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #138496;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const DescriptionText = styled.div`
  color: #495057;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default TicketCard;
