import { formatMexicanDate } from '../../utils/dateUtils';
import {
  ContentSection,
  EmployeeInfo,
  EmployeeName,
  DateContainer,
  DateLabel,
  DateValue,
  RequestTitle,
  SectionTitle,
  DescriptionText
} from './TicketResponse.styles';

const TicketResponseContent = ({ ticket }) => {
  return (
    <>
      <ContentSection>
        <EmployeeInfo>
          <EmployeeName>
            {ticket.tickets.empleados?.nombre || 'No especificado'} 
            {" "}(<span>{ticket.tickets.empleados?.codigoEmpleado || 'No especificado'}</span>)
            - {ticket.tickets.empleados?.plantas?.planta || 'No especificada'}
          </EmployeeName>
        </EmployeeInfo>
        
        <DateContainer>
          <DateLabel>Fecha de generación:</DateLabel>{' '}
          <DateValue>{formatMexicanDate(ticket.tickets.fechaCreacion)}</DateValue>
        </DateContainer>

        <RequestTitle>Tipo: {ticket.tickets.tiposSolicitud?.tipoSolicitud || 'No especificado'}</RequestTitle>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Descripción del Problema</SectionTitle>
        <DescriptionText>{ticket.tickets.descripcion}</DescriptionText>
      </ContentSection>
    </>
  );
};

export default TicketResponseContent;
