export const useTicketModalActions = ({
  onSubmit,
  onDelegate,
  onReassign,
  onSelfAssign
}) => {
  const handleSubmit = (actionType, respuesta, selectedUser) => {
    // Validaciones específicas por tipo de acción
    switch (actionType) {
      case "respond":
      case "cancel":
        if (!respuesta.trim()) {
          alert(actionType === "cancel" ? "Debe ingresar un motivo de cancelación" : "Debe ingresar una respuesta");
          return false;
        }
        break;
        
      case "delegate":
        if (!selectedUser) {
          alert("Debe seleccionar un usuario para delegar");
          return false;
        }
        break;
        
      case "reassign":
        if (!selectedUser) {
          alert("Debe seleccionar un usuario para reasignar");
          return false;
        }
        break;
        
      case "selfassign":
        if (!respuesta.trim()) {
          alert("Debe ingresar una respuesta");
          return false;
        }
        break;
        
      default:
        alert("Debe seleccionar una acción");
        return false;
    }

    // Ejecutar acción correspondiente
    try {
      switch (actionType) {
        case "respond":
          onSubmit?.(respuesta.trim(), "respond");
          break;
          
        case "cancel":
          onSubmit?.(respuesta.trim(), "cancel");
          break;
          
        case "delegate":
          onDelegate?.(selectedUser);
          break;
          
        case "reassign":
          onReassign?.(selectedUser);
          break;
          
        case "selfassign":
          // Primero autoasignar, luego responder
          onSelfAssign?.();
          setTimeout(() => {
            onSubmit?.(respuesta.trim(), "respond");
          }, 100);
          break;
          
        default:
          return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error en handleSubmit:', error);
      alert('Error al procesar la acción. Inténtalo de nuevo.');
      return false;
    }
  };

  return {
    handleSubmit
  };
};
