import { useState, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config.jsx';

export const useEmployeeTickets = (codigoEmpleado) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeTicketsAsync = async () => {
      if (!codigoEmpleado) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const { data, error: fetchError } = await supabase
          .from('tickets')
          .select(`
            *,
            plantas (
              idPlanta,
              planta
            ),
            tiposSolicitud (
              idTipoSolicitud,
              tipoSolicitud
            ),
            prioridades (
              idPrioridad,
              prioridad
            ),
            atenciones (
              idAtencion,
              fechaAtencion,
              respuesta,
              usuarios (
                nombre
              )
            )
          `)
          .eq('codigoEmpleado', codigoEmpleado)
          .order('fechaCreacion', { ascending: false });

        if (fetchError) throw fetchError;

        setTickets(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching employee tickets:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeTicketsAsync();
  }, [codigoEmpleado]);

  // Función para refetch manual
  const refetch = async () => {
    if (!codigoEmpleado) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await supabase
        .from('tickets')
        .select(`
          *,
          plantas (
            idPlanta,
            planta
          ),
          tiposSolicitud (
            idTipoSolicitud,
            tipoSolicitud
          ),
          prioridades (
            idPrioridad,
            prioridad
          ),
          atenciones (
            idAtencion,
            fechaAtencion,
            respuesta,
            usuarios (
              nombre
            )
          )
        `)
        .eq('codigoEmpleado', codigoEmpleado)
        .order('fechaCreacion', { ascending: false });

      if (fetchError) throw fetchError;

      setTickets(data || []);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching employee tickets:', err);
    } finally {
      setLoading(false);
    }
  };

  // Separar tickets atendidos y sin atender
  const pendingTickets = tickets.filter(ticket => 
    !ticket.atenciones || ticket.atenciones.length === 0
  );
  
  const resolvedTickets = tickets.filter(ticket => 
    ticket.atenciones && ticket.atenciones.length > 0
  );

  return {
    tickets,
    pendingTickets,
    resolvedTickets,
    loading,
    error,
    refetch
  };
};

export default useEmployeeTickets;
