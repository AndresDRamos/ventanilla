import { useState } from 'react';
import { supabase } from '../supabase/supabase.config.jsx';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (usuario, contraseña) => {
    try {
      setLoading(true);
      
      // Primero intentamos una consulta simple sin JOIN
      const { data, error } = await supabase
        .from('usuarios')
        .select('idUsuario, nombre, usuario, correo, idRol')
        .eq('usuario', usuario)
        .eq('contraseña', contraseña)
        .single(); // Esperamos solo un resultado

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

      // Guardar usuario en localStorage y estado
      const userData = {
        id: data.idUsuario,
        nombre: data.nombre,
        usuario: data.usuario,
        correo: data.correo,
        idRol: data.idRol,
        rol: 'Usuario' // Por ahora rol fijo hasta arreglar la relación
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

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const getCurrentUser = () => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        return userData;
      }
    } catch (error) {
      console.error('Error al obtener usuario guardado:', error);
      localStorage.removeItem('user');
    }
    return null;
  };

  return {
    user,
    loading,
    login,
    logout,
    getCurrentUser
  };
};
