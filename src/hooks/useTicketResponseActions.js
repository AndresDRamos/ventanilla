import { supabase } from '../supabase/supabase.config.jsx';
import { TicketEmailHTML } from '../components/EmailBody.jsx';

export const useTicketResponseActions = (ticket, token, navigate) => {
  const handleSubmitResponse = async (response, setIsSubmitting, setError, setSuccess) => {
    if (!response.trim()) {
      setError('Por favor escribe una respuesta');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      // 1. Crear atención (respuesta) con idUsuario
      const { error: atencionError } = await supabase
        .from('atenciones')
        .insert({
          idTicket: ticket.tickets.idTicket,
          idUsuario: ticket.idUsuario, // Usar idUsuario del token
          respuesta: response.trim()
        });

      if (atencionError) {
        throw new Error(`Error creando atención: ${atencionError.message}`);
      }

      // 2. Crear seguimiento (ticket atendido)
      const { error: seguimientoError } = await supabase
        .from('seguimientos')
        .insert({
          idTicket: ticket.tickets.idTicket,
          idUsuario: ticket.idUsuario, // Usar idUsuario del token
          idEstado: 3 // Atendido
        });

      if (seguimientoError) {
        throw new Error(`Error creando seguimiento: ${seguimientoError.message}`);
      }

      // 3. Actualizar estado del ticket a "atendido"
      const { error: ticketError } = await supabase
        .from('tickets')
        .update({ idEstado: 3 })
        .eq('idTicket', ticket.tickets.idTicket);

      if (ticketError) {
        throw new Error(`Error actualizando ticket: ${ticketError.message}`);
      }

      // 4. Desactivar token
      const { error: tokenError } = await supabase
        .from('ticket_tokens')
        .update({ bActivo: false })
        .eq('token', token);

      if (tokenError) {
        throw new Error(`Error desactivando token: ${tokenError.message}`);
      }

      // 5. Desactivar delegación si existe
      const { error: delegacionError } = await supabase
        .from('delegaciones')
        .update({ bActivo: false })
        .eq('idTicket', ticket.tickets.idTicket)
        .eq('idUsuario', ticket.idUsuario); // Usar idUsuario del token

      if (delegacionError) {
        // Delegación no encontrada o ya desactivada
      }

      setSuccess(true);
      
      // Redirigir después de 3 segundos
      setTimeout(() => {
        window.close();
        navigate('/');
      }, 3000);

    } catch (err) {
      console.error('Error enviando respuesta:', err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReasignTicket = async (selectedUser, setIsSubmitting, setResponseMessage, setIsSubmitted) => {
    if (!selectedUser) {
      alert('Seleccione un usuario para reasignar');
      return;
    }
    
    try {
      setIsSubmitting(true);

      // 1. Desactivar token actual
      const { error: desactivarTokenError } = await supabase
        .from('ticket_tokens')
        .update({ bActivo: false })
        .eq('token', token);

      if (desactivarTokenError) {
        throw new Error(`Error desactivando token: ${desactivarTokenError.message}`);
      }

      // 2. Obtener datos completos del ticket
      const { data: ticketCompleto, error: fetchError } = await supabase
        .from('tickets')
        .select(`
          *,
          empleados (
            nombre,
            plantas (planta)
          ),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad)
        `)
        .eq('idTicket', ticket.tickets.idTicket)
        .single();

      if (fetchError) {
        throw new Error(`Error obteniendo ticket: ${fetchError.message}`);
      }

      // 3. Obtener datos del usuario destinatario
      const { data: usuarioDestino, error: usuarioError } = await supabase
        .from('usuarios')
        .select('idUsuario, nombre, correo')
        .eq('idUsuario', selectedUser)
        .single();

      if (usuarioError) {
        throw new Error(`Error obteniendo usuario: ${usuarioError.message}`);
      }

      // 4. Crear seguimiento de reasignación (estado 2 = delegado)
      const { error: seguimientoError } = await supabase
        .from('seguimientos')
        .insert({
          idTicket: ticket.tickets.idTicket,
          idUsuario: ticket.idUsuario, // Usuario que está reasignando
          idEstado: 2 // Delegado
        });

      if (seguimientoError) {
        throw new Error(`Error creando seguimiento: ${seguimientoError.message}`);
      }

      // 5. Actualizar estado del ticket a delegado
      const { error: ticketError } = await supabase
        .from('tickets')
        .update({ idEstado: 2 })
        .eq('idTicket', ticket.tickets.idTicket);

      if (ticketError) {
        throw new Error(`Error actualizando ticket: ${ticketError.message}`);
      }

      // 6. Crear nuevo token para el usuario asignado
      const nuevoToken = crypto.randomUUID();
      const fechaExpiracion = new Date();
      fechaExpiracion.setDate(fechaExpiracion.getDate() + 7);

      const { error: tokenError } = await supabase
        .from('ticket_tokens')
        .insert({
          token: nuevoToken,
          idTicket: ticket.tickets.idTicket,
          idUsuario: selectedUser,
          fecha_expiracion: fechaExpiracion.toISOString(),
          bActivo: true
        });

      if (tokenError) {
        throw new Error(`Error creando token: ${tokenError.message}`);
      }

      // 7. Enviar notificación por email con nuevo token
      try {
        const baseUrl = import.meta.env.VITE_APP_BASE_URL || 
                       (import.meta.env.PROD ? 'https://andresdramos.github.io' : 'http://localhost:5173');
        const directLink = `${baseUrl}/ventanilla/ticket/${nuevoToken}`;

        console.log('🔄 Enviando notificación de reasignación desde ticket-response a:', usuarioDestino.nombre, usuarioDestino.correo);

        // Obtener fecha de creación del ticket desde seguimientos
        const { data: fechaCreacionData, error: fechaError } = await supabase
          .from('seguimientos')
          .select('fecha')
          .eq('idTicket', ticketCompleto.idTicket)
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

        // Generar HTML del email usando el componente
        const emailHTML = TicketEmailHTML({
          ticket: ticketCompleto,
          usuario: usuarioDestino,
          directLink: directLink,
          fechaCreacion: fechaCreacion,
          tipo: 'reasignado'
        });

        // Usar proxy en desarrollo, IP directa en producción
        const emailEndpoint = import.meta.env.DEV 
          ? '/api/email'  // Usa el proxy de Vite en desarrollo
          : 'https://cors-anywhere.herokuapp.com/http://172.17.201.2/SendEmail.aspx';  // Proxy CORS en producción

        console.log('📧 Enviando email a endpoint:', emailEndpoint);

        const emailResponse = await fetch(emailEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            destinatario: usuarioDestino.correo,
            asunto: `Ticket Reasignado para Atención - #${ticketCompleto.idTicket}`,
            mensaje: emailHTML
          })
        });

        const emailResult = await emailResponse.json();
        console.log('📨 Resultado de email de reasignación:', emailResult);

        if (!emailResult.success) {
          console.warn('⚠️ Email no enviado en reasignación:', emailResult.error);
          // No fallar la reasignación por problemas de notificación
        } else {
          console.log('✅ Email de reasignación enviado exitosamente');
        }
      } catch (notificationError) {
        console.warn('⚠️ Error en sistema de notificaciones de reasignación:', notificationError.message);
        // No fallar la reasignación por problemas de notificación
      }

      setResponseMessage('Ticket reasignado exitosamente. Se ha enviado una notificación al usuario asignado.');
      setIsSubmitted(true);
      
      // Redirigir después de 3 segundos
      setTimeout(() => {
        window.close();
        navigate('/');
      }, 3000);

    } catch (error) {
      console.error('Error reasignando ticket:', error);
      throw new Error('Error al reasignar el ticket: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelTicket = async (response, setIsSubmitting, setResponseMessage, setIsSubmitted) => {
    if (!response.trim()) {
      alert('Debe ingresar el motivo de cancelación');
      return;
    }
    
    try {
      setIsSubmitting(true);

      // 1. Crear atención con el motivo de cancelación e idUsuario
      await supabase
        .from('atenciones')
        .insert({
          idTicket: ticket.tickets.idTicket,
          idUsuario: ticket.idUsuario, // Usuario que cancela
          respuesta: response.trim()
        });

      // 2. Crear seguimiento (ticket cancelado)
      await supabase
        .from('seguimientos')
        .insert({
          idTicket: ticket.tickets.idTicket,
          idUsuario: ticket.idUsuario, // Usuario que cancela
          idEstado: 5 // Cancelado
        });

      // 3. Actualizar estado del ticket
      await supabase
        .from('tickets')
        .update({ idEstado: 5 })
        .eq('idTicket', ticket.tickets.idTicket);

      // 4. Desactivar token
      await supabase
        .from('ticket_tokens')
        .update({ bActivo: false })
        .eq('token', token);

      setResponseMessage('Ticket cancelado exitosamente');
      setIsSubmitted(true);
      
      // Redirigir después de 3 segundos
      setTimeout(() => {
        window.close();
        navigate('/');
      }, 3000);

    } catch (error) {
      console.error('Error cancelando ticket:', error);
      throw new Error('Error al cancelar el ticket: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    handleSubmitResponse,
    handleReasignTicket,
    handleCancelTicket
  };
};
