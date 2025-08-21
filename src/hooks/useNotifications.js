import { useState } from 'react';
import { enviarNotificacionDelegacion } from '../services/notificationService.js';

export const useNotifications = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Envía notificación por email cuando se delega un ticket
   * @param {Object} ticketData - Datos completos del ticket
   * @param {Object} usuarioDestino - Usuario al que se delega el ticket
   * @returns {Promise<Object>} Resultado del envío
   */
  const enviarNotificacion = async (ticketData, usuarioDestino) => {
    try {
      setLoading(true);
      setError(null);

      // Validar que el usuario tenga email
      if (!usuarioDestino.correo) {
        throw new Error('El usuario destinatario no tiene correo registrado');
      }

      // Enviar notificación completa (token + email via Edge Function)
      const resultado = await enviarNotificacionDelegacion(ticketData, usuarioDestino);

      if (!resultado.success) {
        throw new Error(resultado.error || 'Error enviando notificación');
      }

      return {
        success: true,
        token: resultado.token,
        directLink: resultado.directLink,
        emailSent: resultado.emailResult.success,
        messageId: resultado.emailResult.messageId
      };

    } catch (err) {
      const errorMessage = err.message || 'Error enviando notificación';
      setError(errorMessage);
      console.error('Error en envío de notificación:', err);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  /**
   * Verifica si un usuario puede recibir notificaciones por email
   * @param {Object} usuario - Usuario a verificar
   * @returns {Object} Estado de capacidad de notificación
   */
  const verificarCapacidadNotificacion = (usuario) => {
    const puedeEmail = Boolean(usuario.correo && usuario.correo.trim());
    
    return {
      puedeEmail,
      puedeRecibir: puedeEmail,
      canales: {
        email: puedeEmail ? usuario.correo : null
      },
      mensaje: !puedeEmail 
        ? 'Usuario sin correo registrado'
        : 'Listo para envío via Resend'
    };
  };

  return {
    enviarNotificacion,
    verificarCapacidadNotificacion,
    loading,
    error
  };
};
