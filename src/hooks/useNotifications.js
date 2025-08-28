import { useState } from 'react';
import { enviarNotificacionDelegacion, enviarNotificacionTicketNuevo as enviarNotificacionTicketNuevoService } from '../services/notificationService.js';

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
   * Envía notificación por email cuando se crea un ticket nuevo
   * @param {Object} ticketData - Datos completos del ticket
   * @param {Object} usuarioAdministrador - Usuario administrador asignado
   * @returns {Promise<Object>} Resultado del envío
   */
  const enviarNotificacionTicketNuevo = async (ticketData, usuarioAdministrador) => {
    try {
      setLoading(true);
      setError(null);

      // Validar que el usuario tenga email
      if (!usuarioAdministrador.correo) {
        throw new Error('El usuario administrador no tiene correo registrado');
      }

      // Enviar notificación completa (token + email via Edge Function)
      const resultado = await enviarNotificacionTicketNuevoService(ticketData, usuarioAdministrador);

      if (!resultado.success) {
        throw new Error(resultado.error || 'Error enviando notificación de ticket nuevo');
      }

      return {
        success: true,
        token: resultado.token,
        directLink: resultado.directLink,
        emailSent: resultado.emailResult.success,
        messageId: resultado.emailResult.messageId
      };

    } catch (err) {
      const errorMessage = err.message || 'Error enviando notificación de ticket nuevo';
      setError(errorMessage);
      console.error('Error en envío de notificación de ticket nuevo:', err);
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
    enviarNotificacionTicketNuevo,
    verificarCapacidadNotificacion,
    loading,
    error
  };
};
