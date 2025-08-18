import styled from 'styled-components';

export const TableContainer = styled.div`
  background: var(--color-white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px var(--color-shadow);
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

export const TableHeader = styled.thead`
  background-color: var(--color-light);
`;

export const TableHeaderCell = styled.th`
  text-align: left;
  padding: 1rem;
  font-weight: 600;
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-secondary);
  white-space: nowrap;
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #fafafa;
  }

  tr:hover {
    background-color: var(--color-light);
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #eee;
`;

export const TableCell = styled.td`
  padding: 0.75rem 1rem;
  color: var(--color-primary);
  vertical-align: middle;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: var(--color-gray);
`;

export const ErrorContainer = styled.div`
  background-color: var(--color-pink);
  color: var(--color-danger);
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-danger);
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-gray);
`;

export const RefreshButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e54a2e;
  }

  &:disabled {
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
`;

export const TableTitle = styled.h2`
  margin-bottom: 1rem;
  color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-weight: 600;
  font-size: 0.9rem;
`;

export const StatusBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  
  ${props => props.active ? `
    background-color: #d4edda;
    color: #155724;
  ` : `
    background-color: #f8d7da;
    color: #721c24;
  `}
`;

export const RoleBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: var(--color-accent);
  color: var(--color-white);
`;
