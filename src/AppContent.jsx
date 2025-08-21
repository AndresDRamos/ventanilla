import { Routes, Route, Navigate } from "react-router-dom";
import { useAppAuth } from "./contexts/AuthContext.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import EmployeeTicketsPage from "./pages/EmployeeTicketsPage.jsx";
import TicketResponse from "./pages/TicketResponse.jsx";

const AppContent = () => {
  const { user, employeeData, logout, loading } = useAppAuth();

  if (loading) {
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
      {/* Ruta pública para responder tickets */}
      <Route path="/ticket/:token" element={<TicketResponse />} />
      
      {/* Rutas protegidas */}
      <Route 
        path="/admin" 
        element={
          user && user.type === 'admin' ? 
            <AdminDashboard /> : 
            <Navigate to="/login" replace />
        } 
      />
      
      <Route 
        path="/employee" 
        element={
          employeeData && employeeData.type === 'employee' ? 
            <EmployeeTicketsPage employeeData={employeeData} onLogout={logout} /> : 
            <Navigate to="/login" replace />
        } 
      />
      
      <Route path="/login" element={<LoginPage />} />
      
      {/* Rutas de redirección */}
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
