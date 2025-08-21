import { useState } from "react";
import styled from "styled-components";

const FiltersSection = ({
  tempFilters,
  onTempFilterChange,
  onApplyFilters,
  onClearFilters,
  plantas,
  tipos,
  prioridades,
}) => {
  const [filtersExpanded, setFiltersExpanded] = useState(false);

  return (
    <Container>
      <FiltersHeader onClick={() => setFiltersExpanded(!filtersExpanded)}>
        <h3>Filtros</h3>
        <ExpandIcon $expanded={filtersExpanded}>
          {filtersExpanded ? "▲" : "▼"}
        </ExpandIcon>
      </FiltersHeader>

      {filtersExpanded && (
        <FiltersContent>
          <FiltersRow>
            <FilterGroup>
              <label>Planta:</label>
              <select
                value={tempFilters.planta}
                onChange={(e) => onTempFilterChange("planta", e.target.value)}
              >
                <option value="">Todas</option>
                {plantas.map((planta) => (
                  <option key={planta.idPlanta} value={planta.idPlanta}>
                    {planta.planta}
                  </option>
                ))}
              </select>
            </FilterGroup>

            <FilterGroup>
              <label>Tipo:</label>
              <select
                value={tempFilters.tipoSolicitud}
                onChange={(e) =>
                  onTempFilterChange("tipoSolicitud", e.target.value)
                }
              >
                <option value="">Todos</option>
                {tipos
                  .sort((a, b) => a.idTipoSolicitud - b.idTipoSolicitud)
                  .map((tipo) => (
                    <option
                      key={tipo.idTipoSolicitud}
                      value={tipo.idTipoSolicitud}
                    >
                      {tipo.tipoSolicitud}
                    </option>
                  ))}
              </select>
            </FilterGroup>

            <FilterGroup>
              <label>Prioridad:</label>
              <select
                value={tempFilters.prioridad}
                onChange={(e) => onTempFilterChange("prioridad", e.target.value)}
              >
                <option value="">Todas</option>
                {prioridades.map((prioridad) => (
                  <option
                    key={prioridad.idPrioridad}
                    value={prioridad.idPrioridad}
                  >
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
                value={tempFilters.empleado}
                onChange={(e) => onTempFilterChange("empleado", e.target.value)}
              />
            </FilterGroup>
          </FiltersRow>

          <SortSection>
            <label>Ordenar por:</label>
            <select
              value={tempFilters.sortBy}
              onChange={(e) => onTempFilterChange("sortBy", e.target.value)}
            >
              <option value="fecha">Fecha de creación</option>
              <option value="prioridad">Prioridad</option>
            </select>
          </SortSection>

          <FilterButtons>
            <ClearButton onClick={onClearFilters}>Limpiar</ClearButton>
            <ApplyButton onClick={onApplyFilters}>Aplicar</ApplyButton>
          </FilterButtons>
        </FiltersContent>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const FiltersHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: ${(props) => (props.$expanded ? "1px solid #eee" : "none")};

  h3 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;

const ExpandIcon = styled.span`
  color: var(--color-primary);
  font-size: 0.9rem;
  transition: transform 0.2s ease;
`;

const FiltersContent = styled.div`
  padding: 1rem;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.8rem;
    padding-top: 0.5rem;
  }
`;

const FiltersRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
  margin-bottom: 0.6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
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

  select,
  input {
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
  margin-bottom: 1rem;

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

const FilterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid #eee;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const ApplyButton = styled.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover:not(:disabled) {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`;

const ClearButton = styled.button`
  background: #6c757d;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: #5a6268;
  }
`;

export default FiltersSection;
