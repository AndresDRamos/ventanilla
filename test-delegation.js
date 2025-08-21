// Script de prueba para validar la funcionalidad de delegación/reasignación
// Este script no se usa en producción, solo para testing

import { supabase } from './src/supabase/supabase.config.jsx';

const testDelegationSystem = async () => {
  const testTicketId = 1; // Cambiar por un ticket ID real

  console.log('🔍 Verificando tokens activos para ticket:', testTicketId);
  
  const { data: tokens, error: tokensError } = await supabase
    .from('ticket_tokens')
    .select('*')
    .eq('id_ticket', testTicketId)
    .eq('usado', false);

  if (tokensError) {
    console.error('Error obteniendo tokens:', tokensError);
    return;
  }

  console.log('📋 Tokens activos:', tokens);

  console.log('🔍 Verificando delegaciones activas para ticket:', testTicketId);
  
  const { data: delegaciones, error: delegacionesError } = await supabase
    .from('delegaciones')
    .select('*')
    .eq('idTicket', testTicketId)
    .eq('bActivo', true);

  if (delegacionesError) {
    console.error('Error obteniendo delegaciones:', delegacionesError);
    return;
  }

  console.log('📋 Delegaciones activas:', delegaciones);

  // Validar que solo hay máximo 1 delegación activa
  if (delegaciones.length > 1) {
    console.error('❌ ERROR: Múltiples delegaciones activas para el mismo ticket!');
  } else if (delegaciones.length === 1) {
    console.log('✅ Una delegación activa correctamente');
  } else {
    console.log('ℹ️ No hay delegaciones activas');
  }

  // Validar correlación entre tokens y delegaciones
  if (tokens.length > 0 && delegaciones.length === 0) {
    console.warn('⚠️ Hay tokens activos pero no delegaciones activas');
  }
  
  if (tokens.length === 0 && delegaciones.length > 0) {
    console.warn('⚠️ Hay delegaciones activas pero no tokens activos');
  }
};

// Para usar desde consola del navegador:
// testDelegationSystem();

export { testDelegationSystem };
