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
          idEsquemaPago,
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
  const crearEmpleado = useCallback(async (codigoEmpleado, nombre, idPlanta, idEsquemaPago) => {
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
            idEsquemaPago,
          },
        ])
        .select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
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
          idEsquemaPago,
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

  // Actualizar esquema de pago del empleado
  const actualizarEsquemaPago = useCallback(async (idEmpleado, idEsquemaPago) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("empleados")
        .update({ idEsquemaPago })
        .eq("idEmpleado", idEmpleado)
        .select(`
          idEmpleado,
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago,
          plantas (
            idPlanta,
            planta
          )
        `)
        .single();

      if (error) throw error;

      return { success: true, empleado: data };
    } catch (err) {
      console.error("Error al actualizar esquema de pago:", err);
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
    actualizarEsquemaPago,
  };
};
