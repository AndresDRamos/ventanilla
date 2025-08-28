import { useState, useCallback } from 'react';
import { supabase } from '../supabase/supabase.config';

// Hook para obtener información de usuarios que atendieron tickets
export const useUsuariosAtencion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para obtener el usuario que atendió un ticket específico
  const obtenerUsuarioQueAtendio = useCallback(async (idTicket, _idEstado = null) => {
    try {
      setLoading(true);
      setError(null);

      // Validación del idTicket
      if (!idTicket || isNaN(parseInt(idTicket))) {
        return null;
      }

      // PRIMERA OPCIÓN: Buscar el idUsuario en la tabla atenciones
      const { data: atencion, error: atencionError } = await supabase
        .from('atenciones')
        .select(`
          idUsuario,
          usuarios (
            nombre
          )
        `)
        .eq('idTicket', parseInt(idTicket))
        .limit(1)
        .maybeSingle(); // Cambiar a maybeSingle() para tickets sin atenciones

      if (!atencionError && atencion?.usuarios?.nombre) {
        return {
          nombre: atencion.usuarios.nombre,
          fecha: null // Las atenciones no tienen fecha directa
        };
      }

      // SEGUNDA OPCIÓN: Fallback al usuario original del ticket 
      // Primero obtenemos el ticket para saber el idEmpleado y idTipoSolicitud
      const { data: ticketInfo, error: ticketError } = await supabase
        .from('tickets')
        .select('idEmpleado, idTipoSolicitud')
        .eq('idTicket', idTicket)
        .maybeSingle();

      if (!ticketError && ticketInfo) {
        // Luego obtenemos el idPlanta del empleado
        const { data: empleado, error: empleadoError } = await supabase
          .from('empleados')
          .select('idPlanta')
          .eq('idEmpleado', ticketInfo.idEmpleado)
          .maybeSingle();

        if (!empleadoError && empleado) {
          // Finalmente obtenemos el usuario asignado desde asignaciones
          const { data: asignacion, error: asignacionError } = await supabase
            .from('asignaciones')
            .select(`
              usuarios (
                nombre
              )
            `)
            .eq('idTipoSolicitud', ticketInfo.idTipoSolicitud)
            .eq('idPlanta', empleado.idPlanta)
            .maybeSingle();

          if (!asignacionError && asignacion?.usuarios?.nombre) {
            return {
              nombre: asignacion.usuarios.nombre,
              fecha: null
            };
          }
        }
      }

      return null;

    } catch (err) {
      console.error('Error en obtenerUsuarioQueAtendio:', err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Función para obtener usuarios que atendieron múltiples tickets
  const obtenerUsuariosQueAtendieron = useCallback(async (idsTickets) => {
    if (!idsTickets || idsTickets.length === 0) return {};

    try {
      setLoading(true);
      setError(null);

      // PRIMERA OPCIÓN: Obtener usuarios desde atenciones
      const { data: atenciones, error: atencionesError } = await supabase
        .from('atenciones')
        .select(`
          idTicket,
          idUsuario,
          usuarios (
            nombre
          )
        `)
        .in('idTicket', idsTickets);

      const usuariosPorTicket = {};
      
      if (!atencionesError && atenciones) {
        atenciones.forEach(atencion => {
          if (atencion.usuarios?.nombre) {
            usuariosPorTicket[atencion.idTicket] = {
              nombre: atencion.usuarios.nombre,
              fecha: null
            };
          }
        });
      }

      // SEGUNDA OPCIÓN: Para tickets sin atención, usar usuario original
      const ticketsSinAtencion = idsTickets.filter(id => !usuariosPorTicket[id]);
      
      if (ticketsSinAtencion.length > 0) {
        // Obtener información básica de los tickets
        const { data: tickets, error: ticketsError } = await supabase
          .from('tickets')
          .select('idTicket, idEmpleado, idTipoSolicitud')
          .in('idTicket', ticketsSinAtencion);

        if (!ticketsError && tickets) {
          // Para cada ticket, obtener el usuario asignado
          for (const ticket of tickets) {
            // Obtener idPlanta del empleado
            const { data: empleado, error: empleadoError } = await supabase
              .from('empleados')
              .select('idPlanta')
              .eq('idEmpleado', ticket.idEmpleado)
              .maybeSingle();

            if (!empleadoError && empleado) {
              // Obtener usuario asignado desde asignaciones
              const { data: asignacion, error: asignacionError } = await supabase
                .from('asignaciones')
                .select(`
                  usuarios (
                    nombre
                  )
                `)
                .eq('idTipoSolicitud', ticket.idTipoSolicitud)
                .eq('idPlanta', empleado.idPlanta)
                .maybeSingle();

              if (!asignacionError && asignacion?.usuarios?.nombre) {
                usuariosPorTicket[ticket.idTicket] = {
                  nombre: asignacion.usuarios.nombre,
                  fecha: null
                };
              }
            }
          }
        }
      }

      return usuariosPorTicket;

    } catch (err) {
      console.error('Error en obtenerUsuariosQueAtendieron:', err);
      setError(err.message);
      return {};
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    obtenerUsuarioQueAtendio,
    obtenerUsuariosQueAtendieron,
    loading,
    error
  };
};

export default useUsuariosAtencion;
