exports.handler = async (event, context) => {
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
      body: ''
    };
  }

  // Solo permitir POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { destinatario, asunto, mensaje } = JSON.parse(event.body);

    // Validar datos requeridos
    if (!destinatario || !asunto || !mensaje) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Faltan campos requeridos: destinatario, asunto, mensaje' 
        })
      };
    }

    console.log('📧 Netlify Proxy: Iniciando envío de email...');
    console.log('📦 Destinatario:', destinatario);
    console.log('📦 Asunto:', asunto);

    // URL del servidor ASP.NET interno
    const aspNetUrl = 'http://172.17.201.2/SendEmail.aspx';

    // Realizar la petición al servidor ASP.NET
    const response = await fetch(aspNetUrl, {
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
    });

    console.log('🔄 Response status:', response.status);
    
    const responseText = await response.text();
    console.log('📝 Response text:', responseText);

    // El endpoint ASP.NET devuelve JSON
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('❌ Error parseando JSON response:', parseError);
      responseData = {
        success: false,
        error: 'Response no es JSON válido',
        rawResponse: responseText.substring(0, 500)
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
    console.error('💥 Error en proxy de email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: 'Error interno del proxy',
        details: error.message
      })
    };
  }
};
