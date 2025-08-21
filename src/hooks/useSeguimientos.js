import { useState, useEffect, useCallback } from "react";
import { supabase } from "../supabase/supabase.config.jsx";

// Hook para obtener estados
export const useEstados = () => {
  const [estados, setEstados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEstados = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("estados")
          .select("idEstado, estado")
          .order("idEstado");

        if (error) throw error;
        setEstados(data || []);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching estados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEstados();
  }, []);

  return { estados, loading, error };
};

// Hook para crear seguimientos
export const useSeguimientos = () => {
  const [loading, setLoading] = useState(false);

  const crearSeguimiento = useCallback(
    async (idTicket, idUsuario, idEstado) => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("seguimientos")
          .insert({
            idTicket,
            idUsuario,
            idEstado,
          })
          .select()
          .single();

        if (error) throw error;

        return { success: true, seguimiento: data };
      } catch (err) {
        console.error("Error creating seguimiento:", err);
        return { success: false, error: err.message };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const obtenerSeguimientosPorTicket = useCallback(async (idTicket) => {
    try {
      const { data, error } = await supabase
        .from("seguimientos")
        .select(
          `
          *,
          usuarios (
            idUsuario,
            nombre
          ),
          estados (
            idEstado,
            estado
          )
        `
        )
        .eq("idTicket", idTicket)
        .order("fecha", { ascending: true });

      if (error) throw error;

      return { success: true, seguimientos: data || [] };
    } catch (err) {
      console.error("Error fetching seguimientos:", err);
      return { success: false, error: err.message };
    }
  }, []);

  return {
    crearSeguimiento,
    obtenerSeguimientosPorTicket,
    loading,
  };
};

// Hook para obtener asignaciones (reutilizable)
export const useAsignacionTicket = () => {
  const obtenerUsuarioAsignado = useCallback(
    async (idPlanta, idTipoSolicitud) => {
      try {
        const { data, error } = await supabase
          .from("asignaciones")
          .select(
            `
          idUsuario,
          usuarios (
            idUsuario,
            nombre
          )
        `
          )
          .eq("idPlanta", idPlanta)
          .eq("idTipoSolicitud", idTipoSolicitud)
          .single();

        if (error) throw error;

        return { success: true, usuario: data?.usuarios || null };
      } catch (err) {
        console.error("Error fetching asignacion:", err);
        return { success: false, error: err.message };
      }
    },
    []
  );

  return { obtenerUsuarioAsignado };
};

// Hook para migración/configuración de seguimientos
export const useSeguimientosMigration = () => {
  const [loading, setLoading] = useState(false);

  // Función para crear seguimiento inicial para tickets existentes que no lo tengan
  const crearSeguimientoInicialParaTicket = useCallback(async (ticket) => {
    try {
      setLoading(true);

      // Verificar si ya tiene seguimiento inicial
      const tieneSeguimientoInicial = ticket.seguimientos?.find(
        (s) => s.idEstado === 1
      );
      if (tieneSeguimientoInicial) {
        return { success: true, mensaje: "Ya tiene seguimiento inicial" };
      }

      // No necesitamos usar fechaCreacion, el campo fecha tiene valor por defecto en DB
      const { error } = await supabase.from("seguimientos").insert({
        idTicket: ticket.idTicket,
        idUsuario: null, // No sabemos qué usuario creó el ticket originalmente
        idEstado: 1, // Sin atender
      });

      if (error) throw error;

      return { success: true, mensaje: "Seguimiento inicial creado" };
    } catch (err) {
      console.error("Error creando seguimiento inicial:", err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    crearSeguimientoInicialParaTicket,
    loading,
  };
};
