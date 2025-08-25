import { createClient } from '@supabase/supabase-js';

// Configuración de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Faltan las variables de entorno de Supabase. Asegúrate de tener VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY configuradas.');
}

// Cliente de Supabase configurado
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false // No usar sesiones de Supabase Auth ya que manejamos auth custom
  }
});

// Cliente API base para requests personalizados
export const apiClient = {
  // GET request
  async get(table, options = {}) {
    let query = supabase.from(table).select(options.select || '*');
    
    // Aplicar filtros
    if (options.filters) {
      Object.entries(options.filters).forEach(([key, value]) => {
        query = query.eq(key, value);
      });
    }
    
    // Aplicar ordenamiento
    if (options.orderBy) {
      const { column, ascending = true } = options.orderBy;
      query = query.order(column, { ascending });
    }
    
    // Aplicar limit
    if (options.limit) {
      query = query.limit(options.limit);
    }
    
    const { data, error } = await query;
    
    if (error) {
      throw new Error(`Error fetching ${table}: ${error.message}`);
    }
    
    return data;
  },
  
  // GET single record
  async getById(table, id, options = {}) {
    const { data, error } = await supabase
      .from(table)
      .select(options.select || '*')
      .eq('id', id)
      .single();
    
    if (error) {
      throw new Error(`Error fetching ${table} with id ${id}: ${error.message}`);
    }
    
    return data;
  },
  
  // POST request
  async create(table, data) {
    const { data: result, error } = await supabase
      .from(table)
      .insert([data])
      .select()
      .single();
    
    if (error) {
      throw new Error(`Error creating ${table}: ${error.message}`);
    }
    
    return result;
  },
  
  // PUT request
  async update(table, id, updates) {
    const { data, error } = await supabase
      .from(table)
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) {
      throw new Error(`Error updating ${table} with id ${id}: ${error.message}`);
    }
    
    return data;
  },
  
  // DELETE request
  async delete(table, id) {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id);
    
    if (error) {
      throw new Error(`Error deleting ${table} with id ${id}: ${error.message}`);
    }
    
    return true;
  },
  
  // Custom query
  async query(callback) {
    try {
      const result = await callback(supabase);
      return result;
    } catch (error) {
      throw new Error(`Custom query error: ${error.message}`);
    }
  }
};

// Helper para manejar errores de Supabase
export const handleSupabaseError = (error, context = '') => {
  console.error(`Supabase error ${context}:`, error);
  
  // Errores específicos de Supabase
  if (error.code === 'PGRST116') {
    return 'No se encontraron registros';
  }
  
  if (error.code === '23505') {
    return 'Ya existe un registro con estos datos';
  }
  
  if (error.code === '23503') {
    return 'Error de referencia: el registro está siendo usado por otros datos';
  }
  
  return error.message || 'Error de base de datos';
};

export default supabase;
