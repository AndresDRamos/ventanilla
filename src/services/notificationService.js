// Servicio de notificaciones por email
// Sistema con Resend + Edge Functions (profesional)

import { supabase } from '../supabase/supabase.config.jsx';

/**
 * Genera un token único para acceso directo al ticket
 * @param {number} idTicket - ID del ticket
 * @param {number} idUsuario - ID del usuario destinatario
 * @returns {Promise<string>} Token generado
 */
export const generateTicketToken = async (idTicket, idUsuario) => {
  try {
    // Generar token único
    const token = crypto.randomUUID();
    
    // Fecha de expiración: 7 días desde ahora
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + 7);

    // Guardar token en la base de datos
    const { error } = await supabase
      .from('ticket_tokens')
      .insert({
        token,
        id_ticket: idTicket,
        id_usuario: idUsuario,
        fecha_expiracion: fechaExpiracion.toISOString()
      });

    if (error) throw error;

    return token;
  } catch (error) {
    console.error('Error generando token:', error);
    throw error;
  }
};

/**
 * Valida un token de acceso directo
 * @param {string} token - Token a validar
 * @returns {Promise<Object>} Información del token validado
 */
export const validateTicketToken = async (token) => {
  try {
    const { data, error } = await supabase
      .from('ticket_tokens')
      .select(`
        *,
        tickets (
          *,
          empleados (nombre, plantas (planta)),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad),
          estados (estado)
        ),
        usuarios (nombre, correo)
      `)
      .eq('token', token)
      .eq('usado', false)
      .gt('fecha_expiracion', new Date().toISOString())
      .single();

    if (error || !data) {
      throw new Error('Token inválido o expirado');
    }

    return data;
  } catch (error) {
    console.error('Error validando token:', error);
    throw error;
  }
};

/**
 * Marca un token como usado
 * @param {string} token - Token a marcar como usado
 */
export const markTokenAsUsed = async (token) => {
  try {
    const { error } = await supabase
      .from('ticket_tokens')
      .update({ usado: true })
      .eq('token', token);

    if (error) throw error;
  } catch (error) {
    console.error('Error marcando token como usado:', error);
    throw error;
  }
};

/**
 * Envía notificación por email cuando se delega un ticket
 * @param {Object} ticket - Información del ticket
 * @param {Object} usuario - Usuario destinatario
 * @returns {Promise<Object>} Resultado del envío
 */
export const enviarNotificacionDelegacion = async (ticket, usuario) => {
  try {
    console.log('Iniciando notificación por email para:', { 
      ticketId: ticket.idTicket, 
      usuario: usuario.nombre 
    });

    // 1. Generar token de acceso directo
    const token = await generateTicketToken(ticket.idTicket, usuario.idUsuario);
    
    // 2. Construir enlace directo
    const baseUrl = import.meta.env.VITE_APP_BASE_URL || 
                   (import.meta.env.PROD ? 'https://andresdramos.github.io' : 'http://localhost:5173');
    const directLink = `${baseUrl}/ventanilla/ticket/${token}`;

    // 3. Llamar a Edge Function para enviar email
    const { data, error } = await supabase.functions.invoke('send-email-notification', {
      body: {
        ticketData: ticket,
        usuario: usuario,
        directLink: directLink
      }
    });

    if (error) {
      console.error('Error invocando Edge Function:', error);
      throw error;
    }

    console.log('Edge Function response:', data);

    return {
      success: data.success,
      token: token,
      directLink: directLink,
      emailResult: {
        success: data.success,
        messageId: data.messageId,
        to: data.to
      }
    };

  } catch (error) {
    console.error('Error enviando notificación de delegación:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export default {
  generateTicketToken,
  validateTicketToken,
  markTokenAsUsed,
  enviarNotificacionDelegacion
};
