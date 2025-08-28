import { useState, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config.jsx';

export const useEmployeeTickets = (idEmpleado) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeTicketsAsync = async () => {
      if (!idEmpleado) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const { data, error: fetchError } = await supabase
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
              respuesta,
              calificacion,
              comentario,
              usuarios (
                nombre
              )
            ),
            seguimientos (
              idSeguimiento,
              fecha,
              idEstado,
              estados (
                idEstado,
                estado
              ),
              usuarios (
                idUsuario,
                nombre
              )
            )
          `)
          .eq('idEmpleado', idEmpleado)
          .order('idTicket', { ascending: false });

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
  }, [idEmpleado]);

  // Función para refetch manual
  const refetch = async () => {
    if (!idEmpleado) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await supabase
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
            respuesta,
            calificacion,
            comentario,
            usuarios (
              nombre
            )
          ),
          seguimientos (
            idSeguimiento,
            fecha,
            idEstado,
            estados (
              idEstado,
              estado
            ),
            usuarios (
              idUsuario,
              nombre
            )
          )
        `)
        .eq('idEmpleado', idEmpleado)
        .order('idTicket', { ascending: false });

      if (fetchError) throw fetchError;

      setTickets(data || []);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching employee tickets:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para calificar un ticket
  const calificarTicket = async (idTicket, calificacion, comentario = '') => {
    try {
      setLoading(true);
      setError(null);

      // Primero verificar si existe una atención para este ticket
      const { data: atencionesExistentes, error: consultaError } = await supabase
        .from('atenciones')
        .select('*')
        .eq('idTicket', idTicket);

      if (consultaError) {
        throw new Error(`Error consultando atenciones: ${consultaError.message}`);
      }

      if (!atencionesExistentes || atencionesExistentes.length === 0) {
        throw new Error(`No se encontró ninguna atención previa para el ticket ${idTicket}. El ticket debe haber sido atendido antes de poder calificarlo.`);
      }

      // 1. Actualizar el estado del ticket a 4 (cerrado)
      const { error: updateTicketError } = await supabase
        .from('tickets')
        .update({ idEstado: 4 })
        .eq('idTicket', idTicket);

      if (updateTicketError) {
        throw new Error(`Error actualizando ticket: ${updateTicketError.message}`);
      }

      // 2. Insertar seguimiento con estado 4 (cerrado)
      const { error: insertSeguimientoError } = await supabase
        .from('seguimientos')
        .insert({
          idTicket: idTicket,
          idEstado: 4,
          fecha: new Date().toISOString()
        });

      if (insertSeguimientoError) {
        throw new Error(`Error insertando seguimiento: ${insertSeguimientoError.message}`);
      }

      // 3. Actualizar la atención con la calificación y comentario
      const idAtencionAActualizar = atencionesExistentes[0].idAtencion;
      const { data: updateData, error: updateAtencionError } = await supabase
        .from('atenciones')
        .update({
          calificacion: calificacion,
          comentario: comentario
        })
        .eq('idAtencion', idAtencionAActualizar)
        .select();

      if (updateAtencionError) {
        throw new Error(`Error actualizando atención: ${updateAtencionError.message}`);
      }

      if (!updateData || updateData.length === 0) {
        throw new Error('No se pudo actualizar la atención. El registro pudo haber sido modificado por otra transacción.');
      }

      // Recargar tickets después de la calificación
      await refetch();
      
      return { success: true, message: 'Calificación enviada correctamente' };
      
    } catch (err) {
      const errorMessage = err.message || 'Error desconocido al calificar ticket';
      setError(errorMessage);
      return { success: false, error: errorMessage };
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
    refetch,
    calificarTicket
  };
};

export default useEmployeeTickets;
