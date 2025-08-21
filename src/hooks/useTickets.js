import { useState, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config.jsx';

// Hook para obtener plantas
export const usePlantas = () => {
  const [plantas, setPlantas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlantas = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('plantas')
          .select('idPlanta, planta')
          .order('planta');

        if (error) throw error;
        setPlantas(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching plantas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlantas();
  }, []);

  return { plantas, loading, error };
};

// Hook para obtener esquemas de pago
export const useEsquemasPago = () => {
  const [esquemas, setEsquemas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEsquemas = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('esquemasPago')
          .select('idEsquemaPago, esquemaPago')
          .order('esquemaPago');

        if (error) throw error;
        setEsquemas(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching esquemas de pago:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEsquemas();
  }, []);

  return { esquemas, loading, error };
};

// Hook para obtener tipos de solicitud
export const useTiposSolicitud = () => {
  const [tipos, setTipos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTipos = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('tiposSolicitud')
          .select('idTipoSolicitud, tipoSolicitud')
          .order('tipoSolicitud');

        if (error) throw error;
        setTipos(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching tipos de solicitud:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTipos();
  }, []);

  return { tipos, loading, error };
};

// Hook para obtener prioridades
export const usePrioridades = () => {
  const [prioridades, setPrioridades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrioridades = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('prioridades')
          .select('idPrioridad, prioridad')
          .order('idPrioridad');

        if (error) throw error;
        setPrioridades(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching prioridades:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrioridades();
  }, []);

  return { prioridades, loading, error };
};

// Hook para crear tickets
export const useTickets = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createTicket = async (ticketData) => {
    try {
      setLoading(true);
      setError(null);

      // Primero obtener el usuario asignado basado en planta y tipo de solicitud
      const { data: empleadoData } = await supabase
        .from('empleados')
        .select('idPlanta')
        .eq('idEmpleado', ticketData.idEmpleado)
        .single();

      if (!empleadoData) {
        throw new Error('No se encontró información del empleado');
      }

      const { data: asignacionData } = await supabase
        .from('asignaciones')
        .select('idUsuario')
        .eq('idPlanta', empleadoData.idPlanta)
        .eq('idTipoSolicitud', ticketData.idTipoSolicitud)
        .single();

      if (!asignacionData) {
        throw new Error('No se encontró usuario asignado para esta combinación de planta y tipo de solicitud');
      }

      // Crear el ticket (sin fechaCreacion, se manejará en seguimientos)
      const { data: ticketCreado, error: ticketError } = await supabase
        .from('tickets')
        .insert([{
          idEmpleado: ticketData.idEmpleado,
          idTipoSolicitud: ticketData.idTipoSolicitud,
          descripcion: ticketData.descripcion,
          idPrioridad: ticketData.idPrioridad
        }])
        .select()
        .single();

      if (ticketError) throw ticketError;

      // Crear el primer seguimiento con estado "Sin atender" (idEstado = 1)
      const { error: seguimientoError } = await supabase
        .from('seguimientos')
        .insert([{
          idTicket: ticketCreado.idTicket,
          idUsuario: asignacionData.idUsuario,
          idEstado: 1 // Sin atender
        }]);

      if (seguimientoError) throw seguimientoError;

      return { success: true, ticket: ticketCreado };
    } catch (err) {
      setError(err.message);
      console.error('Error creating ticket:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { createTicket, loading, error };
};
