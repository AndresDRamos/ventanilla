// Utilidades para manejo de fechas en zona horaria de México

// Función para formatear fecha para mostrar al usuario
export const formatMexicanDate = (dateString) => {
  console.log('formatMexicanDate - Raw dateString:', dateString);
  
  // Parsear manualmente para evitar conversión automática de zona horaria
  if (dateString.includes('T') && dateString.includes('+00:00')) {
    // Es una fecha UTC de Supabase, extraer directamente los valores
    const datePart = dateString.split('T')[0]; // 2025-08-19
    const timePart = dateString.split('T')[1].split('+')[0]; // 09:29:52.726772
    
    const [year, month, day] = datePart.split('-');
    const [hours, minutes] = timePart.split(':');
    
    const result = `${day}/${month}/${year}, ${hours}:${minutes}`;
    console.log('formatMexicanDate - Formatted (manual):', result);
    return result;
  }
  
  // Fallback para otros formatos
  const date = new Date(dateString);
  console.log('formatMexicanDate - Date object:', date);
  
  const result = date.toLocaleDateString("es-MX", {
    day: "2-digit",
    month: "2-digit", 
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
  
  console.log('formatMexicanDate - Formatted:', result);
  return result;
};

// Función para obtener solo la hora en formato local
export const formatMexicanTime = (dateString) => {
  const date = new Date(dateString);
  
  return date.toLocaleTimeString("es-MX", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
};
