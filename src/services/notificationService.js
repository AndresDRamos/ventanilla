import { supabase } from '../supabase/supabase.config.jsx';
import { TicketEmailHTML, EmployeeResponseEmailHTML } from '../components/EmailBody.jsx';

/**
 * Genera un token único para acceso directo a un ticket
 * @param {number} idTicket - ID del ticket
 * @param {number} idUsuario - ID del usuario admin destinatario (opcional)
 * @param {number} idEmpleado - ID del empleado destinatario (opcional)
 * @returns {Promise<string>} Token generado
 */
export const generateTicketToken = async (idTicket, idUsuario = null, idEmpleado = null) => {
  try {
    // Verificar que se proporcione al menos un ID
    if (!idUsuario && !idEmpleado) {
      throw new Error('Debe proporcionar idUsuario o idEmpleado');
    }

    // Generar token único
    const token = crypto.randomUUID();
    
    // Fecha de expiración: 7 días desde ahora
    const fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + 7);

    // Construir objeto para insertar
    const tokenData = {
      token,
      idTicket: idTicket,
      fecha_expiracion: fechaExpiracion.toISOString(),
      bActivo: true
    };

    // Agregar el campo correspondiente según el tipo de destinatario
    if (idEmpleado) {
      tokenData.idEmpleado = idEmpleado;
    } else if (idUsuario) {
      tokenData.idUsuario = idUsuario;
    }

    // Guardar token en la base de datos
    const { error } = await supabase
      .from('ticket_tokens')
      .insert(tokenData);

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
          estados (estado),
          atenciones (respuesta, calificacion, comentario, fechaAtencion, usuarios (nombre))
        ),
        usuarios (nombre, correo),
        empleados!idEmpleado (idEmpleado, nombre, correo)
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
    const token = await generateTicketToken(ticket.idTicket, usuario.idUsuario, null);
    
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

    // 5. Llamar al endpoint correspondiente según el entorno
    const emailEndpoint = import.meta.env.DEV 
      ? '/api/email'  // Usa el proxy de Vite en desarrollo
      : import.meta.env.VITE_EMAIL_ENDPOINT || 'https://ventanilla-ezi.netlify.app/.netlify/functions/send-email';

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
    const token = await generateTicketToken(ticket.idTicket, usuario.idUsuario, null);
    
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

    // 5. Llamar al endpoint correspondiente según el entorno
    const emailEndpoint = import.meta.env.DEV 
      ? '/api/email'  // Usa el proxy de Vite en desarrollo
      : import.meta.env.VITE_EMAIL_ENDPOINT || 'https://ventanilla-ezi.netlify.app/.netlify/functions/send-email';

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

/**
 * Envía notificación por email cuando se responde un ticket (para empleados)
 * @param {Object} ticket - Información completa del ticket
 * @param {Object} empleado - Datos del empleado que creó el ticket
 * @param {Object} respuesta - Datos de la respuesta/atención
 * @returns {Promise<Object>} Resultado del envío
 */
export const enviarNotificacionRespuesta = async (ticket, empleado, _respuesta) => {
  try {
    // Verificar que el empleado tenga correo
    if (!empleado.correo) {
      console.warn('Empleado sin correo electrónico, no se envía notificación');
      return {
        success: false,
        error: 'Empleado sin correo electrónico registrado'
      };
    }

    // 🚨 DESARROLLO: Desactivar email temporalmente si el servidor no está disponible
    if (import.meta.env.DEV && import.meta.env.VITE_DISABLE_EMAIL_IN_DEV === 'true') {
      console.log('📧 [DEV] Notificación de respuesta simulada para:', empleado.correo);
      console.log('📧 [DEV] Ticket:', ticket.idTicket);
      return {
        success: true,
        message: 'Email de respuesta simulado en desarrollo',
        token: 'dev-response-token-' + Date.now()
      };
    }

    // 1. Generar token de acceso directo para que el empleado vea la respuesta
    const token = await generateTicketToken(ticket.idTicket, null, empleado.idEmpleado);
    
    // 2. Construir enlace directo para ver la respuesta
    const baseUrl = import.meta.env.VITE_APP_BASE_URL || 
                   (import.meta.env.PROD ? 'https://andresdramos.github.io' : 'http://localhost:5173');
    const directLink = `${baseUrl}/ventanilla/respuesta/${token}`;

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

    // 4. Obtener datos completos de la respuesta y quien respondió
    const { data: atencionData, error: atencionError } = await supabase
      .from('atenciones')
      .select(`
        respuesta,
        usuarios (nombre)
      `)
      .eq('idTicket', ticket.idTicket)
      .single();

    if (atencionError || !atencionData) {
      throw new Error('No se pudo obtener la información de la respuesta');
    }

    // 5. Obtener fecha de cuando se respondió (seguimiento con estado 3)
    const { data: seguimientoData, error: seguimientoError } = await supabase
      .from('seguimientos')
      .select('fecha')
      .eq('idTicket', ticket.idTicket)
      .eq('idEstado', 3)
      .order('fecha', { ascending: false })
      .limit(1)
      .single();

    let fechaRespuesta = 'Fecha no disponible';
    if (seguimientoData && !seguimientoError) {
      fechaRespuesta = new Date(seguimientoData.fecha).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    // 6. Construir mensaje HTML usando la plantilla específica para empleados
    const emailHTML = EmployeeResponseEmailHTML({
      ticket: ticket,
      empleado: empleado,
      atencion: atencionData,
      fechaCreacion: fechaCreacion,
      fechaRespuesta: fechaRespuesta,
      adminNombre: atencionData.usuarios?.nombre || 'Administrador',
      directLink: directLink
    });

    // 5. Llamar al endpoint correspondiente según el entorno
    const emailEndpoint = import.meta.env.DEV 
      ? '/api/email'  // Usa el proxy de Vite en desarrollo
      : import.meta.env.VITE_EMAIL_ENDPOINT || 'https://ventanilla-ezi.netlify.app/.netlify/functions/send-email'; // Netlify function en producción

    const emailResponse = await fetch(emailEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinatario: empleado.correo,
        asunto: `Tu Ticket Ha Sido Respondido - #${ticket.idTicket}`,
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
        messageId: 'response-email-' + Date.now(),
        to: empleado.correo
      }
    };

  } catch (error) {
    console.error('Error enviando notificación de respuesta:', error);
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
  enviarNotificacionTicketNuevo,
  enviarNotificacionRespuesta
};
