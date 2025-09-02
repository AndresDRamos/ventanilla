import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAppAuth } from "./contexts/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import EmployeeTicketsPage from "./pages/employee/EmployeeTicketsPage.jsx";
import TicketResponse from "./pages/admin/TicketResponse.jsx";
import EmployeeTicketResponse from "./pages/employee/EmployeeTicketResponse.jsx";

const AppContent = () => {
  const { user, employeeData, initializing } = useAppAuth();
  const location = useLocation();

  if (initializing) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        Cargando...
      </div>
    );
  }

  return (
    <Routes>
      {/* Rutas públicas para responder tickets */}
      <Route path="/ticket/:token" element={<TicketResponse />} />
      <Route path="/respuesta/:token" element={<EmployeeTicketResponse />} />
      
      {/* Ruta de login - siempre accesible */}
      <Route path="/login" element={<LoginPage />} />
      
      {/* Rutas protegidas para admin */}
      <Route 
        path="/admin/*" 
        element={
          user && user.type === 'admin' ? 
            <AdminDashboard /> : 
            <Navigate to="/login" state={{ from: location }} replace />
        } 
      />
      
      {/* Rutas protegidas para empleados */}
      <Route 
        path="/employee/*" 
        element={
          employeeData && employeeData.type === 'employee' ? 
            <EmployeeTicketsPage employeeData={employeeData} /> : 
            <Navigate to="/login" state={{ from: location }} replace />
        } 
      />
      
      {/* Ruta raíz - redirige según el tipo de usuario */}
      <Route 
        path="/" 
        element={
          user && user.type === 'admin' ? 
            <Navigate to="/admin" replace /> :
          employeeData && employeeData.type === 'employee' ?
            <Navigate to="/employee" replace /> :
            <Navigate to="/login" replace />
        } 
      />
      
      {/* Ruta catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppContent;
