import { useState, useEffect, useCallback } from 'react';
import { supabase, handleSupabaseError } from '../../../services/api/client';

/**
 * Servicio para manejar usuarios administradores
 */
export const userService = {
  /**
   * Obtener todos los usuarios con filtros
   */
  async getUsers(filters = {}) {
    try {
      let query = supabase
        .from('usuarios')
        .select(`
          idUsuario,
          nombre,
          usuario,
          correo,
          idRol,
          idPlanta,
          bActivo,
          fechaRegistro,
          roles (
            idRol,
            rol
          ),
          plantas (
            idPlanta,
            planta
          )
        `);

      // Aplicar filtros
      if (filters.role) {
        query = query.eq('idRol', filters.role);
      }
      if (filters.plant) {
        query = query.eq('idPlanta', filters.plant);
      }
      if (filters.active !== undefined) {
        query = query.eq('bActivo', filters.active);
      }

      const { data, error } = await query.order('idUsuario', { ascending: false });
      
      if (error) throw error;

      return { success: true, users: data || [] };
    } catch (error) {
      const message = handleSupabaseError(error, 'get users');
      return { success: false, error: message };
    }
  },

  /**
   * Obtener usuarios disponibles para asignación por planta y rol
   */
  async getAvailableUsers({ idPlanta, idRol = 3 }) {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .select(`
          idUsuario,
          nombre,
          usuario,
          correo,
          roles (
            rol
          )
        `)
        .eq('idPlanta', idPlanta)
        .eq('idRol', idRol)
        .eq('bActivo', true)
        .order('nombre');

      if (error) throw error;

      return { success: true, users: data || [] };
    } catch (error) {
      const message = handleSupabaseError(error, 'get available users');
      return { success: false, error: message };
    }
  },

  /**
   * Crear nuevo usuario
   */
  async createUser(userData) {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .insert([{
          ...userData,
          bActivo: true
        }])
        .select(`
          idUsuario,
          nombre,
          usuario,
          correo,
          idRol,
          idPlanta,
          bActivo,
          roles (
            rol
          ),
          plantas (
            planta
          )
        `)
        .single();

      if (error) throw error;

      return { success: true, user: data };
    } catch (error) {
      const message = handleSupabaseError(error, 'create user');
      return { success: false, error: message };
    }
  },

  /**
   * Actualizar usuario existente
   */
  async updateUser(userId, updates) {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .update(updates)
        .eq('idUsuario', userId)
        .select(`
          idUsuario,
          nombre,
          usuario,
          correo,
          idRol,
          idPlanta,
          bActivo,
          roles (
            rol
          ),
          plantas (
            planta
          )
        `)
        .single();

      if (error) throw error;

      return { success: true, user: data };
    } catch (error) {
      const message = handleSupabaseError(error, 'update user');
      return { success: false, error: message };
    }
  },

  /**
   * Activar/desactivar usuario
   */
  async toggleUserStatus(userId, active) {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .update({ bActivo: active })
        .eq('idUsuario', userId)
        .select('idUsuario, nombre, bActivo')
        .single();

      if (error) throw error;

      return { success: true, user: data };
    } catch (error) {
      const message = handleSupabaseError(error, 'toggle user status');
      return { success: false, error: message };
    }
  }
};

/**
 * Hook para manejar usuarios
 */
export const useUsers = (filters = {}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await userService.getUsers(filters);
      
      if (result.success) {
        setUsers(result.users);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    loading,
    error,
    refetch: fetchUsers,
    clearError: () => setError(null)
  };
};

/**
 * Hook para usuarios disponibles para asignación
 */
export const useAvailableUsers = ({ idPlanta, idRol = 3 }) => {
  const [availableUsers, setAvailableUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAvailableUsers = useCallback(async () => {
    if (!idPlanta) return;

    try {
      setLoading(true);
      setError(null);

      const result = await userService.getAvailableUsers({ idPlanta, idRol });
      
      if (result.success) {
        setAvailableUsers(result.users);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [idPlanta, idRol]);

  useEffect(() => {
    fetchAvailableUsers();
  }, [fetchAvailableUsers]);

  return {
    availableUsers,
    loading,
    error,
    refetch: fetchAvailableUsers,
    clearError: () => setError(null)
  };
};

/**
 * Hook para acciones de usuario
 */
export const useUserActions = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const result = await userService.createUser(userData);
      
      if (result.success) {
        return { success: true, user: result.user };
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

  const updateUser = async (userId, updates) => {
    try {
      setLoading(true);
      setError(null);

      const result = await userService.updateUser(userId, updates);
      
      if (result.success) {
        return { success: true, user: result.user };
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

  const toggleUserStatus = async (userId, active) => {
    try {
      setLoading(true);
      setError(null);

      const result = await userService.toggleUserStatus(userId, active);
      
      if (result.success) {
        return { success: true, user: result.user };
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
    createUser,
    updateUser,
    toggleUserStatus,
    clearError: () => setError(null)
  };
};

export default useUsers;
