import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useUsers } from '../../hooks/useUsers';

const UserSelector = ({ 
  selectedUser, 
  onUserSelect, 
  placeholder = "Seleccionar usuario...",
  disabled = false,
  allowedRoles = [2, 3], // Solo permitir usuarios con idRol 2 y 3
  customFilter = null // Función personalizada para filtrado adicional
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  
  const { users } = useUsers();

  // Filtrar usuarios basado en roles permitidos, filtro personalizado y término de búsqueda
  useEffect(() => {
    // Filtrar por roles permitidos (más restrictivo que excludeRoles)
    let filtered = users.filter(user => allowedRoles.includes(user.idRol));
    
    // Aplicar filtro personalizado si existe
    if (customFilter) {
      filtered = filtered.filter(customFilter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(user => 
        user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredUsers(filtered);
  }, [users, searchTerm, allowedRoles, customFilter]);

  // Cerrar dropdown cuando se hace clic afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (isOpen) {
        calculateDropdownPosition();
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        calculateDropdownPosition();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, true);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen]);

  // Calcular posición del dropdown
  const calculateDropdownPosition = () => {
    if (inputRef.current) {
      const rect = inputRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  };

  const handleUserSelect = (user) => {
    onUserSelect(user.idUsuario);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleInputClick = () => {
    if (!disabled) {
      if (!isOpen) {
        calculateDropdownPosition();
      }
      setIsOpen(!isOpen);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (!isOpen) {
      calculateDropdownPosition();
      setIsOpen(true);
    }
  };

  const getDisplayValue = () => {
    if (selectedUser) {
      const user = users.find(u => u.idUsuario === parseInt(selectedUser));
      return user ? user.nombre : '';
    }
    return searchTerm || '';
  };

  const getPlaceholderText = () => {
    if (selectedUser && !isOpen) {
      return '';
    }
    return placeholder;
  };

  return (
    <Container ref={dropdownRef}>
      <InputContainer ref={inputRef}>
        <SearchInput
          type="text"
          value={getDisplayValue()}
          onChange={handleSearchChange}
          onClick={handleInputClick}
          placeholder={getPlaceholderText()}
          disabled={disabled}
          $hasValue={!!selectedUser}
        />
        <DropdownIcon 
          $isOpen={isOpen} 
          $disabled={disabled}
          onClick={handleInputClick}
        >
          ▼
        </DropdownIcon>
      </InputContainer>
      
      {isOpen && !disabled && (
        <DropdownList
          $top={dropdownPosition.top}
          $left={dropdownPosition.left}
          $width={dropdownPosition.width}
        >
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <DropdownItem
                key={user.idUsuario}
                onClick={() => handleUserSelect(user)}
                $selected={selectedUser === user.idUsuario.toString()}
              >
                {user.nombre}
              </DropdownItem>
            ))
          ) : (
            <NoResultsItem>
              {searchTerm ? 'No se encontraron usuarios' : 'No hay usuarios disponibles'}
            </NoResultsItem>
          )}
        </DropdownList>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  position: relative;
  width: 100%;
  z-index: 1000;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-right: 2.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9rem;
  background: ${props => props.disabled ? '#f8f9fa' : 'white'};
  color: ${props => props.disabled ? '#6c757d' : '#495057'};
  box-sizing: border-box;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  &:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
    font-style: italic;
  }
`;

const DropdownIcon = styled.div`
  position: absolute;
  right: 0.75rem;
  font-size: 0.8rem;
  color: ${props => props.$disabled ? '#adb5bd' : '#6c757d'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: transform 0.2s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  user-select: none;

  &:hover {
    color: ${props => props.$disabled ? '#adb5bd' : 'var(--color-accent)'};
  }
`;

const DropdownList = styled.ul`
  position: fixed;
  top: ${props => props.$top}px;
  left: ${props => props.$left}px;
  width: ${props => props.$width}px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 9999;
  margin: 0;
  padding: 0;
  list-style: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const DropdownItem = styled.li`
  padding: 0.7rem;
  cursor: pointer;
  background: ${props => props.$selected ? '#f8f9fa' : 'white'};
  color: #495057;
  border-bottom: 1px solid #f1f3f4;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${props => props.$selected ? '#e9ecef' : '#f8f9fa'};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const NoResultsItem = styled.li`
  padding: 0.75rem;
  color: #6c757d;
  font-style: italic;
  text-align: center;
  background: #f8f9fa;
`;

export default UserSelector;
