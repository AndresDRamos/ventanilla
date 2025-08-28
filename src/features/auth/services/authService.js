import { supabase, handleSupabaseError } from '../../../services/api/client';

/**
 * Servicio para manejar operaciones de autenticación de empleados
 */
export const employeeAuthService = {
  /**
   * Buscar empleado por código
   */
  async findByCode(codigoEmpleado) {
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
          ),
          esquemasPago (
            idEsquemaPago,
            esquemaPago
          )
        `)
        .eq('codigoEmpleado', codigoEmpleado)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return { success: true, employee: null };
        }
        throw error;
      }

      return { success: true, employee: data };
    } catch (error) {
      const message = handleSupabaseError(error, 'findByCode');
      return { success: false, error: message };
    }
  },

  /**
   * Crear nuevo empleado
   */
  async create({ codigoEmpleado, nombre, idPlanta, idEsquemaPago }) {
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
          ),
          esquemasPago (
            idEsquemaPago,
            esquemaPago
          )
        `)
        .single();

      if (error) throw error;

      return { success: true, employee: data };
    } catch (error) {
      const message = handleSupabaseError(error, 'create employee');
      return { success: false, error: message };
    }
  },

  /**
   * Obtener todas las plantas disponibles
   */
  async getPlants() {
    try {
      const { data, error } = await supabase
        .from('plantas')
        .select('idPlanta, planta')
        .order('planta');

      if (error) throw error;

      return { success: true, plants: data || [] };
    } catch (error) {
      const message = handleSupabaseError(error, 'get plants');
      return { success: false, error: message };
    }
  },

  /**
   * Obtener todos los esquemas de pago disponibles
   */
  async getPaymentSchemes() {
    try {
      const { data, error } = await supabase
        .from('esquemasPago')
        .select('idEsquemaPago, esquemaPago')
        .order('esquemaPago');

      if (error) throw error;

      return { success: true, schemes: data || [] };
    } catch (error) {
      const message = handleSupabaseError(error, 'get payment schemes');
      return { success: false, error: message };
    }
  }
};

/**
 * Servicio para manejar autenticación de administradores
 */
export const adminAuthService = {
  /**
   * Login de administrador
   */
  async login(usuario, contraseña) {
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .select(`
          idUsuario, 
          nombre, 
          usuario, 
          correo, 
          idRol,
          roles (
            idRol,
            rol
          ),
          plantas (
            idPlanta,
            planta
          )
        `)
        .eq('usuario', usuario)
        .eq('contraseña', contraseña)
        .eq('bActivo', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return { success: false, error: 'Usuario o contraseña incorrectos' };
        }
        throw error;
      }

      if (!data) {
        return { success: false, error: 'Usuario o contraseña incorrectos' };
      }

      const userData = {
        id: data.idUsuario,
        nombre: data.nombre,
        usuario: data.usuario,
        correo: data.correo,
        idRol: data.idRol,
        rol: data.roles?.rol || 'Usuario',
        idPlanta: data.idPlanta,
        planta: data.plantas?.planta,
        type: 'admin'
      };

      return { success: true, user: userData };
    } catch (error) {
      const message = handleSupabaseError(error, 'admin login');
      return { success: false, error: message };
    }
  },

  /**
   * Validar token de respuesta para tickets
   */
  async validateResponseToken(token) {
    try {
      const { data, error } = await supabase
        .from('responsables')
        .select(`
          idResponsable,
          idTicket,
          idUsuario,
          bActivo,
          tickets (
            idTicket,
            descripcion,
            idEstado,
            empleados (
              nombre,
              codigoEmpleado
            ),
            tiposSolicitud (
              tipoSolicitud
            ),
            prioridades (
              prioridad
            )
          ),
          usuarios (
            idUsuario,
            nombre,
            idRol
          )
        `)
        .eq('token', token)
        .eq('bActivo', true)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return { success: false, error: 'Token inválido o expirado' };
        }
        throw error;
      }

      return { success: true, assignment: data };
    } catch (error) {
      const message = handleSupabaseError(error, 'validate token');
      return { success: false, error: message };
    }
  }
};

export default { employeeAuthService, adminAuthService };
