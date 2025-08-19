import styled from 'styled-components';

const TicketSuccess = ({ ticket, onCreateAnother, onLogout }) => {
  return (
    <Container>
      <SuccessCard>
        <Icon>✅</Icon>
        <Title>¡Ticket Creado Exitosamente!</Title>
        <TicketId>Ticket ID: #{ticket.idTicket}</TicketId>
        
        <TicketDetails>
          <DetailItem>
            <DetailLabel>Empleado:</DetailLabel>
            <DetailValue>{ticket.empleado}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Código:</DetailLabel>
            <DetailValue>{ticket.codigoEmpleado}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Fecha de creación:</DetailLabel>
            <DetailValue>
              {new Date(ticket.fechaCreacion).toLocaleDateString('es-MX', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </DetailValue>
          </DetailItem>
        </TicketDetails>

        <Message>
          Tu solicitud ha sido registrada y será procesada por el equipo correspondiente. 
          Recibirás actualizaciones sobre el estado de tu ticket.
        </Message>

        <ButtonGroup>
          <SecondaryButton onClick={onCreateAnother}>
            📝 Crear Otro Ticket
          </SecondaryButton>
          <PrimaryButton onClick={onLogout}>
            🚪 Salir del Sistema
          </PrimaryButton>
        </ButtonGroup>
      </SuccessCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-light) 100%);
`;

const SuccessCard = styled.div`
  background: var(--color-white);
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 4px 20px var(--color-shadow);
  max-width: 500px;
  width: 100%;
`;

const Icon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const TicketId = styled.div`
  background: var(--color-accent);
  color: var(--color-white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const TicketDetails = styled.div`
  background: var(--color-light);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  font-weight: 600;
  color: var(--color-primary);
`;

const DetailValue = styled.span`
  color: var(--color-gray);
`;

const Message = styled.p`
  color: var(--color-gray);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const BaseButton = styled.button`
  flex: 1;
  min-width: 150px;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
`;

const PrimaryButton = styled(BaseButton)`
  background-color: var(--color-accent);
  color: var(--color-white);

  &:hover {
    background-color: #e54a2e;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: var(--color-secondary);
  color: var(--color-primary);

  &:hover {
    background-color: var(--color-gray);
    color: var(--color-white);
    transform: translateY(-1px);
  }
`;

export default TicketSuccess;
