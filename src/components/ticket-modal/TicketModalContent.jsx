import { formatMexicanDate } from '../../utils/dateUtils';
import { 
  EmployeeInfo, 
  EmployeeName, 
  DateContainer, 
  DateLabel, 
  DateValue, 
  RequestTitle, 
  DescriptionSection, 
  DescriptionText 
} from './TicketModal.styles';

const TicketModalContent = ({ ticket }) => {
  const fechaGeneracion = ticket.seguimientos?.find((s) => s.idEstado === 1)?.fecha
    ? formatMexicanDate(ticket.seguimientos.find((s) => s.idEstado === 1).fecha)
    : "No disponible";

  return (
    <>
      <EmployeeInfo>
        <EmployeeName>
          {ticket.empleados?.nombre} ({ticket.empleados?.codigoEmpleado}) -{" "}
          {ticket.empleados?.plantas?.planta}
        </EmployeeName>
      </EmployeeInfo>

      <DateContainer>
        <DateLabel>Fecha de generación:</DateLabel>{" "}
        <DateValue>{fechaGeneracion}</DateValue>
      </DateContainer>

      <RequestTitle>Tipo: {ticket.tiposSolicitud?.tipoSolicitud}</RequestTitle>

      <DescriptionSection>
        <DescriptionText>{ticket.descripcion}</DescriptionText>
      </DescriptionSection>
    </>
  );
};

export default TicketModalContent;
