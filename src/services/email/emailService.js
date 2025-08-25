/**
 * Servicio para envío de emails
 * Este es un placeholder - debe implementarse según el proveedor de email elegido
 * (SendGrid, Mailgun, AWS SES, etc.)
 */
export const emailService = {
  /**
   * Enviar notificación de asignación de ticket
   */
  async sendTicketAssignment({ to, ticket, assignedUser, token }) {
    try {
      // URL base para responder tickets
      const baseUrl = import.meta.env.VITE_APP_BASE_URL || window.location.origin;
      const responseUrl = `${baseUrl}/admin/ticket/${token}`;

      const emailData = {
        to,
        subject: `Nuevo ticket asignado #${ticket.idTicket}`,
        template: 'ticket-assignment',
        data: {
          assignedUser: assignedUser.nombre,
          ticket: {
            id: ticket.idTicket,
            description: ticket.descripcion,
            employee: ticket.empleados?.nombre,
            employeeCode: ticket.empleados?.codigoEmpleado,
            requestType: ticket.tiposSolicitud?.tipoSolicitud,
            priority: ticket.prioridades?.prioridad
          },
          responseUrl
        }
      };

      // Aquí se implementaría el envío real del email
      console.log('Email a enviar:', emailData);
      
      // Simulación de envío exitoso
      return { success: true, messageId: `msg_${Date.now()}` };
    } catch (error) {
      console.error('Error sending ticket assignment email:', error);
      return { success: false, error: error.message };
    }
  },

  /**
   * Enviar notificación de reasignación de ticket
   */
  async sendTicketReassignment({ to, ticketId, assignedUser, token }) {
    try {
      const baseUrl = import.meta.env.VITE_APP_BASE_URL || window.location.origin;
      const responseUrl = `${baseUrl}/admin/ticket/${token}`;

      const emailData = {
        to,
        subject: `Ticket reasignado #${ticketId}`,
        template: 'ticket-reassignment',
        data: {
          assignedUser: assignedUser.nombre,
          ticketId,
          responseUrl
        }
      };

      console.log('Email de reasignación a enviar:', emailData);
      
      return { success: true, messageId: `msg_${Date.now()}` };
    } catch (error) {
      console.error('Error sending ticket reassignment email:', error);
      return { success: false, error: error.message };
    }
  },

  /**
   * Enviar notificación al empleado sobre respuesta de ticket
   */
  async sendTicketResponse({ to, ticket, response }) {
    try {
      const emailData = {
        to,
        subject: `Respuesta a tu ticket #${ticket.idTicket}`,
        template: 'ticket-response',
        data: {
          employee: ticket.empleados?.nombre,
          ticket: {
            id: ticket.idTicket,
            description: ticket.descripcion,
            response: response.respuesta,
            respondedBy: response.usuarios?.nombre,
            respondedAt: response.fecha
          }
        }
      };

      console.log('Email de respuesta a enviar:', emailData);
      
      return { success: true, messageId: `msg_${Date.now()}` };
    } catch (error) {
      console.error('Error sending ticket response email:', error);
      return { success: false, error: error.message };
    }
  },

  /**
   * Configurar proveedor de email real
   * Ejemplo de implementación con diferentes proveedores:
   */
  _configureProvider() {
    const provider = import.meta.env.VITE_EMAIL_PROVIDER;
    
    switch (provider) {
      case 'sendgrid':
        // return this._configureSendGrid();
        break;
      case 'mailgun':
        // return this._configureMailgun();
        break;
      case 'aws-ses':
        // return this._configureAWSSES();
        break;
      default:
        console.warn('No email provider configured, emails will be logged only');
        return null;
    }
  },

  /**
   * Ejemplo de implementación con SendGrid
   */
  async _sendWithSendGrid(_emailData) {
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    // const msg = {
    //   to: emailData.to,
    //   from: process.env.FROM_EMAIL,
    //   subject: emailData.subject,
    //   html: this._renderTemplate(emailData.template, emailData.data)
    // };
    
    // return await sgMail.send(msg);
  },

  /**
   * Renderizar plantillas de email
   */
  _renderTemplate(template, data) {
    // Plantillas básicas - en producción usar un motor de plantillas real
    const templates = {
      'ticket-assignment': `
        <h2>Nuevo Ticket Asignado</h2>
        <p>Hola ${data.assignedUser},</p>
        <p>Se te ha asignado un nuevo ticket:</p>
        <ul>
          <li><strong>ID:</strong> #${data.ticket.id}</li>
          <li><strong>Empleado:</strong> ${data.ticket.employee} (${data.ticket.employeeCode})</li>
          <li><strong>Tipo:</strong> ${data.ticket.requestType}</li>
          <li><strong>Prioridad:</strong> ${data.ticket.priority}</li>
          <li><strong>Descripción:</strong> ${data.ticket.description}</li>
        </ul>
        <p><a href="${data.responseUrl}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Responder Ticket</a></p>
      `,
      'ticket-reassignment': `
        <h2>Ticket Reasignado</h2>
        <p>Hola ${data.assignedUser},</p>
        <p>Se te ha reasignado el ticket #${data.ticketId}</p>
        <p><a href="${data.responseUrl}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Responder Ticket</a></p>
      `,
      'ticket-response': `
        <h2>Respuesta a tu Ticket</h2>
        <p>Hola ${data.employee},</p>
        <p>Tu ticket #${data.ticket.id} ha sido respondido:</p>
        <p><strong>Respuesta:</strong> ${data.ticket.response}</p>
        <p><strong>Atendido por:</strong> ${data.ticket.respondedBy}</p>
      `
    };

    return templates[template] || `<p>Plantilla no encontrada: ${template}</p>`;
  }
};

export default emailService;
