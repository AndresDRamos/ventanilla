import { serve } from "https://deno.land/std@0.208.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Configuración
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY no configurada')
    }

    // Parse request body
    const { ticketData, usuario, directLink } = await req.json()
    
    console.log('Enviando email para:', { 
      ticketId: ticketData.idTicket, 
      usuario: usuario.nombre,
      email: usuario.correo 
    })

    // Validar datos requeridos
    if (!usuario.correo) {
      throw new Error('Usuario sin correo registrado')
    }

    // Template del email
    const emailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ticket Delegado</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        
        <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">🎫 Ticket Delegado</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Sistema de Atención EZI</p>
        </div>

        <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
          
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #2563eb;">
            <h2 style="color: #1e40af; margin-top: 0;">Hola ${usuario.nombre},</h2>
            <p style="font-size: 16px; margin-bottom: 20px;">
              Se te ha delegado un nuevo ticket para atención:
            </p>

            <div style="background: #f1f5f9; padding: 20px; border-radius: 6px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Ticket:</td>
                  <td style="padding: 8px 0; color: #1f2937;">#${ticketData.idTicket}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Empleado:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${ticketData.empleados?.nombre || 'No especificado'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Planta:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${ticketData.empleados?.plantas?.planta || 'No especificada'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Tipo:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${ticketData.tiposSolicitud?.tipoSolicitud || 'No especificado'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Fecha:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${new Date(ticketData.fechaCreacion).toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</td>
                </tr>
              </table>
            </div>

            <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold; color: #92400e;">Descripción:</p>
              <p style="margin: 10px 0 0 0; color: #92400e; font-style: italic;">
                "${ticketData.descripcion}"
              </p>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${directLink}" 
                 style="display: inline-block; background: #2563eb; color: white; padding: 15px 30px; 
                        text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;
                        box-shadow: 0 4px 6px rgba(37, 99, 235, 0.25); transition: all 0.2s;"
                 target="_blank">
                🔗 Ver y Responder Ticket
              </a>
            </div>

            <div style="background: #e0f2fe; padding: 15px; border-radius: 6px; border-left: 4px solid #0284c7;">
              <p style="margin: 0; font-size: 14px; color: #0c4a6e;">
                <strong>💡 Acceso directo:</strong> Este enlace te permite ver y responder el ticket sin necesidad de iniciar sesión. 
                Válido por 7 días.
              </p>
            </div>

          </div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">

          <div style="text-align: center; color: #64748b; font-size: 12px;">
            <p style="margin: 0;">
              Sistema de Tickets - EZI<br>
              Este email fue generado automáticamente por el sistema de gestión de tickets.
            </p>
          </div>

        </div>
      </body>
      </html>
    `

    // Enviar email con Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Sistema EZI <noreply@resend.dev>', // En producción: 'tickets@tudominio.com'
        to: [usuario.correo],
        subject: `🎫 Ticket Delegado para Atención - #${ticketData.idTicket}`,
        html: emailHTML,
      }),
    })

    const emailResult = await emailResponse.json()

    if (!emailResponse.ok) {
      console.error('Error de Resend:', emailResult)
      throw new Error(emailResult.message || 'Error enviando email')
    }

    console.log('Email enviado exitosamente:', emailResult)

    return new Response(
      JSON.stringify({ 
        success: true, 
        messageId: emailResult.id,
        to: usuario.correo
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error en Edge Function:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400
      }
    )
  }
})
