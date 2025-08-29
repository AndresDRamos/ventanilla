export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Responder a las requests OPTIONS para CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { destinatario, asunto, mensaje } = req.body;

    // Validar datos requeridos
    if (!destinatario || !asunto || !mensaje) {
      return res.status(400).json({ 
        error: 'Faltan campos requeridos: destinatario, asunto, mensaje' 
      });
    }

    console.log('📧 Proxy: Iniciando envío de email...');
    console.log('📦 Destinatario:', destinatario);
    console.log('📦 Asunto:', asunto);

    // URL del servidor ASP.NET interno
    const aspNetUrl = 'http://172.17.201.2/SendEmail.aspx';

    // Realizar la petición al servidor ASP.NET con configuración específica
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
    console.log('🔄 Response headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('📝 Response text:', responseText);

    // El endpoint ASP.NET devuelve JSON, intentar parsearlo
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('❌ Error parseando JSON response:', parseError);
      // Si no es JSON válido, podría ser un error HTML o texto
      responseData = {
        success: false,
        error: 'Response no es JSON válido',
        rawResponse: responseText.substring(0, 500) // Limitar la respuesta para logs
      };
    }

    // Verificar si la respuesta indica éxito
    if (response.ok && responseData.success) {
      console.log('✅ Email enviado exitosamente');
      return res.status(200).json({
        success: true,
        message: responseData.message || 'Email enviado correctamente'
      });
    } else {
      console.log('❌ Error al enviar email:', responseData);
      return res.status(response.ok ? 400 : response.status).json({
        success: false,
        error: responseData.error || 'Error desconocido al enviar email',
        details: responseData,
        httpStatus: response.status
      });
    }

  } catch (error) {
    console.error('💥 Error en proxy de email:', error);
    
    // Verificar si es un error de red/conectividad
    if (error.code === 'ECONNREFUSED' || error.code === 'ENOTFOUND') {
      return res.status(503).json({
        success: false,
        error: 'No se puede conectar al servidor de email interno',
        details: 'El servidor ASP.NET no está disponible',
        code: error.code
      });
    }
    
    return res.status(500).json({
      success: false,
      error: 'Error interno del proxy',
      details: error.message
    });
  }
}
