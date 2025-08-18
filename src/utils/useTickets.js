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
          .order('prioridad');

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

      const { data, error } = await supabase
        .from('tickets')
        .insert([{
          codigoEmpleado: ticketData.codigoEmpleado,
          empleado: ticketData.empleado,
          idPlanta: ticketData.idPlanta,
          idEsquemaPago: ticketData.idEsquemaPago,
          idTipoSolicitud: ticketData.idTipoSolicitud,
          descripcion: ticketData.descripcion,
          idPrioridad: ticketData.idPrioridad,
          fechaCreacion: new Date().toISOString()
        }])
        .select();

      if (error) throw error;

      return { success: true, ticket: data[0] };
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
