// Utilidades para obtener clases CSS basadas en IDs de estado y prioridad

/**
 * Obtiene la clase CSS para el estado del ticket basada en idEstado
 * @param {number} idEstado - ID del estado desde la base de datos
 * @returns {string} - Clase CSS correspondiente
 */
export const getEstadoClass = (idEstado) => {
  const estadoClasses = {
    1: 'estado-sin-atender',    // Sin atender
    2: 'estado-delegado',       // Delegado
    3: 'estado-atendido',       // Atendido
    4: 'estado-cerrado',        // Cerrado
    5: 'estado-cancelado'       // Cancelado
  };
  
  return estadoClasses[idEstado] || 'estado-sin-atender';
};

/**
 * Obtiene la clase CSS para la prioridad del ticket basada en idPrioridad
 * @param {number} idPrioridad - ID de la prioridad desde la base de datos
 * @returns {string} - Clase CSS correspondiente
 */
export const getPrioridadClass = (idPrioridad) => {
  const prioridadClasses = {
    1: 'prioridad-baja',        // Baja (Gris)
    2: 'prioridad-media',       // Media (Amarillo)
    3: 'prioridad-alta'         // Alta (Naranja)
  };
  
  return prioridadClasses[idPrioridad] || 'prioridad-baja';
};

/**
 * Obtiene la clase CSS para tarjetas basada en idEstado
 * @param {number} idEstado - ID del estado desde la base de datos
 * @returns {string} - Clase CSS para tarjetas correspondiente
 */
export const getCardEstadoClass = (idEstado) => {
  const cardClasses = {
    1: 'sin-atender',
    2: 'delegado', 
    3: 'atendido',
    4: 'cerrado',
    5: 'cancelado'
  };
  
  return cardClasses[idEstado] || 'sin-atender';
};

/**
 * Obtiene el nombre del estado basado en idEstado
 * @param {number} idEstado - ID del estado desde la base de datos
 * @returns {string} - Nombre legible del estado
 */
export const getEstadoNombre = (idEstado) => {
  const estadoNombres = {
    1: 'Sin atender',
    2: 'Delegado',
    3: 'Atendido', 
    4: 'Cerrado',
    5: 'Cancelado'
  };
  
  return estadoNombres[idEstado] || 'Sin atender';
};

/**
 * Obtiene el nombre de la prioridad basado en idPrioridad
 * @param {number} idPrioridad - ID de la prioridad desde la base de datos
 * @returns {string} - Nombre legible de la prioridad
 */
export const getPrioridadNombre = (idPrioridad) => {
  const prioridadNombres = {
    1: 'Baja',
    2: 'Media',
    3: 'Alta'
  };
  
  return prioridadNombres[idPrioridad] || 'Baja';
};

/**
 * Obtiene el color de borde para tarjetas basado en idEstado
 * @param {number} idEstado - ID del estado desde la base de datos
 * @returns {string} - Color CSS correspondiente
 */
export const getBorderColor = (idEstado) => {
  const borderColors = {
    1: 'var(--color-estado-sin-atender)',
    2: 'var(--color-estado-delegado)',
    3: 'var(--color-estado-atendido)',
    4: 'var(--color-estado-cerrado)',
    5: 'var(--color-estado-cancelado)'
  };
  
  return borderColors[idEstado] || 'var(--color-estado-sin-atender)';
};
