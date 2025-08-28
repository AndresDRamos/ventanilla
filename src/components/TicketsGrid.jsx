import styled from "styled-components";
import TicketCard from "./tickets/TicketCard.jsx";

const TicketsGrid = ({
  tickets,
  mode = "admin",
  onAtender,
  onVerRespuesta,
  getResponsable,
  formatDate,
  getPriorityColor,
  expandedTicketId,
  onToggleExpand,
  currentUser = null, // Usuario actual
}) => {
  if (tickets.length === 0) {
    return (
      <Container>
        <EmptyMessage>No se encontraron tickets</EmptyMessage>
      </Container>
    );
  }

  return (
    <Container>
      <GridContainer>
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.idTicket}
            ticket={ticket}
            mode={mode}
            onAtender={onAtender}
            onVerRespuesta={onVerRespuesta}
            getResponsable={getResponsable}
            formatDate={formatDate}
            getPriorityColor={getPriorityColor}
            isExpanded={expandedTicketId === ticket.idTicket}
            onToggleExpand={onToggleExpand}
            currentUser={currentUser}
          />
        ))}
      </GridContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 0.5rem;

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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 0.5rem;
  align-content: start;
  min-height: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0.8rem;
    grid-row-gap: 0.4rem;
    padding: 0.5rem;
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
  margin: 1rem;
`;

export default TicketsGrid;
