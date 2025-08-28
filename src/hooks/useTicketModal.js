import { useState, useEffect } from 'react';

export const useTicketModal = (isOpen, onClose) => {
  const [respuesta, setRespuesta] = useState("");
  const [actionType, setActionType] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [calificacion, setCalificacion] = useState(1);
  const [comentario, setComentario] = useState("");

  // Reset state cuando se cierra el modal
  useEffect(() => {
    if (!isOpen) {
      resetState();
    }
  }, [isOpen]);

  const resetState = () => {
    setRespuesta("");
    setActionType("");
    setSelectedUser("");
    setCalificacion(1);
    setComentario("");
  };

  const handleClose = () => {
    resetState();
    onClose?.();
  };

  const handleActionChange = (newActionType) => {
    setRespuesta("");
    setSelectedUser("");
    setActionType(newActionType);
  };

  const handleRespuestaChange = (value) => {
    setRespuesta(value);
  };

  const handleUserChange = (value) => {
    setSelectedUser(value);
  };

  const handleCalificacionChange = (value) => {
    setCalificacion(value);
  };

  const handleComentarioChange = (value) => {
    setComentario(value);
  };

  return {
    // Estados
    respuesta,
    setRespuesta: handleRespuestaChange,
    actionType,
    setActionType,
    selectedUser,
    setSelectedUser: handleUserChange,
    calificacion,
    setCalificacion: handleCalificacionChange,
    comentario,
    setComentario: handleComentarioChange,
    
    // Funciones
    resetState,
    handleClose,
    handleActionChange
  };
};
