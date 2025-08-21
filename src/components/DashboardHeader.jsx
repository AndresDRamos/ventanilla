import styled from "styled-components";

const DashboardHeader = ({ user, onLogout }) => {
  return (
    <Header>
      <AdminInfo>
        <h1>Dashboard Administrativo</h1>
        <p>Bienvenido, {user?.nombre}</p>
      </AdminInfo>
      <LogoutButton onClick={onLogout}>Cerrar Sesión</LogoutButton>
    </Header>
  );
};

// Styled Components
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 0.8rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const AdminInfo = styled.div`
  h1 {
    margin: 0;
    color: var(--color-primary);
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin: 0.3rem 0 0 0;
    color: var(--color-gray);
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const LogoutButton = styled.button`
  background-color: var(--color-danger);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d63384;
    transform: translateY(-1px);
  }
`;

export default DashboardHeader;
