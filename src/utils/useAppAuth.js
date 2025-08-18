import { useState, useCallback } from 'react';
import { supabase } from '../supabase/supabase.config.jsx';

export const useAppAuth = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);

  // Login de administrador
  const adminLogin = async (usuario, contraseña) => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('usuarios')
        .select('idUsuario, nombre, usuario, correo, idRol')
        .eq('usuario', usuario)
        .eq('contraseña', contraseña)
        .single();

      if (error) {
        console.error('Error de Supabase:', error);
        if (error.code === 'PGRST116') {
          throw new Error('Usuario o contraseña incorrectos');
        }
        throw new Error(`Error de base de datos: ${error.message}`);
      }

      if (!data) {
        throw new Error('Usuario o contraseña incorrectos');
      }

      const userData = {
        id: data.idUsuario,
        nombre: data.nombre,
        usuario: data.usuario,
        correo: data.correo,
        idRol: data.idRol,
        rol: 'Administrador',
        type: 'admin'
      };

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      return { success: true, user: userData };

    } catch (error) {
      console.error('Error en login:', error);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Login de empleado
  const employeeLogin = useCallback((data) => {
    console.log('Datos del empleado:', data);
    
    const employeeUser = {
      ...data,
      type: 'employee'
    };

    setEmployeeData(employeeUser);
    localStorage.setItem('employeeData', JSON.stringify(employeeUser));
    
    return { success: true, employee: employeeUser };
  }, []);

  // Logout general
  const logout = () => {
    setUser(null);
    setEmployeeData(null);
    localStorage.removeItem('user');
    localStorage.removeItem('employeeData');
  };

  // Obtener usuario actual
  const getCurrentUser = useCallback(() => {
    try {
      const savedUser = localStorage.getItem('user');
      const savedEmployee = localStorage.getItem('employeeData');
      
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        return userData;
      }
      
      if (savedEmployee) {
        const employeeData = JSON.parse(savedEmployee);
        setEmployeeData(employeeData);
        return employeeData;
      }
    } catch (error) {
      console.error('Error al obtener usuario guardado:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('employeeData');
    }
    return null;
  }, []);

  return {
    user,
    employeeData,
    loading,
    adminLogin,
    employeeLogin,
    logout,
    getCurrentUser
  };
};
