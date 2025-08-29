import { useState, useEffect } from 'react';
import { supabase } from '../supabase/supabase.config.jsx';
import { TicketEmailHTML } from '../components/EmailBody.jsx';

// Hook para obtener plantas
export const usePlantas = () => {
  const [plantas, setPlantas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlantas = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('plantas')
          .select('idPlanta, planta')
          .order('planta');

        if (error) throw error;
        setPlantas(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching plantas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlantas();
  }, []);

  return { plantas, loading, error };
};

// Hook para obtener esquemas de pago
export const useEsquemasPago = () => {
  const [esquemas, setEsquemas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEsquemas = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('esquemasPago')
          .select('idEsquemaPago, esquemaPago')
          .order('esquemaPago');

        if (error) throw error;
        setEsquemas(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching esquemas de pago:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEsquemas();
  }, []);

  return { esquemas, loading, error };
};

// Hook para obtener tipos de solicitud
export const useTiposSolicitud = () => {
  const [tipos, setTipos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTipos = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('tiposSolicitud')
          .select('idTipoSolicitud, tipoSolicitud')
          .order('tipoSolicitud');

        if (error) throw error;
        setTipos(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTipos();
  }, []);

  return { tipos, loading, error };
};

// Hook para obtener prioridades
export const usePrioridades = () => {
  const [prioridades, setPrioridades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrioridades = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('prioridades')
          .select('idPrioridad, prioridad')
          .order('idPrioridad');

        if (error) throw error;
        setPrioridades(data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching prioridades:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrioridades();
  }, []);

  return { prioridades, loading, error };
};

// Hook para crear tickets
export const useTickets = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createTicket = async (ticketData) => {
    try {
      setLoading(true);
      setError(null);

      // Primero obtener el usuario asignado basado en planta y tipo de solicitud
      const { data: empleadoData } = await supabase
        .from('empleados')
        .select('idPlanta')
        .eq('idEmpleado', ticketData.idEmpleado)
        .single();

      if (!empleadoData) {
        throw new Error('No se encontró información del empleado');
      }

      const { data: asignacionData } = await supabase
        .from('asignaciones')
        .select('idUsuario')
        .eq('idPlanta', empleadoData.idPlanta)
        .eq('idTipoSolicitud', ticketData.idTipoSolicitud)
        .single();

      if (!asignacionData) {
        throw new Error('No se encontró usuario asignado para esta combinación de planta y tipo de solicitud');
      }

      // Crear el ticket (sin fechaCreacion, se manejará en seguimientos)
      const { data: ticketCreado, error: ticketError } = await supabase
        .from('tickets')
        .insert([{
          idEmpleado: ticketData.idEmpleado,
          idTipoSolicitud: ticketData.idTipoSolicitud,
          descripcion: ticketData.descripcion,
          idPrioridad: ticketData.idPrioridad
        }])
        .select()
        .single();

      if (ticketError) throw ticketError;

      // Crear el primer seguimiento con estado "Sin atender" (idEstado = 1)
      const { error: seguimientoError } = await supabase
        .from('seguimientos')
        .insert([{
          idTicket: ticketCreado.idTicket,
          idUsuario: asignacionData.idUsuario,
          idEstado: 1 // Sin atender
        }]);

      if (seguimientoError) throw seguimientoError;

      // Crear token de acceso para el usuario asignado
      const token = crypto.randomUUID();
      const fechaExpiracion = new Date();
      fechaExpiracion.setDate(fechaExpiracion.getDate() + 7);

      const { error: tokenError } = await supabase
        .from('ticket_tokens')
        .insert({
          token,
          idTicket: ticketCreado.idTicket,
          idUsuario: asignacionData.idUsuario,
          fecha_expiracion: fechaExpiracion.toISOString(),
          bActivo: true
        });

      if (tokenError) throw tokenError;

      // Enviar notificación al usuario asignado usando endpoint interno
      try {
        // Obtener datos completos del ticket recién creado
        const { data: ticketCompleto, error: ticketCompletoError } = await supabase
          .from('tickets')
          .select(`
            *,
            empleados (
              nombre,
              plantas (planta)
            ),
            tiposSolicitud (tipoSolicitud),
            prioridades (prioridad)
          `)
          .eq('idTicket', ticketCreado.idTicket)
          .single();

        // Obtener datos del usuario asignado
        const { data: usuarioAsignado, error: usuarioError } = await supabase
          .from('usuarios')
          .select('idUsuario, nombre, correo')
          .eq('idUsuario', asignacionData.idUsuario)
          .single();

        if (!ticketCompletoError && !usuarioError && ticketCompleto && usuarioAsignado) {
          // Enviar notificación usando endpoint ASP.NET interno
          const baseUrl = import.meta.env.VITE_APP_BASE_URL || 
                         (import.meta.env.PROD ? 'https://andresdramos.github.io' : 'http://localhost:5173');
          const directLink = `${baseUrl}/ventanilla/ticket/${token}`;

          // Obtener fecha de creación del ticket desde seguimientos
          const { data: fechaCreacionData, error: fechaError } = await supabase
            .from('seguimientos')
            .select('fecha')
            .eq('idTicket', ticketCompleto.idTicket)
            .eq('idEstado', 1)
            .order('fecha', { ascending: true })
            .limit(1)
            .single();

          let fechaCreacion = 'Fecha no disponible';
          if (fechaCreacionData && !fechaError) {
            fechaCreacion = new Date(fechaCreacionData.fecha).toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });
          }

          // Generar HTML del email usando el componente
          const emailHTML = TicketEmailHTML({
            ticket: ticketCompleto,
            usuario: usuarioAsignado,
            directLink: directLink,
            fechaCreacion: fechaCreacion,
            tipo: 'nuevo'
          });

          // Llamar al endpoint ASP.NET interno para enviar email
          console.log('📧 Iniciando llamada al endpoint ASP.NET...');
          
          const emailPayload = {
            destinatario: usuarioAsignado.correo,
            asunto: `Nuevo Ticket Asignado - #${ticketCompleto.idTicket}`,
            mensaje: emailHTML
          };
          
          console.log('📦 Payload del email:', emailPayload);
          
          // Usar proxy en desarrollo, proxy CORS en producción
          const emailEndpoint = import.meta.env.DEV 
            ? '/api/email'  // Usa el proxy de Vite en desarrollo
            : 'https://cors-anywhere.herokuapp.com/http://172.17.201.2/SendEmail.aspx';  // Proxy CORS en producción
          
          const emailResponse = await fetch(emailEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailPayload)
          });

          console.log('🔄 Response status:', emailResponse.status);
          console.log('🔄 Response OK:', emailResponse.ok);

          const emailResult = await emailResponse.json();
          console.log('📨 Email result:', emailResult);

          if (!emailResult.success) {
            console.error('❌ Email no enviado:', emailResult.error);
            // No fallar la creación del ticket por problemas de notificación
          } else {
            console.log('✅ Email enviado exitosamente al usuario asignado');
          }
        } else {
          console.error('❌ Error obteniendo datos para notificación:', {
            ticketCompletoError,
            usuarioError,
            hasTicketCompleto: !!ticketCompleto,
            hasUsuarioAsignado: !!usuarioAsignado
          });
        }
      } catch (notificationError) {
        console.warn('⚠️ Error en sistema de notificaciones (ticket creado exitosamente):', notificationError.message);
        // No fallar la creación del ticket por problemas de notificación
      }

      return { success: true, ticket: ticketCreado };
    } catch (err) {
      setError(err.message);
      console.error('Error creating ticket:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { createTicket, loading, error };
};
