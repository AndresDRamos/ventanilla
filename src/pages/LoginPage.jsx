import { useState } from 'react';
import styled from 'styled-components';
import EmployeeAccess from '../components/EmployeeAccess.jsx';
import AdminAccess from '../components/AdminAccess.jsx';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('employee'); // 'employee' por defecto
  const [logoError, setLogoError] = useState(false);
  const [currentLogo, setCurrentLogo] = useState('/logo.png');

  const handleLogoError = () => {
    console.log('Logo no se pudo cargar, probando imagen alternativa');
    if (currentLogo === '/logo.png') {
      setCurrentLogo('/EZI-E.png');
    } else {
      setLogoError(true);
    }
  };

  return (
    <Container>
      <Logo>
        {!logoError ? (
          <img 
            key={currentLogo} // Para forzar re-render cuando cambie la imagen
            src={currentLogo} 
            alt="Logo de la empresa" 
            style={{ height: '60px' }}
            onError={handleLogoError}
          />
        ) : (
          <LogoFallback>
            <LogoText>Ventanilla de atención EZI</LogoText>
          </LogoFallback>
        )}
      </Logo>

      <Content>
        <TabContainer>
          <TabNav>
            <Tab 
              active={activeTab === 'employee'} 
              onClick={() => setActiveTab('employee')}
            >
              <TabIcon>👤</TabIcon>
              Empleado
            </Tab>
            <Tab 
              active={activeTab === 'admin'} 
              onClick={() => setActiveTab('admin')}
            >
              <TabIcon>🔑</TabIcon>
              Administrador
            </Tab>
          </TabNav>

          <TabContent>
            {activeTab === 'employee' && (
              <EmployeeAccess />
            )}

            {activeTab === 'admin' && (
              <AdminAccess />
            )}
          </TabContent>
        </TabContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
`;

const Logo = styled.div`
  margin-bottom: 40px;
  text-align: center;
  
  img {
    max-width: 100%;
    height: auto;
    /* Removido el filtro que estaba causando problemas */
  }
`;

const LogoFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

const LogoText = styled.h1`
  color: var(--color-white);
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
`;

const Content = styled.div`
  width: 100%;
  max-width: 500px;
`;

const TabContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

const TabNav = styled.div`
  display: flex;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

const Tab = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 20px;
  border: none;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-color)' : '#6c757d'};
  font-size: 14px;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: ${props => props.active ? '2px solid var(--primary-color)' : '2px solid transparent'};

  &:hover {
    background: ${props => props.active ? 'white' : '#f8f9fa'};
    color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  }
`;

const TabIcon = styled.span`
  font-size: 16px;
`;

const TabContent = styled.div`
  padding: 0;
`;

export default LoginPage;
