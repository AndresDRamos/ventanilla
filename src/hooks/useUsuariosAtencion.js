import { useState, useCallback } from 'react';
import { supabase } from '../supabase/supabase.config';

// Hook para obtener información de usuarios que atendieron tickets
export const useUsuariosAtencion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para obtener el usuario que atendió un ticket específico
  const obtenerUsuarioQueAtendio = useCallback(async (idTicket, idEstado = null) => {
    try {
      setLoading(true);
      setError(null);

      // Determinar qué estado buscar basado en el estado del ticket
      let estadoBuscado = 3; // Por defecto buscar "Atendido"
      if (idEstado === 5) {
        estadoBuscado = 5; // Para tickets cancelados, buscar "Cancelado"
      } else if (idEstado === 3) {
        estadoBuscado = 3; // Para tickets atendidos, buscar "Atendido"
      }

      // Buscar el seguimiento más reciente del estado correspondiente
      const { data: seguimiento, error: seguimientoError } = await supabase
        .from('seguimientos')
        .select(`
          idUsuario,
          fecha,
          usuarios (
            nombre
          )
        `)
        .eq('idTicket', idTicket)
        .eq('idEstado', estadoBuscado)
        .order('fecha', { ascending: false })
        .limit(1)
        .single();

      if (seguimientoError) {
        console.error('Error obteniendo seguimiento:', seguimientoError);
        return null;
      }

      if (!seguimiento || !seguimiento.usuarios) {
        return null;
      }

      return {
        nombre: seguimiento.usuarios.nombre,
        fecha: seguimiento.fecha
      };

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

      // Obtener todos los seguimientos de atención para los tickets solicitados
      const { data: seguimientos, error: seguimientosError } = await supabase
        .from('seguimientos')
        .select(`
          idTicket,
          idUsuario,
          fecha,
          usuarios (
            nombre,
            apellidos
          )
        `)
        .in('idTicket', idsTickets)
        .eq('idEstado', 3)  // Estado "Atendido"
        .order('fecha', { ascending: false });

      if (seguimientosError) {
        console.error('Error obteniendo seguimientos:', seguimientosError);
        return {};
      }

      // Crear mapa de idTicket -> información del usuario
      const usuariosPorTicket = {};
      
      seguimientos.forEach(seg => {
        // Solo tomar el más reciente para cada ticket (ya están ordenados por fecha desc)
        if (!usuariosPorTicket[seg.idTicket] && seg.usuarios) {
          usuariosPorTicket[seg.idTicket] = {
            nombre: `${seg.usuarios.nombre} ${seg.usuarios.apellidos}`.trim(),
            fecha: seg.fecha
          };
        }
      });

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
