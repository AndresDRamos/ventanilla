// Servicio de notificaciones por email
// Sistema con Resend + Edge Functions (profesional)

import { supabase } from '../supabase/supabase.config.jsx';
import { TicketEmailHTML } from '../components/EmailBody.jsx';

/**
 * Genera         notificationType: 'nuevo' // Para distinguir tipos de notificación
      }
    });

    if (error) {
      console.error('Error invocando Edge Function:', error);
      throw error;
    }

    return {
      success: data.success,o para acceso directo al ticket
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
        idTicket: idTicket,
        idUsuario: idUsuario,
        fecha_expiracion: fechaExpiracion.toISOString(),
        bActivo: true
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
      .eq('bActivo', true)
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
 * Desactiva un token
 * @param {string} token - Token a desactivar
 */
export const deactivateToken = async (token) => {
  try {
    const { error } = await supabase
      .from('ticket_tokens')
      .update({ bActivo: false })
      .eq('token', token);

    if (error) throw error;
  } catch (error) {
    console.error('Error desactivando token:', error);
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
    // 1. Generar token de acceso directo
    const token = await generateTicketToken(ticket.idTicket, usuario.idUsuario);
    
    // 2. Construir enlace directo
    const baseUrl = import.meta.env.VITE_APP_BASE_URL || 
                   (import.meta.env.PROD ? 'https://andresdramos.github.io' : 'http://localhost:5173');
    const directLink = `${baseUrl}/ventanilla/ticket/${token}`;

    // 3. Obtener fecha de creación del ticket desde seguimientos
    const { data: fechaCreacionData, error: fechaError } = await supabase
      .from('seguimientos')
      .select('fecha')
      .eq('idTicket', ticket.idTicket)
      .eq('idEstado', 1)
      .order('fecha', { ascending: true })
      .limit(1)
      .single();

    let fechaCreacion = 'Fecha no disponible';
    if (fechaCreacionData && !fechaError) {
      fechaCreacion = new Date(fechaCreacionData.fecha).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    // 4. Construir mensaje HTML para el email usando el componente
    const emailHTML = TicketEmailHTML({
      ticket: ticket,
      usuario: usuario,
      directLink: directLink,
      fechaCreacion: fechaCreacion,
      tipo: 'delegado'
    });

    // 5. Llamar al endpoint ASP.NET interno para enviar email
    const emailEndpoint = import.meta.env.DEV 
      ? '/api/email'  // Usa el proxy de Vite en desarrollo
      : 'https://cors-anywhere.herokuapp.com/http://172.17.201.2/SendEmail.aspx';  // Proxy CORS en producción

    const emailResponse = await fetch(emailEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinatario: usuario.correo,
        asunto: `Ticket Delegado para Atención - #${ticket.idTicket}`,
        mensaje: emailHTML
      })
    });

    const emailResult = await emailResponse.json();

    if (!emailResult.success) {
      throw new Error(emailResult.error || 'Error enviando email');
    }

    return {
      success: true,
      token: token,
      directLink: directLink,
      emailResult: {
        success: true,
        messageId: 'internal-email-' + Date.now(),
        to: usuario.correo
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

/**
 * Envía notificación por email cuando se crea un ticket nuevo
 * @param {Object} ticket - Información del ticket
 * @param {Object} usuario - Usuario administrador asignado
 * @returns {Promise<Object>} Resultado del envío
 */
export const enviarNotificacionTicketNuevo = async (ticket, usuario) => {
  try {
    // 1. Generar token de acceso directo
    const token = await generateTicketToken(ticket.idTicket, usuario.idUsuario);
    
    // 2. Construir enlace directo
    const baseUrl = import.meta.env.VITE_APP_BASE_URL || 
                   (import.meta.env.PROD ? 'https://andresdramos.github.io' : 'http://localhost:5173');
    const directLink = `${baseUrl}/ventanilla/ticket/${token}`;

    // 3. Obtener fecha de creación del ticket desde seguimientos
    const { data: fechaCreacionData, error: fechaError } = await supabase
      .from('seguimientos')
      .select('fecha')
      .eq('idTicket', ticket.idTicket)
      .eq('idEstado', 1)
      .order('fecha', { ascending: true })
      .limit(1)
      .single();

    let fechaCreacion = 'Fecha no disponible';
    if (fechaCreacionData && !fechaError) {
      fechaCreacion = new Date(fechaCreacionData.fecha).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    // 4. Construir mensaje HTML para el email usando el componente
    const emailHTML = TicketEmailHTML({
      ticket: ticket,
      usuario: usuario,
      directLink: directLink,
      fechaCreacion: fechaCreacion,
      tipo: 'nuevo'
    });

    // 5. Llamar al endpoint ASP.NET interno para enviar email
    const emailEndpoint = import.meta.env.DEV 
      ? '/api/email'  // Usa el proxy de Vite en desarrollo
      : 'https://cors-anywhere.herokuapp.com/http://172.17.201.2/SendEmail.aspx';  // Proxy CORS en producción

    const emailResponse = await fetch(emailEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinatario: usuario.correo,
        asunto: `Nuevo Ticket Asignado - #${ticket.idTicket}`,
        mensaje: emailHTML
      })
    });

    const emailResult = await emailResponse.json();

    if (!emailResult.success) {
      throw new Error(emailResult.error || 'Error enviando email');
    }

    return {
      success: true,
      token: token,
      directLink: directLink,
      emailResult: {
        success: true,
        messageId: 'internal-email-' + Date.now(),
        to: usuario.correo
      }
    };

  } catch (error) {
    console.error('Error enviando notificación de ticket nuevo:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export default {
  generateTicketToken,
  validateTicketToken,
  deactivateToken,
  enviarNotificacionDelegacion,
  enviarNotificacionTicketNuevo
};
