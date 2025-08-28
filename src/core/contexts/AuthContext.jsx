import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { supabase } from '../../supabase/supabase.config.jsx';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
      setEmployeeData(null); // Limpiar datos de empleado si existen
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.removeItem('employeeData');

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

  // Obtener usuario actual
  const getCurrentUser = useCallback(() => {
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
  }, []);

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

  // Inicializar al cargar el provider
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const value = {
    user,
    employeeData,
    loading,
    adminLogin,
    employeeLogin,
    logout,
    getCurrentUser,
    updateEmployeeData,
    // Helper para obtener usuario actual (admin o empleado)
    currentUser: user || employeeData,
    isAuthenticated: !!(user || employeeData),
    isAdmin: !!user,
    isEmployee: !!employeeData
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};

// Mantener compatibilidad con el hook anterior
export const useAppAuth = useAuth;

export default AuthContext;
