import { useState, useCallback } from 'react';
import { supabase } from '../../../services/api/client';
import { handleSupabaseError } from '../../../services/api/client';

/**
 * Hook para manejar el login de empleados
 * Incluye búsqueda y registro automático de empleados
 */
export const useEmployeeAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Buscar empleado por código
  const findEmployeeByCode = useCallback(async (codigoEmpleado) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('empleados')
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
        .eq('codigoEmpleado', codigoEmpleado)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // Empleado no encontrado
          return { success: true, employee: null };
        }
        throw error;
      }

      return { success: true, employee: data };
    } catch (err) {
      const errorMessage = handleSupabaseError(err, 'searching employee');
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Crear nuevo empleado
  const createEmployee = useCallback(async (employeeData) => {
    const { codigoEmpleado, nombre, idPlanta, idEsquemaPago } = employeeData;
    
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('empleados')
        .insert([{
          codigoEmpleado,
          nombre,
          idPlanta,
          idEsquemaPago
        }])
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

      return { success: true, employee: data };
    } catch (err) {
      const errorMessage = handleSupabaseError(err, 'creating employee');
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  // Validar código de empleado
  const validateEmployeeCode = useCallback((code) => {
    if (!code.trim()) {
      return { isValid: false, error: 'Por favor, ingrese su código de empleado' };
    }

    if (!/^\d+$/.test(code)) {
      return { isValid: false, error: 'El código de empleado debe contener solo números' };
    }

    return { isValid: true };
  }, []);

  // Validar datos de registro
  const validateRegistrationData = useCallback((data) => {
    const { nombre, idPlanta, idEsquemaPago } = data;

    if (!nombre?.trim()) {
      return { isValid: false, error: 'Por favor, ingrese su nombre completo' };
    }

    if (!idPlanta) {
      return { isValid: false, error: 'Por favor, seleccione su planta' };
    }

    if (!idEsquemaPago) {
      return { isValid: false, error: 'Por favor, seleccione su esquema de pago' };
    }

    return { isValid: true };
  }, []);

  return {
    loading,
    error,
    findEmployeeByCode,
    createEmployee,
    validateEmployeeCode,
    validateRegistrationData,
    clearError: () => setError(null)
  };
};

export default useEmployeeAuth;
