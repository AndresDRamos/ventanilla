exports.handler = async (event, _context) => {
  console.log('🚀 Función iniciada');
  console.log('📝 Método:', event.httpMethod);
  console.log('📦 Body:', event.body);
  
  // Configurar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  };

  // Responder a las requests OPTIONS para CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    console.log('✅ Respondiendo a OPTIONS preflight');
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    console.log('❌ Método no permitido:', event.httpMethod);
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    console.log('📧 Procesando request POST...');
    
    if (!event.body) {
      console.log('❌ No hay body en la request');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'No body provided' })
      };
    }

    const requestData = JSON.parse(event.body);
    console.log('📋 Datos parseados:', JSON.stringify(requestData, null, 2));
    
    const { destinatario, asunto, mensaje } = requestData;

    // Validar datos requeridos
    if (!destinatario || !asunto || !mensaje) {
      console.log('❌ Faltan campos requeridos');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Faltan campos requeridos: destinatario, asunto, mensaje',
          received: { destinatario: !!destinatario, asunto: !!asunto, mensaje: !!mensaje }
        })
      };
    }

    console.log('📧 Netlify Proxy: Iniciando envío de email...');
    console.log('📦 Destinatario:', destinatario);
    console.log('📦 Asunto:', asunto);
    console.log('📦 Mensaje length:', mensaje.length);

    // URL del servidor ASP.NET usando servidor interno que ya confirmamos que funciona
    const aspNetUrl = 'http://172.17.201.2/SendEmailFixed.aspx';
    console.log('🔗 URL destino:', aspNetUrl);

    // Realizar la petición al servidor ASP.NET
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        destinatario,
        asunto,
        mensaje
      })
    };
    
    console.log('🚀 Iniciando fetch...');
    const response = await fetch(aspNetUrl, fetchOptions);
    console.log('🔄 Response status:', response.status);
    console.log('🔄 Response ok:', response.ok);
    
    const responseText = await response.text();
    console.log('📝 Response text:', responseText);

    // El endpoint ASP.NET devuelve JSON
    let responseData;
    try {
      responseData = JSON.parse(responseText);
      console.log('✅ JSON parseado correctamente:', responseData);
    } catch (parseError) {
      console.error('❌ Error parseando JSON response:', parseError.message);
      console.log('📄 Raw response:', responseText.substring(0, 200));
      responseData = {
        success: false,
        error: 'Response no es JSON válido',
        rawResponse: responseText.substring(0, 500),
        parseError: parseError.message
      };
    }

    // Verificar si la respuesta indica éxito
    if (response.ok && responseData.success) {
      console.log('✅ Email enviado exitosamente');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: responseData.message || 'Email enviado correctamente'
        })
      };
    } else {
      console.log('❌ Error al enviar email:', responseData);
      return {
        statusCode: response.ok ? 400 : response.status,
        headers,
        body: JSON.stringify({
          success: false,
          error: responseData.error || 'Error desconocido al enviar email',
          details: responseData,
          httpStatus: response.status
        })
      };
    }

  } catch (error) {
    console.error('💥 Error general en proxy:', error);
    console.error('💥 Stack trace:', error.stack);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Error interno del proxy',
        details: error.message,
        stack: error.stack
      })
    };
  }
};
