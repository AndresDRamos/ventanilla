import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config.jsx';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true); // Para la carga inicial
  const [loading, setLoading] = useState(false); // Para operaciones de login
  const [user, setUser] = useState(null);
  const [employeeData, setEmployeeData] = useState(null);
  const [authError, setAuthError] = useState(null); // Nuevo estado para errores persistentes

  // Login de administrador
  const adminLogin = async (usuario, contraseña) => {
    setAuthError(null); // Limpiar errores previos
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('usuarios')
        .select('idUsuario, nombre, usuario, correo, idRol')
        .eq('usuario', usuario)
        .eq('contraseña', contraseña)
        .single();

      if (error) {
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
        idUsuario: data.idUsuario,
        nombre: data.nombre,
        usuario: data.usuario,
        correo: data.correo,
        idRol: data.idRol,
        rol: 'Administrador',
        type: 'admin'
      };

      setUser(userData);
      setEmployeeData(null); // Limpiar datos de empleado si existen
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.removeItem('employeeData');

      return { success: true, user: userData };

    } catch (error) {
      setAuthError(error.message); // Guardar error en el contexto
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Login de empleado
  const employeeLogin = useCallback((data) => {
    const employeeUser = {
      id: data.idEmpleado,
      idEmpleado: data.idEmpleado,
      codigoEmpleado: data.codigoEmpleado,
      empleado: data.empleado,
      idPlanta: data.idPlanta,
      planta: data.planta,
      idEsquemaPago: data.idEsquemaPago || null,
      type: 'employee'
    };

    setEmployeeData(employeeUser);
    setUser(null); // Limpiar datos de admin si existen
    localStorage.setItem('employeeData', JSON.stringify(employeeUser));
    localStorage.removeItem('user');
    
    return { success: true, employee: employeeUser };
  }, []);

  // Logout general
  const logout = useCallback(() => {
    setUser(null);
    setEmployeeData(null);
    localStorage.removeItem('user');
    localStorage.removeItem('employeeData');
  }, []);

  // Auto-login para admin (usado desde enlaces de tickets)
  const adminAutoLogin = useCallback(async (userData) => {
    try {
      setLoading(true);

      const adminUser = {
        id: userData.idUsuario,
        idUsuario: userData.idUsuario,
        nombre: userData.nombre,
        usuario: userData.usuario || userData.correo, // Usar correo como usuario si no tiene campo usuario
        correo: userData.correo,
        idRol: userData.idRol,
        rol: 'Administrador',
        type: 'admin'
      };

      setUser(adminUser);
      setEmployeeData(null);
      localStorage.setItem('user', JSON.stringify(adminUser));
      localStorage.removeItem('employeeData');
      
      return { success: true, user: adminUser };
    } catch (error) {
      console.error('Error en auto-login:', error);
      setAuthError('Error en autenticación automática');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  // Obtener usuario actual
  const getCurrentUser = () => {
    try {
      const savedUser = localStorage.getItem('user');
      const savedEmployee = localStorage.getItem('employeeData');
      
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setEmployeeData(null);
        return userData;
      }
      
      if (savedEmployee) {
        const employeeData = JSON.parse(savedEmployee);
        setEmployeeData(employeeData);
        setUser(null);
        return employeeData;
      }
      
    } catch (error) {
      console.error('Error al obtener usuario guardado:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('employeeData');
    }
    return null;
  };

  // Actualizar datos del empleado
  const updateEmployeeData = useCallback((updates) => {
    if (employeeData) {
      const updatedEmployee = { ...employeeData, ...updates };
      setEmployeeData(updatedEmployee);
      localStorage.setItem('employeeData', JSON.stringify(updatedEmployee));
      return updatedEmployee;
    }
    return null;
  }, [employeeData]);

  // Función para limpiar errores
  const clearAuthError = useCallback(() => {
    setAuthError(null);
  }, []);

  // Inicializar al cargar el provider SOLO UNA VEZ
  useEffect(() => {
    getCurrentUser();
    setInitializing(false); // Terminar inicialización
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const value = {
    user,
    employeeData,
    loading,
    initializing,
    authError,
    adminLogin,
    adminAutoLogin,
    employeeLogin,
    logout,
    getCurrentUser,
    updateEmployeeData,
    clearAuthError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAppAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAppAuth debe usarse dentro de AuthProvider');
  }
  return context;
};
