/* eslint-env node */

exports.handler = async (event, _context) => {
  // Configurar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  };

  // Responder a las requests OPTIONS para CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight OK', timestamp: new Date().toISOString() })
    };
  }

  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        error: 'Method Not Allowed', 
        received: event.httpMethod,
        allowed: 'POST',
        timestamp: new Date().toISOString()
      })
    };
  }

  try {
    // Test de conectividad con ping
    const pingUrl = 'http://ezisol.com.mx/Portal/ping.aspx';
    
    try {
      const pingResponse = await fetch(pingUrl, {
        method: 'GET',
        timeout: 10000
      });
      
      console.log('🏓 Ping response status:', pingResponse.status);
      console.log('🏓 Ping response ok:', pingResponse.ok);
      
      if (pingResponse.ok) {
        const pingText = await pingResponse.text();
        console.log('🏓 Ping response text:', pingText.substring(0, 500));
        
        try {
          const pingData = JSON.parse(pingText);
          console.log('🏓 Ping JSON parseado:', pingData);
          
          if (pingData.success) {
            console.log('✅ CONECTIVIDAD CON SERVIDOR: OK');
            console.log('✅ Base de datos:', pingData.database);
            console.log('✅ Servidor:', pingData.server);
          } else {
            console.log('❌ PING FALLÓ:', pingData.error);
          }
        } catch (pingParseError) {
          console.log('⚠️ Ping response no es JSON válido:', pingParseError.message);
        }
      } else {
        console.log('❌ Ping HTTP error:', pingResponse.status);
      }
    } catch (pingError) {
      console.log('💥 Error en ping test:', pingError.message);
      console.log('💥 Ping stack:', pingError.stack);
    }
    
    // PASO 2: Validar datos de entrada
    console.log('📋 PASO 2: Validando datos de entrada...');
    
    if (!event.body) {
      console.log('❌ No hay body en la request');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'No body provided',
          timestamp: new Date().toISOString(),
          step: 'body_validation'
        })
      };
    }

    let requestData;
    try {
      requestData = JSON.parse(event.body);
      console.log('✅ JSON parseado correctamente:', JSON.stringify(requestData, null, 2));
    } catch (parseError) {
      console.log('❌ Error parseando JSON:', parseError.message);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Invalid JSON format',
          details: parseError.message,
          timestamp: new Date().toISOString(),
          step: 'json_parsing'
        })
      };
    }
    
    const { destinatario, asunto, mensaje } = requestData;
    console.log('📧 Destinatario:', destinatario);
    console.log('📧 Asunto:', asunto);
    console.log('📧 Mensaje length:', mensaje ? mensaje.length : 0);

    // Validar datos requeridos
    if (!destinatario || !asunto || !mensaje) {
      console.log('❌ Faltan campos requeridos');
      console.log('❌ Destinatario presente:', !!destinatario);
      console.log('❌ Asunto presente:', !!asunto);
      console.log('❌ Mensaje presente:', !!mensaje);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Faltan campos requeridos: destinatario, asunto, mensaje',
          received: { 
            destinatario: !!destinatario, 
            asunto: !!asunto, 
            mensaje: !!mensaje 
          },
          timestamp: new Date().toISOString(),
          step: 'field_validation'
        })
      };
    }

    // PASO 3: Llamar al endpoint de email
    console.log('📤 PASO 3: Llamando al endpoint de email...');
    const emailUrl = 'http://ezisol.com.mx/Portal/sendEmail.aspx';
    console.log('� URL email endpoint:', emailUrl);

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Netlify-Function/1.0'
      },
      body: JSON.stringify({
        destinatario,
        asunto,
        mensaje
      })
    };
    
    console.log('� Fetch options:', JSON.stringify(fetchOptions, null, 2));
    console.log('🚀 Ejecutando fetch al endpoint...');
    
    const response = await fetch(emailUrl, fetchOptions);
    
    console.log('� Response recibida');
    console.log('📨 Status:', response.status);
    console.log('� Status text:', response.statusText);
    console.log('📨 OK:', response.ok);
    console.log('📨 Headers:', JSON.stringify([...response.headers.entries()], null, 2));
    
    const responseText = await response.text();
    console.log('� Response text length:', responseText.length);
    console.log('📨 Response text (first 1000 chars):', responseText.substring(0, 1000));

    // Intentar parsear como JSON
    let responseData;
    try {
      responseData = JSON.parse(responseText);
      console.log('✅ Response JSON parseado:', JSON.stringify(responseData, null, 2));
    } catch (parseError) {
      console.error('❌ Error parseando response JSON:', parseError.message);
      console.log('📄 Raw response preview:', responseText.substring(0, 500));
      
      responseData = {
        success: false,
        error: 'Response no es JSON válido',
        rawResponse: responseText.substring(0, 1000),
        parseError: parseError.message,
        httpStatus: response.status
      };
    }

    // PASO 4: Procesar respuesta
    console.log('✅ PASO 4: Procesando respuesta final...');
    
    if (response.ok && responseData.success) {
      console.log('🎉 EMAIL ENVIADO EXITOSAMENTE');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: responseData.message || 'Email enviado correctamente',
          timestamp: new Date().toISOString(),
          serverResponse: responseData
        })
      };
    } else {
      console.log('❌ Error al enviar email');
      console.log('❌ Response data:', responseData);
      return {
        statusCode: response.ok ? 400 : response.status,
        headers,
        body: JSON.stringify({
          success: false,
          error: responseData.error || 'Error desconocido al enviar email',
          details: responseData,
          httpStatus: response.status,
          timestamp: new Date().toISOString()
        })
      };
    }

  } catch (error) {
    console.error('💥💥💥 ERROR GENERAL EN PROXY 💥💥💥');
    console.error('💥 Error message:', error.message);
    console.error('💥 Error name:', error.name);
    console.error('💥 Error stack:', error.stack);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Error interno del proxy',
        details: {
          message: error.message,
          name: error.name,
          stack: error.stack
        },
        timestamp: new Date().toISOString()
      })
    };
  }
};
