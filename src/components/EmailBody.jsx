/**
 * Componente para generar el cuerpo HTML de los emails de notificación de tickets
 * Centraliza el template y permite fácil personalización
 */

// Estilos comunes para emails
const emailStyles = {
  container: `
    font-family: Arial, sans-serif; 
    line-height: 1.6; 
    color: #333; 
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px;
  `,
  header: `
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); 
    color: white; 
    padding: 30px; 
    border-radius: 10px 10px 0 0; 
    text-align: center;
  `,
  title: `margin: 0; font-size: 28px;`,
  subtitle: `margin: 10px 0 0 0; opacity: 0.9;`,
  content: `
    background: #f8fafc; 
    padding: 30px; 
    border-radius: 0 0 10px 10px; 
    border: 1px solid #e2e8f0;
  `,
  card: `
    background: white; 
    padding: 25px; 
    border-radius: 8px; 
    margin-bottom: 25px; 
    border-left: 4px solid #2563eb;
  `,
  greeting: `color: #1e40af; margin-top: 0;`,
  infoSection: `
    background: #f1f5f9; 
    padding: 20px; 
    border-radius: 6px; 
    margin: 20px 0;
  `,
  infoTable: `width: 100%; border-collapse: collapse;`,
  infoLabel: `
    padding: 8px 0; 
    font-weight: bold; 
    color: #374151; 
    width: 120px;
  `,
  infoValue: `padding: 8px 0; color: #1f2937;`,
  descriptionSection: `
    background: #fef3c7; 
    border: 1px solid #f59e0b; 
    padding: 15px; 
    border-radius: 6px; 
    margin: 20px 0;
  `,
  descriptionTitle: `margin: 0; font-weight: bold; color: #92400e;`,
  descriptionText: `
    margin: 10px 0 0 0; 
    color: #92400e; 
    font-style: italic;
  `,
  buttonSection: `text-align: center; margin: 30px 0;`,
  button: `
    display: inline-block; 
    background: #2563eb; 
    color: white; 
    padding: 15px 30px; 
    text-decoration: none; 
    border-radius: 8px; 
    font-weight: bold; 
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(37, 99, 235, 0.25);
  `,
  noteSection: `
    background: #e0f2fe; 
    padding: 15px; 
    border-radius: 6px; 
    border-left: 4px solid #0284c7;
  `,
  noteText: `
    margin: 0; 
    font-size: 14px; 
    color: #0c4a6e;
  `,
  footer: `
    text-align: center; 
    color: #64748b; 
    font-size: 12px; 
    margin-top: 30px; 
    padding-top: 30px; 
    border-top: 1px solid #e2e8f0;
  `,
};

// Configuración de tipos de notificación
const notificationTypes = {
  nuevo: {
    title: "Nuevo Ticket Asignado",
    action: "asignado",
    actionText: "Se te ha asignado un nuevo ticket para atención:",
  },
  delegado: {
    title: "Ticket Delegado",
    action: "delegado",
    actionText: "Se te ha delegado un ticket para atención:",
  },
  reasignado: {
    title: "Ticket Reasignado",
    action: "reasignado",
    actionText: "Se te ha reasignado un ticket para atención:",
  },
};

/**
 * Genera el cuerpo HTML unificado para emails de tickets
 * @param {Object} props - Propiedades del email
 * @param {Object} props.ticket - Datos del ticket
 * @param {Object} props.usuario - Datos del usuario destinatario
 * @param {string} props.directLink - Enlace directo al ticket
 * @param {string} props.fechaCreacion - Fecha de creación formateada
 * @param {string} props.tipo - Tipo de notificación ('nuevo', 'delegado', 'reasignado')
 * @returns {string} HTML del email
 */
export const TicketEmailHTML = ({
  ticket,
  usuario,
  directLink,
  fechaCreacion = "Fecha no disponible",
  tipo = "nuevo",
}) => {
  // Obtener configuración del tipo de notificación
  const config = notificationTypes[tipo] || notificationTypes.nuevo;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${config.title}</title>
    </head>
    <body style="${emailStyles.container}">
      
      <div style="${emailStyles.header}">
        <h1 style="${emailStyles.title}">${config.title}</h1>
        <p style="${emailStyles.subtitle}">Sistema de Atención EZI</p>
      </div>

      <div style="${emailStyles.content}">
        
        <div style="${emailStyles.card}">
          <h2 style="${emailStyles.greeting}">Hola ${usuario.nombre},</h2>
          <p style="font-size: 16px; margin-bottom: 20px;">
            ${config.actionText}
          </p>

          <div style="${emailStyles.infoSection}">
            <table style="${emailStyles.infoTable}">
              <tr>
                <td style="${emailStyles.infoLabel}">Ticket:</td>
                <td style="${emailStyles.infoValue}">#${ticket.idTicket}</td>
              </tr>
              <tr>
                <td style="${emailStyles.infoLabel}">Empleado:</td>
                <td style="${emailStyles.infoValue}">${
    ticket.empleados?.nombre || "No especificado"
  }</td>
              </tr>
              <tr>
                <td style="${emailStyles.infoLabel}">Planta:</td>
                <td style="${emailStyles.infoValue}">${
    ticket.empleados?.plantas?.planta || "No especificada"
  }</td>
              </tr>
              <tr>
                <td style="${emailStyles.infoLabel}">Tipo:</td>
                <td style="${emailStyles.infoValue}">${
    ticket.tiposSolicitud?.tipoSolicitud || "No especificado"
  }</td>
              </tr>
              <tr>
                <td style="${emailStyles.infoLabel}">Prioridad:</td>
                <td style="${emailStyles.infoValue}">${
    ticket.prioridades?.prioridad || "Normal"
  }</td>
              </tr>
              <tr>
                <td style="${emailStyles.infoLabel}">Fecha:</td>
                <td style="${emailStyles.infoValue}">${fechaCreacion}</td>
              </tr>
            </table>
          </div>

          <div style="${emailStyles.descriptionSection}">
            <p style="${emailStyles.descriptionTitle}">Descripción:</p>
            <p style="${emailStyles.descriptionText}">
              "${ticket.descripcion}"
            </p>
          </div>

          <div style="${emailStyles.buttonSection}">
            <a href="${directLink}" 
               style="${emailStyles.button}"
               target="_blank">
              Ver y Responder Ticket
            </a>
          </div>

          <div style="${emailStyles.noteSection}">
            <p style="${emailStyles.noteText}">
              <strong>Acceso directo:</strong> Este enlace te permite ver y responder el ticket sin necesidad de iniciar sesión. 
              Válido por 7 días.
            </p>
          </div>

        </div>

        <div style="${emailStyles.footer}">
          <p style="margin: 0;">
            Sistema de Tickets - EZI<br>
            Este email fue generado automáticamente por el sistema de gestión de tickets.
          </p>
        </div>

      </div>
    </body>
    </html>
  `;
};

export default {
  TicketEmailHTML,
  emailStyles,
  notificationTypes,
};
