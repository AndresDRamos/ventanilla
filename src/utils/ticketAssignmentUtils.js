import { supabase } from '../supabase/supabase.config.jsx';

/**
 * Obtiene el usuario actualmente asignado a un ticket basado en los tokens activos
 * Con fallback silencioso a asignaciones originales
 * @param {number} idTicket - ID del ticket
 * @returns {Promise<string>} - Nombre del usuario asignado o "No disponible"
 */
export const getUsuarioAsignadoActual = async (idTicket) => {
  try {
    const { data, error } = await supabase
      .from('ticket_tokens')
      .select(`
        usuarios (
          nombre
        )
      `)
      .eq('idTicket', idTicket)
      .eq('bActivo', true)
      .single();

    if (!error && data?.usuarios?.nombre) {
      return data.usuarios.nombre;
    }

    // Fallback silencioso: buscar en asignaciones originales
    const { data: asignacionData } = await supabase
      .from('asignaciones')
      .select(`
        usuarios (
          nombre
        )
      `)
      .eq('idTicket', idTicket)
      .single();

    return asignacionData?.usuarios?.nombre || "No disponible";
  } catch (error) {
    // Fallback silencioso sin mostrar error
    return "No disponible";
  }
};

/**
 * Obtiene múltiples usuarios asignados para una lista de tickets
 * Con fallback silencioso a asignaciones originales
 * @param {Array} tickets - Array de tickets con idTicket
 * @returns {Promise<Object>} - Objeto con idTicket como key y nombre de usuario como value
 */
export const getUsuariosAsignadosMultiples = async (tickets) => {
  try {
    const ticketIds = tickets.map(t => t.idTicket);
    
    const { data, error } = await supabase
      .from('ticket_tokens')
      .select(`
        idTicket,
        usuarios (
          nombre
        )
      `)
      .in('idTicket', ticketIds)
      .eq('bActivo', true);

    const asignaciones = {};

    if (!error && data) {
      // Crear un mapa de idTicket -> nombre de usuario desde tokens
      data.forEach(token => {
        if (token.usuarios?.nombre) {
          asignaciones[token.idTicket] = token.usuarios.nombre;
        }
      });
    }

    // Para tickets sin token activo, buscar en asignaciones originales (silencioso)
    const ticketsSinToken = tickets.filter(ticket => !asignaciones[ticket.idTicket]);
    
    if (ticketsSinToken.length > 0) {
      const ticketIdsSinToken = ticketsSinToken.map(t => t.idTicket);
      
      const { data: asignacionesData } = await supabase
        .from('asignaciones')
        .select(`
          idTicket,
          usuarios (
            nombre
          )
        `)
        .in('idTicket', ticketIdsSinToken);

      asignacionesData?.forEach(asignacion => {
        if (asignacion.usuarios?.nombre) {
          asignaciones[asignacion.idTicket] = asignacion.usuarios.nombre;
        }
      });
    }

    // Asegurar que todos los tickets tengan un valor
    tickets.forEach(ticket => {
      if (!asignaciones[ticket.idTicket]) {
        asignaciones[ticket.idTicket] = "No disponible";
      }
    });

    return asignaciones;
  } catch (error) {
    // Fallback silencioso
    const fallbackAsignaciones = {};
    tickets.forEach(ticket => {
      fallbackAsignaciones[ticket.idTicket] = "No disponible";
    });
    return fallbackAsignaciones;
  }
};
