import { useState, useEffect, useCallback } from 'react';
import { ticketService } from '../services/ticketService';
import { useAuth } from '../../../core/contexts/AuthContext';

/**
 * Hook principal para manejar tickets
 */
export const useTickets = (filters = {}) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, employeeData } = useAuth();

  const currentUser = user || employeeData;

  const fetchTickets = useCallback(async () => {
    if (!currentUser) return;

    try {
      setLoading(true);
      setError(null);

      const result = await ticketService.getTickets({
        userId: currentUser.id,
        userRole: currentUser.idRol || null,
        filters
      });

      if (result.success) {
        setTickets(result.tickets);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [currentUser, filters]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  const createTicket = async (ticketData) => {
    try {
      const result = await ticketService.createTicket({
        ...ticketData,
        idEmpleado: employeeData?.idEmpleado
      });

      if (result.success) {
        // Agregar el nuevo ticket a la lista local
        setTickets(prev => [result.ticket, ...prev]);
        return { success: true, ticket: result.ticket };
      } else {
        return { success: false, error: result.error };
      }
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  const refreshTickets = useCallback(() => {
    fetchTickets();
  }, [fetchTickets]);

  return {
    tickets,
    loading,
    error,
    createTicket,
    refreshTickets
  };
};

/**
 * Hook para manejar acciones de tickets (responder, asignar, cancelar)
 */
export const useTicketActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const respondTicket = async (ticketId, respuesta) => {
    try {
      setLoading(true);
      setError(null);

      const result = await ticketService.respondTicket(ticketId, user.id, respuesta);
      
      if (result.success) {
        return { success: true };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (err) {
      const error = err.message;
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const reassignTicket = async (ticketId, newUserId) => {
    try {
      setLoading(true);
      setError(null);

      const result = await ticketService.reassignTicket(ticketId, newUserId);
      
      if (result.success) {
        return { success: true, assignment: result.assignment };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (err) {
      const error = err.message;
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const cancelTicket = async (ticketId, motivo) => {
    try {
      setLoading(true);
      setError(null);

      const result = await ticketService.cancelTicket(ticketId, user.id, motivo);
      
      if (result.success) {
        return { success: true };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (err) {
      const error = err.message;
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const rateTicket = async (ticketId, calificacion, comentario = '') => {
    try {
      setLoading(true);
      setError(null);

      const result = await ticketService.rateTicket(ticketId, calificacion, comentario);
      
      if (result.success) {
        return { success: true };
      } else {
        setError(result.error);
        return { success: false, error: result.error };
      }
    } catch (err) {
      const error = err.message;
      setError(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    respondTicket,
    reassignTicket,
    cancelTicket,
    rateTicket,
    clearError: () => setError(null)
  };
};

/**
 * Hook para obtener catálogos necesarios para tickets
 */
export const useTicketCatalogs = () => {
  const [catalogs, setCatalogs] = useState({
    plantas: [],
    tiposSolicitud: [],
    prioridades: [],
    estados: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await ticketService.getCatalogs();
        
        if (result.success) {
          setCatalogs(result.catalogs);
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalogs();
  }, []);

  return {
    catalogs,
    loading,
    error,
    plantas: catalogs.plantas,
    tiposSolicitud: catalogs.tiposSolicitud,
    prioridades: catalogs.prioridades,
    estados: catalogs.estados
  };
};

/**
 * Hook para filtrar tickets
 */
export const useTicketFilters = (initialFilters = {}) => {
  const [filters, setFilters] = useState(initialFilters);

  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({});
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  return {
    filters,
    updateFilter,
    clearFilters,
    resetFilters,
    setFilters
  };
};

export default useTickets;
