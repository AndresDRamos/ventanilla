import { randomBytes } from 'crypto';

/**
 * Servicio para manejar tokens de acceso a tickets
 */
export const tokenService = {
  /**
   * Generar un token único
   */
  generate() {
    // Generar token usando crypto para mayor seguridad
    const timestamp = Date.now().toString(36);
    const randomPart = randomBytes(16).toString('hex');
    return `${timestamp}_${randomPart}`;
  },

  /**
   * Generar token simple (fallback para navegadores sin crypto)
   */
  generateSimple() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 15);
    return `${timestamp}_${random}`;
  },

  /**
   * Validar formato de token
   */
  validate(token) {
    if (!token || typeof token !== 'string') {
      return { valid: false, error: 'Token inválido' };
    }

    const parts = token.split('_');
    if (parts.length !== 2) {
      return { valid: false, error: 'Formato de token inválido' };
    }

    // Validar que la primera parte es un timestamp válido
    const timestamp = parseInt(parts[0], 36);
    if (isNaN(timestamp)) {
      return { valid: false, error: 'Token corrupto' };
    }

    // Validar que no sea muy antiguo (más de 30 días)
    const maxAge = 30 * 24 * 60 * 60 * 1000; // 30 días en milisegundos
    if (Date.now() - timestamp > maxAge) {
      return { valid: false, error: 'Token expirado' };
    }

    return { valid: true, timestamp };
  },

  /**
   * Extraer información del token
   */
  decode(token) {
    const validation = this.validate(token);
    if (!validation.valid) {
      return validation;
    }

    const parts = token.split('_');
    return {
      valid: true,
      timestamp: validation.timestamp,
      created: new Date(validation.timestamp),
      randomPart: parts[1]
    };
  }
};

export default tokenService;
