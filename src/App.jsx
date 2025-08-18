import { useEffect, useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";
import { AuthProvider, useAppAuth } from "./contexts/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import EmployeeTicketsPage from "./pages/EmployeeTicketsPage.jsx";

// Componente interno que usa el contexto
const AppContent = () => {
  const { user, employeeData, logout } = useAppAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dar tiempo para que el contexto se inicialice
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        Cargando...
      </div>
    );
  }

  // Renderizado condicional basado en el tipo de usuario
  const renderContent = () => {
    if (user && user.type === 'admin') {
      return <AdminDashboard />;
    }
    
    if (employeeData && employeeData.type === 'employee') {
      return <EmployeeTicketsPage employeeData={employeeData} onLogout={logout} />;
    }
    
    return <LoginPage />;
  };

  return renderContent();
};

// Componente principal con Provider
function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppContent />
    </AuthProvider>
  );
}

export default App;
