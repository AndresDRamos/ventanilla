import styled from "styled-components";

const StatsSection = ({ stats, statsFilter, onStatsFilterChange }) => {
  // Mapeo de estados a colores y labels
  const stateConfig = {
    sinAtender: {
      id: 1,
      label: "Nuevas",
      color: "var(--color-estado-sin-atender)",
      count: stats.sinAtender,
    },
    reasignados: {
      id: 2,
      label: "Asignados",
      color: "var(--color-estado-delegado)",
      count: stats.reasignados,
    },
    atendidos: {
      id: 3,
      label: "Atendidos",
      color: "var(--color-estado-atendido)",
      count: stats.atendidos,
    },
    cerrados: {
      id: 4,
      label: "Cerrados",
      color: "var(--color-estado-cerrado)",
      count: stats.cerrados,
    },
    cancelados: {
      id: 5,
      label: "Cancelados",
      color: "var(--color-estado-cancelado)",
      count: stats.cancelados,
    },
  };

  const handleCardClick = (stateKey) => {
    // Si ya está seleccionado, lo deselecciona (muestra todos)
    if (statsFilter === stateKey) {
      onStatsFilterChange(null);
    } else {
      onStatsFilterChange(stateKey);
    }
  };

  return (
    <Container>
      <TicketCountLabel>Tickets: {stats.total}</TicketCountLabel>

      <StatsGrid>
        {Object.entries(stateConfig).map(([stateKey, config]) => (
          <StatCard
            key={stateKey}
            $active={statsFilter === stateKey}
            $color={config.color}
            onClick={() => handleCardClick(stateKey)}
          >
            <StatNumber
              $active={statsFilter === stateKey}
              $color={config.color}
            >
              {config.count}
            </StatNumber>
            <StatLabel $active={statsFilter === stateKey} $color={config.color}>
              {config.label}
            </StatLabel>
          </StatCard>
        ))}
      </StatsGrid>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  margin-bottom: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 0.6rem;
  }
`;

const TicketCountLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, fr);
    gap: 0.5rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 0.8rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 3px;
    background: ${(props) => (props.$active ? props.$color : "transparent")};
    transition: width 0.25s ease;
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.$active ? props.$color : "var(--color-gray)")};
  margin-bottom: 0.2rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.1rem;
  }
`;

const StatLabel = styled.div`
  color: ${(props) => (props.$active ? props.$color : "var(--color-gray)")};
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export default StatsSection;
