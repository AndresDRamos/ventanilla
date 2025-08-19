// Script de prueba para verificar las fechas en zona horaria mexicana
import { formatMexicanDate } from './src/utils/dateUtils.js';

console.log('=== Prueba de fechas en zona horaria mexicana ===');
console.log('Fecha UTC actual:', new Date().toISOString());
console.log('Formato para usuario:', formatMexicanDate(new Date().toISOString()));
console.log('');

// Ejemplo con fecha actual
const fechaActual = new Date().toISOString();

console.log('Comparación:');
console.log('UTC:', fechaActual);
console.log('Formato mexicano:', formatMexicanDate(fechaActual));
console.log('');
console.log('Nota: Ahora las fechas se manejan directamente en Supabase con valores por defecto.');
