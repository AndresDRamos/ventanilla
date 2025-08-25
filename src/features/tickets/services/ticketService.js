import { supabase, handleSupabaseError } from '../../../services/api/client';
import { tokenService } from '../../../services/token/tokenService';
import { emailService } from '../../../services/email/emailService';

/**
 * Servicio para manejar operaciones de tickets
 */
export const ticketService = {
  /**
   * Obtener tickets con filtros aplicados
   */
  async getTickets({ userId, userRole, filters = {} }) {
    try {
      let query = supabase
        .from('tickets')
        .select(`
          idTicket,
          descripcion,
          idPrioridad,
          idTipoSolicitud,
          idEmpleado,
          idEstado,
          inicio,
          fin,
          empleados (
            idEmpleado,
            codigoEmpleado,
            nombre,
            idPlanta,
            plantas (
              idPlanta,
              planta
            )
          ),
          tiposSolicitud (
            idTipoSolicitud,
            tipoSolicitud
          ),
          prioridades (
            idPrioridad,
            prioridad
          ),
          estados (
            idEstado,
            estado
          ),
          atenciones (
            idAtencion,
            respuesta,
            fecha,
            calificacion,
            comentario,
            usuarios (
              nombre
            )
          ),
          responsables!inner (
            idResponsable,
            idUsuario,
            bActivo,
            usuarios (
              nombre
            )
          )
        `);

      // Aplicar filtros por rol
      if (userRole === 2) {
        // Supervisor: solo tickets asignados a su planta y tipos de solicitud
        const { data: asignaciones } = await supabase
          .from('asignaciones')
          .select('idTipoSolicitud, idPlanta')
          .eq('idUsuario', userId);
        
        if (asignaciones?.length) {
          const conditions = asignaciones.map(a => 
            `and(idTipoSolicitud.eq.${a.idTipoSolicitud},empleados.idPlanta.eq.${a.idPlanta})`
          );
          query = query.or(conditions.join(','));
        }
      } else if (userRole === 3) {
        // Delegado: solo asignaciones activas
        query = query
          .eq('responsables.idUsuario', userId)
          .eq('responsables.bActivo', true);
      }

      // Aplicar filtros adicionales
      if (filters.estado) {
        query = query.eq('idEstado', filters.estado);
      }
      if (filters.prioridad) {
        query = query.eq('idPrioridad', filters.prioridad);
      }
      if (filters.tipoSolicitud) {
        query = query.eq('idTipoSolicitud', filters.tipoSolicitud);
      }

      const { data, error } = await query.order('inicio', { ascending: false });
      
      if (error) throw error;

      return { success: true, tickets: data || [] };
    } catch (error) {
      const message = handleSupabaseError(error, 'get tickets');
      return { success: false, error: message };
    }
  },

  /**
   * Crear nuevo ticket
   */
  async createTicket(ticketData) {
    try {
      // 1. Obtener información del empleado
      const { data: empleado, error: empleadoError } = await supabase
        .from('empleados')
        .select('idPlanta')
        .eq('idEmpleado', ticketData.idEmpleado)
        .single();

      if (empleadoError) throw empleadoError;
      if (!empleado) throw new Error('Empleado no encontrado');

      // 2. Buscar usuario asignado basado en planta y tipo de solicitud
      const { data: asignacion, error: asignacionError } = await supabase
        .from('asignaciones')
        .select(`
          idUsuario,
          usuarios (
            idUsuario,
            nombre,
            correo
          )
        `)
        .eq('idPlanta', empleado.idPlanta)
        .eq('idTipoSolicitud', ticketData.idTipoSolicitud)
        .single();

      if (asignacionError) throw asignacionError;
      if (!asignacion) {
        throw new Error('No se encontró usuario asignado para esta combinación de planta y tipo de solicitud');
      }

      // 3. Crear el ticket
      const { data: ticket, error: ticketError } = await supabase
        .from('tickets')
        .insert([{
          idEmpleado: ticketData.idEmpleado,
          idTipoSolicitud: ticketData.idTipoSolicitud,
          descripcion: ticketData.descripcion,
          idPrioridad: ticketData.idPrioridad,
          idEstado: 1 // Nuevo
        }])
        .select(`
          idTicket,
          descripcion,
          idPrioridad,
          idTipoSolicitud,
          idEmpleado,
          idEstado,
          inicio,
          empleados (
            nombre,
            codigoEmpleado
          ),
          tiposSolicitud (
            tipoSolicitud
          ),
          prioridades (
            prioridad
          )
        `)
        .single();

      if (ticketError) throw ticketError;

      // 4. Crear registro de responsable con token
      const token = tokenService.generate();
      const { error: responsableError } = await supabase
        .from('responsables')
        .insert([{
          idTicket: ticket.idTicket,
          idUsuario: asignacion.idUsuario,
          token,
          bActivo: true
        }]);

      if (responsableError) throw responsableError;

      // 5. Enviar notificación por email
      try {
        await emailService.sendTicketAssignment({
          to: asignacion.usuarios.correo,
          ticket,
          assignedUser: asignacion.usuarios,
          token
        });
      } catch (emailError) {
        console.warn('Error sending email notification:', emailError);
        // No fallar la creación del ticket por error de email
      }

      return { success: true, ticket };
    } catch (error) {
      const message = handleSupabaseError(error, 'create ticket');
      return { success: false, error: message };
    }
  },

  /**
   * Responder un ticket directamente
   */
  async respondTicket(ticketId, userId, respuesta) {
    try {
      // 1. Crear la atención
      const { error: atencionError } = await supabase
        .from('atenciones')
        .insert([{
          idTicket: ticketId,
          idUsuario: userId,
          respuesta
        }]);

      if (atencionError) throw atencionError;

      // 2. Actualizar estado del ticket
      const { error: ticketError } = await supabase
        .from('tickets')
        .update({ idEstado: 3 }) // Atendido
        .eq('idTicket', ticketId);

      if (ticketError) throw ticketError;

      // 3. Invalidar tokens activos
      const { error: tokenError } = await supabase
        .from('responsables')
        .update({ 
          bActivo: false,
          fin: new Date().toISOString()
        })
        .eq('idTicket', ticketId)
        .eq('bActivo', true);

      if (tokenError) throw tokenError;

      return { success: true };
    } catch (error) {
      const message = handleSupabaseError(error, 'respond ticket');
      return { success: false, error: message };
    }
  },

  /**
   * Reasignar un ticket a otro usuario
   */
  async reassignTicket(ticketId, newUserId) {
    try {
      // 1. Invalidar asignación actual
      const { error: invalidateError } = await supabase
        .from('responsables')
        .update({ 
          bActivo: false, 
          fin: new Date().toISOString() 
        })
        .eq('idTicket', ticketId)
        .eq('bActivo', true);

      if (invalidateError) throw invalidateError;

      // 2. Crear nueva asignación
      const token = tokenService.generate();
      const { data: newAssignment, error: assignError } = await supabase
        .from('responsables')
        .insert([{
          idTicket: ticketId,
          idUsuario: newUserId,
          token,
          bActivo: true
        }])
        .select(`
          *,
          usuarios (
            nombre,
            correo
          )
        `)
        .single();

      if (assignError) throw assignError;

      // 3. Actualizar estado del ticket
      const { error: updateError } = await supabase
        .from('tickets')
        .update({ idEstado: 2 }) // Asignado
        .eq('idTicket', ticketId);

      if (updateError) throw updateError;

      // 4. Enviar notificación por email
      try {
        await emailService.sendTicketReassignment({
          to: newAssignment.usuarios.correo,
          ticketId,
          assignedUser: newAssignment.usuarios,
          token
        });
      } catch (emailError) {
        console.warn('Error sending reassignment email:', emailError);
      }

      return { success: true, assignment: newAssignment };
    } catch (error) {
      const message = handleSupabaseError(error, 'reassign ticket');
      return { success: false, error: message };
    }
  },

  /**
   * Cancelar un ticket
   */
  async cancelTicket(ticketId, userId, motivo) {
    try {
      // 1. Crear atención con motivo de cancelación
      const { error: atencionError } = await supabase
        .from('atenciones')
        .insert([{
          idTicket: ticketId,
          idUsuario: userId,
          respuesta: `Ticket cancelado. Motivo: ${motivo}`
        }]);

      if (atencionError) throw atencionError;

      // 2. Actualizar estado del ticket
      const { error: ticketError } = await supabase
        .from('tickets')
        .update({ 
          idEstado: 5, // Cancelado
          fin: new Date().toISOString()
        })
        .eq('idTicket', ticketId);

      if (ticketError) throw ticketError;

      // 3. Invalidar tokens activos
      const { error: tokenError } = await supabase
        .from('responsables')
        .update({ 
          bActivo: false,
          fin: new Date().toISOString()
        })
        .eq('idTicket', ticketId)
        .eq('bActivo', true);

      if (tokenError) throw tokenError;

      return { success: true };
    } catch (error) {
      const message = handleSupabaseError(error, 'cancel ticket');
      return { success: false, error: message };
    }
  },

  /**
   * Calificar un ticket atendido
   */
  async rateTicket(ticketId, calificacion, comentario) {
    try {
      // 1. Actualizar la atención con la calificación
      const { error: ratingError } = await supabase
        .from('atenciones')
        .update({ calificacion, comentario })
        .eq('idTicket', ticketId);

      if (ratingError) throw ratingError;

      // 2. Cerrar el ticket
      const { error: closeError } = await supabase
        .from('tickets')
        .update({ 
          idEstado: 4, // Cerrado
          fin: new Date().toISOString()
        })
        .eq('idTicket', ticketId);

      if (closeError) throw closeError;

      return { success: true };
    } catch (error) {
      const message = handleSupabaseError(error, 'rate ticket');
      return { success: false, error: message };
    }
  },

  /**
   * Obtener catálogos (plantas, tipos de solicitud, prioridades)
   */
  async getCatalogs() {
    try {
      const [plantasResult, tiposResult, prioridadesResult, estadosResult] = await Promise.all([
        supabase.from('plantas').select('idPlanta, planta').order('planta'),
        supabase.from('tiposSolicitud').select('idTipoSolicitud, tipoSolicitud').eq('bActivo', true).order('tipoSolicitud'),
        supabase.from('prioridades').select('idPrioridad, prioridad').order('idPrioridad'),
        supabase.from('estados').select('idEstado, estado').order('idEstado')
      ]);

      return {
        success: true,
        catalogs: {
          plantas: plantasResult.data || [],
          tiposSolicitud: tiposResult.data || [],
          prioridades: prioridadesResult.data || [],
          estados: estadosResult.data || []
        }
      };
    } catch (error) {
      const message = handleSupabaseError(error, 'get catalogs');
      return { success: false, error: message };
    }
  }
};

export default ticketService;
