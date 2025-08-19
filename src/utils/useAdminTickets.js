import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase/supabase.config.jsx';

// Hook para obtener todos los tickets con filtros
export const useAdminTickets = (user) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTickets = useCallback(async (filters = {}) => {
    try {
      setLoading(true);
      
      let query = supabase
        .from('tickets')
        .select(`
          *,
          empleados (
            idEmpleado,
            codigoEmpleado,
            nombre,
            idPlanta,
            idEsquemaPago,
            plantas (
              idPlanta,
              planta
            )
          ),
          tiposSolicitud:idTipoSolicitud (tipoSolicitud),
          prioridades:idPrioridad (prioridad),
          atenciones (
            idAtencion,
            respuesta,
            fechaAtencion,
            usuarios:idUsuario (nombre)
          )
        `)
        .order('fechaCreacion', { ascending: false });

      // Si el usuario no es admin (rol 1), filtrar solo sus asignaciones
      if (user?.idRol !== 1) {
        console.log('Usuario no admin, obteniendo asignaciones para:', user.id);
        const { data: asignaciones } = await supabase
          .from('asignaciones')
          .select('idPlanta, idTipoSolicitud')
          .eq('idUsuario', user.id);
        
        console.log('Asignaciones encontradas:', asignaciones);
        
        if (asignaciones && asignaciones.length > 0) {
          // No podemos filtrar con OR en JOIN, así que obtenemos todos los datos primero
          // y luego filtraremos en el cliente
        } else {
          // Si no tiene asignaciones, no puede ver ningún ticket
          console.log('Usuario sin asignaciones');
          setTickets([]);
          setLoading(false);
          return;
        }
      }

      // Aplicar filtros
      if (filters.planta) {
        // Para filtros directos de planta, necesitamos hacer un sub-query
        const { data: empleadosEnPlanta } = await supabase
          .from('empleados')
          .select('idEmpleado')
          .eq('idPlanta', filters.planta);
        
        if (empleadosEnPlanta && empleadosEnPlanta.length > 0) {
          const empleadosIds = empleadosEnPlanta.map(emp => emp.idEmpleado);
          query = query.in('idEmpleado', empleadosIds);
        } else {
          // No hay empleados en esa planta
          setTickets([]);
          setLoading(false);
          return;
        }
      }
      if (filters.tipoSolicitud) {
        query = query.eq('idTipoSolicitud', filters.tipoSolicitud);
      }
      if (filters.prioridad) {
        query = query.eq('idPrioridad', filters.prioridad);
      }
      if (filters.empleado) {
        // Para filtros de empleado, también necesitamos sub-query
        const { data: empleadosFiltrados } = await supabase
          .from('empleados')
          .select('idEmpleado')
          .or(`codigoEmpleado.ilike.%${filters.empleado}%,nombre.ilike.%${filters.empleado}%`);
        
        if (empleadosFiltrados && empleadosFiltrados.length > 0) {
          const empleadosIds = empleadosFiltrados.map(emp => emp.idEmpleado);
          query = query.in('idEmpleado', empleadosIds);
        } else {
          // No hay empleados que coincidan
          setTickets([]);
          setLoading(false);
          return;
        }
      }

      const { data, error } = await query;

      if (error) throw error;

      let sortedData = data || [];

      // Aplicar filtro de asignaciones después de obtener los datos (solo para no-admin)
      if (user?.idRol !== 1) {
        const { data: asignaciones } = await supabase
          .from('asignaciones')
          .select('idPlanta, idTipoSolicitud')
          .eq('idUsuario', user.id);
        
        console.log('Filtrando tickets. Total antes del filtro:', sortedData.length);
        
        if (asignaciones && asignaciones.length > 0) {
          // Filtrar tickets basado en las asignaciones
          sortedData = sortedData.filter(ticket => {
            const matches = asignaciones.some(asignacion => 
              ticket.empleados?.idPlanta === asignacion.idPlanta && 
              ticket.idTipoSolicitud === asignacion.idTipoSolicitud
            );
            
            if (matches) {
              console.log(`Ticket ${ticket.idTicket} coincide con asignación:`, {
                ticketPlanta: ticket.empleados?.idPlanta,
                ticketTipo: ticket.idTipoSolicitud,
                asignacion: asignaciones.find(a => 
                  a.idPlanta === ticket.empleados?.idPlanta && 
                  a.idTipoSolicitud === ticket.idTipoSolicitud
                )
              });
            }
            
            return matches;
          });
          
          console.log('Tickets después del filtro de asignaciones:', sortedData.length);
        } else {
          sortedData = [];
        }
      }

      // Aplicar ordenamiento
      if (filters.sortBy === 'prioridad') {
        sortedData.sort((a, b) => a.idPrioridad - b.idPrioridad);
      } else {
        sortedData.sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion));
      }

      setTickets(sortedData);
      setError(null);
    } catch (err) {
      console.error('Error fetching tickets:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchTickets();
    }
  }, [user, fetchTickets]);

  return { tickets, loading, error, refetchTickets: fetchTickets };
};

// Hook para obtener estadísticas de tickets
export const useTicketStats = (tickets) => {
  const stats = {
    total: tickets.length,
    sinAtender: tickets.filter(t => !t.atenciones || t.atenciones.length === 0).length,
    respondidos: tickets.filter(t => t.atenciones && t.atenciones.length > 0).length
  };

  return stats;
};

// Hook para obtener asignaciones y responsables
export const useAsignaciones = () => {
  const [asignaciones, setAsignaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAsignaciones = async () => {
      try {
        const { data, error } = await supabase
          .from('asignaciones')
          .select(`
            *,
            usuarios:idUsuario (nombre),
            plantas:idPlanta (planta),
            tiposSolicitud:idTipoSolicitud (tipoSolicitud)
          `);

        if (error) throw error;
        setAsignaciones(data || []);
      } catch (err) {
        console.error('Error fetching asignaciones:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAsignaciones();
  }, []);

  const getResponsable = useCallback((idPlanta, idTipoSolicitud) => {
    const asignacion = asignaciones.find(
      a => a.idPlanta === idPlanta && a.idTipoSolicitud === idTipoSolicitud
    );
    return asignacion?.usuarios?.nombre || 'No asignado';
  }, [asignaciones]);

  return { asignaciones, loading, getResponsable };
};

// Hook para crear atenciones
export const useAtenciones = () => {
  const [loading, setLoading] = useState(false);

  const crearAtencion = useCallback(async (idTicket, idUsuario, respuesta) => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('atenciones')
        .insert({
          idTicket,
          idUsuario,
          respuesta
        })
        .select()
        .single();

      if (error) throw error;
      
      return { success: true, atencion: data };
    } catch (err) {
      console.error('Error creating atencion:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  return { crearAtencion, loading };
};
