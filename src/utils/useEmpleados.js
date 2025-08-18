import { useState, useCallback } from "react";
import { supabase } from "../supabase/supabase.config.jsx";

export const useEmpleados = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Buscar empleado por código
  const buscarEmpleadoPorCodigo = useCallback(async (codigoEmpleado) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("empleados")
        .select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          plantas (
            idPlanta,
            planta
          )
        `)
        .eq("codigoEmpleado", codigoEmpleado)
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          // No se encontró el empleado
          return { success: true, empleado: null };
        }
        throw error;
      }

      return { success: true, empleado: data };
    } catch (err) {
      console.error("Error al buscar empleado:", err);
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  // Crear nuevo empleado
  const crearEmpleado = useCallback(async (codigoEmpleado, nombre, idPlanta) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("empleados")
        .insert([
          {
            codigoEmpleado,
            nombre,
            idPlanta,
          },
        ])
        .select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          plantas (
            idPlanta,
            planta
          )
        `)
        .single();

      if (error) throw error;

      return { success: true, empleado: data };
    } catch (err) {
      console.error("Error al crear empleado:", err);
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  // Obtener empleado por ID
  const obtenerEmpleadoPorId = useCallback(async (idEmpleado) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("empleados")
        .select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          plantas (
            idPlanta,
            planta
          )
        `)
        .eq("idEmpleado", idEmpleado)
        .single();

      if (error) throw error;

      return { success: true, empleado: data };
    } catch (err) {
      console.error("Error al obtener empleado:", err);
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    buscarEmpleadoPorCodigo,
    crearEmpleado,
    obtenerEmpleadoPorId,
  };
};
