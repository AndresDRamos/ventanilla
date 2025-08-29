import { Header, HeaderContent, TicketNumber, AdminPanelButton } from './TicketResponse.styles';
import { useAppAuth } from '../../contexts/AuthContext';

const TicketResponseHeader = ({ ticket }) => {
  const { adminAutoLogin } = useAppAuth();
  
  const handleAdminPanelClick = async () => {
    const user = ticket.usuarios;
    
    // Solo permitir acceso al panel admin si el usuario tiene rol de admin (idRol = 2)
    if (user.idRol === 2) {
      try {
        // Auto-login usando los datos del usuario y esperar a que se complete
        const result = await adminAutoLogin(user);
        
        if (result.success) {
          // Esperar un poco para que el contexto se sincronice
          setTimeout(() => {
            // Abrir el panel admin en una nueva pestaña
            window.open('/ventanilla/admin', '_blank');
          }, 200);
        } else {
          console.warn('⚠️ Auto-login falló, abriendo sin autenticación');
          // Fallback: abrir el panel admin sin auto-login
          window.open('/ventanilla/admin', '_blank');
        }
      } catch (error) {
        console.error('❌ Error en auto-login:', error);
        // Fallback: abrir el panel admin sin auto-login
        window.open('/ventanilla/admin', '_blank');
      }
    } else {
      // Si no es admin, abrir sin auto-login (irá al login)
      window.open('/ventanilla/admin', '_blank');
    }
  };

  return (
    <Header>
      <HeaderContent>
        <TicketNumber>Ticket #{ticket.tickets.idTicket}</TicketNumber>
      </HeaderContent>
      <AdminPanelButton 
        onClick={handleAdminPanelClick}
        title="Ir al panel de administrador"
      >
        Panel Admin
      </AdminPanelButton>
    </Header>
  );
};

export default TicketResponseHeader;
