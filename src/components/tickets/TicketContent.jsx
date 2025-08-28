import { 
  Content,
  PropertyRow, 
  PropertyLabel, 
  PropertyValue, 
  DescriptionRow, 
  DescriptionText 
} from './TicketCard.styles';
import { getResponsableLabel, getResponsableValue, truncateText } from '../../utils/ticketUtils';

const TicketContent = ({
  ticket,
  mode,
  ticketData,
  getResponsable,
  currentUser,
  isExpanded
}) => {
  const responsableLabel = getResponsableLabel(currentUser, ticket.idEstado, mode);
  const responsableValue = getResponsableValue(ticket, ticketData, getResponsable);

  return (
    <Content $isExpanded={isExpanded}>
      {mode === "admin" ? (
        // Contenido para vista de administrador
        <>
          <PropertyRow $isExpanded={isExpanded}>
            <PropertyLabel $isExpanded={isExpanded}>Empleado:</PropertyLabel>
            <PropertyValue $isExpanded={isExpanded}>
              {truncateText(ticket.empleados?.nombre)}
            </PropertyValue>
          </PropertyRow>

          <PropertyRow $isExpanded={isExpanded}>
            <PropertyLabel $isExpanded={isExpanded}>Código:</PropertyLabel>
            <PropertyValue $isExpanded={isExpanded}>{ticket.empleados?.codigoEmpleado}</PropertyValue>
          </PropertyRow>

          <PropertyRow $isExpanded={isExpanded}>
            <PropertyLabel $isExpanded={isExpanded}>Fecha:</PropertyLabel>
            <PropertyValue $isExpanded={isExpanded}>{ticketData.fechaRelevante}</PropertyValue>
          </PropertyRow>

          <PropertyRow $isExpanded={isExpanded}>
            <PropertyLabel $isExpanded={isExpanded}>Tipo:</PropertyLabel>
            <PropertyValue $isExpanded={isExpanded}>{ticket.tiposSolicitud?.tipoSolicitud}</PropertyValue>
          </PropertyRow>

          {getResponsable && (
            <PropertyRow $isExpanded={isExpanded}>
              <PropertyLabel $isExpanded={isExpanded}>{responsableLabel}</PropertyLabel>
              <PropertyValue $isExpanded={isExpanded}>{responsableValue}</PropertyValue>
            </PropertyRow>
          )}
{/* 
          <DescriptionRow>
            <PropertyLabel>Descripción:</PropertyLabel>
            <DescriptionText title={ticket.descripcion}>
              {truncateText(ticket.descripcion)}
            </DescriptionText>
          </DescriptionRow> */}
        </>
      ) : (
        // Contenido para vista de empleado
        <>
          <PropertyRow $isExpanded={isExpanded}>
            <PropertyLabel $isExpanded={isExpanded}>{ticketData.etiquetaFecha}</PropertyLabel>
            <PropertyValue $isExpanded={isExpanded}>{ticketData.fechaRelevante}</PropertyValue>
          </PropertyRow>

          <PropertyRow $isExpanded={isExpanded}>
            <PropertyLabel $isExpanded={isExpanded}>Tipo:</PropertyLabel>
            <PropertyValue $isExpanded={isExpanded}>{ticket.tiposSolicitud?.tipoSolicitud}</PropertyValue>
          </PropertyRow>
{/* 
          <DescriptionRow>
            <PropertyLabel>Descripción:</PropertyLabel>
            <DescriptionText title={ticket.descripcion}>
              {truncateText(ticket.descripcion)}
            </DescriptionText>
          </DescriptionRow> */}
          
          {getResponsable && (
            <PropertyRow $isExpanded={isExpanded}>
              <PropertyLabel $isExpanded={isExpanded}>{responsableLabel}</PropertyLabel>
              <PropertyValue $isExpanded={isExpanded}>{responsableValue}</PropertyValue>
            </PropertyRow>
          )}
        </>
      )}
    </Content>
  );
};

export default TicketContent;
