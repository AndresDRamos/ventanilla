import{s as i}from"./index-xcnB8IWQ.js";const c=async(r,o)=>{try{const e=crypto.randomUUID(),a=new Date;a.setDate(a.getDate()+7);const{error:t}=await i.from("ticket_tokens").insert({token:e,id_ticket:r,id_usuario:o,fecha_expiracion:a.toISOString()});if(t)throw t;return e}catch(e){throw console.error("Error generando token:",e),e}},d=async r=>{try{const{data:o,error:e}=await i.from("ticket_tokens").select(`
        *,
        tickets (
          *,
          empleados (nombre, plantas (planta)),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad),
          estados (estado)
        ),
        usuarios (nombre, correo)
      `).eq("token",r).eq("usado",!1).gt("fecha_expiracion",new Date().toISOString()).single();if(e||!o)throw new Error("Token inválido o expirado");return o}catch(o){throw console.error("Error validando token:",o),o}},l=async r=>{try{const{error:o}=await i.from("ticket_tokens").update({usado:!0}).eq("token",r);if(o)throw o}catch(o){throw console.error("Error marcando token como usado:",o),o}},k=async(r,o)=>{try{console.log("Iniciando notificación por email para:",{ticketId:r.idTicket,usuario:o.nombre});const e=await c(r.idTicket,o.idUsuario),t=`https://andresdramos.github.io/ventanilla/ticket/${e}`,{data:n,error:s}=await i.functions.invoke("send-email-notification",{body:{ticketData:r,usuario:o,directLink:t}});if(s)throw console.error("Error invocando Edge Function:",s),s;return console.log("Edge Function response:",n),{success:n.success,token:e,directLink:t,emailResult:{success:n.success,messageId:n.messageId,to:n.to}}}catch(e){return console.error("Error enviando notificación de delegación:",e),{success:!1,error:e.message}}},f={generateTicketToken:c,validateTicketToken:d,markTokenAsUsed:l,enviarNotificacionDelegacion:k};export{f as default,k as enviarNotificacionDelegacion,c as generateTicketToken,l as markTokenAsUsed,d as validateTicketToken};
