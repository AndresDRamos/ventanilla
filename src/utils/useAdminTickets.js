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
        const { data: asignaciones } = await supabase
          .from('asignaciones')
          .select('idPlanta, idTipoSolicitud')
          .eq('idUsuario', user.id);
        
        if (asignaciones && asignaciones.length > 0) {
          // Construir condiciones OR correctamente para Supabase
          const conditions = asignaciones.map(a => 
            `and(empleados.idPlanta.eq.${a.idPlanta},idTipoSolicitud.eq.${a.idTipoSolicitud})`
          ).join(',');
          query = query.or(conditions);
        } else {
          // Si no tiene asignaciones, no puede ver ningún ticket
          setTickets([]);
          setLoading(false);
          return;
        }
      }

      // Aplicar filtros
      if (filters.planta) {
        query = query.eq('empleados.idPlanta', filters.planta);
      }
      if (filters.tipoSolicitud) {
        query = query.eq('idTipoSolicitud', filters.tipoSolicitud);
      }
      if (filters.prioridad) {
        query = query.eq('idPrioridad', filters.prioridad);
      }
      if (filters.empleado) {
        query = query.or(`empleados.codigoEmpleado.ilike.%${filters.empleado}%,empleados.nombre.ilike.%${filters.empleado}%`);
      }

      const { data, error } = await query;

      if (error) throw error;

      // Aplicar ordenamiento
      let sortedData = data || [];
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
          respuesta,
          fechaAtencion: new Date().toISOString()
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
