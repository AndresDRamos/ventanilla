import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { validateTicketToken, deactivateToken } from '../services/notificationService';
import { supabase } from '../supabase/supabase.config.jsx';

/**
 * Hook para manejar la respuesta/calificación de tickets por parte de empleados
 */
export const useEmployeeTicketResponse = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  // Estados principales
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Datos del ticket y respuesta
  const [ticket, setTicket] = useState(null);
  const [empleado, setEmpleado] = useState(null);
  const [atencion, setAtencion] = useState(null);
  const [adminNombre, setAdminNombre] = useState('');
  const [fechaRespuesta, setFechaRespuesta] = useState('');

  // Estados para la calificación
  const [calificacion, setCalificacion] = useState(0);
  const [comentario, setComentario] = useState('');
  const [submittingRating, setSubmittingRating] = useState(false);

  /**
   * Validar token y cargar datos del ticket
   */
  useEffect(() => {
    const loadTicketData = async () => {
      if (!token) {
        setError('Token de acceso no proporcionado');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // Validar token y obtener datos del ticket
        const tokenData = await validateTicketToken(token);
        
        // Verificar que este token sea para un empleado (no para admin)
        if (!tokenData.idEmpleado || tokenData.idUsuario) {
          setError('Este enlace es para administradores. Los empleados deben usar el enlace de respuesta.');
          setLoading(false);
          return;
        }

        // Verificar que tengamos los datos necesarios
        if (!tokenData.tickets || !tokenData.empleados) {
          setError('No se pudieron cargar los datos del ticket.');
          setLoading(false);
          return;
        }

        // Establecer datos básicos
        setTicket(tokenData.tickets);
        setEmpleado(tokenData.empleados);

        // Usar el idTicket correcto (del ticket relacionado, no del token directamente)
        const ticketId = tokenData.tickets.idTicket;

        // Obtener datos de atención usando idTicket del ticket relacionado
        const { data: atencionData, error: atencionError } = await supabase
          .from('atenciones')
          .select(`
            respuesta,
            calificacion,
            comentario,
            usuarios (nombre)
          `)
          .eq('idTicket', ticketId)
          .single();
        
        if (atencionError || !atencionData) {
          throw new Error('No se encontró respuesta para este ticket');
        }

        setAtencion(atencionData);
        setAdminNombre(atencionData.usuarios?.nombre || 'Administrador');

        // Obtener fecha de cuando se respondió
        const { data: seguimientoData, error: seguimientoError } = await supabase
          .from('seguimientos')
          .select('fecha')
          .eq('idTicket', ticketId)  // Usar idTicket del ticket relacionado
          .eq('idEstado', 3)
          .order('fecha', { ascending: false })
          .limit(1)
          .single();

        if (seguimientoData && !seguimientoError) {
          setFechaRespuesta(new Date(seguimientoData.fecha).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }));
        }

        // Verificar si ya existe una calificación para este ticket (en atenciones)
        if (atencionData.calificacion !== null && atencionData.calificacion !== undefined) {
          setCalificacion(atencionData.calificacion);
          setComentario(atencionData.comentario || '');
          setIsSubmitted(true);
          setResponseMessage('Ya has calificado este ticket anteriormente.');
        }

      } catch (error) {
        console.error('Error cargando datos del ticket:', error);
        setError(error.message || 'Error al cargar la información del ticket');
      } finally {
        setLoading(false);
      }
    };

    loadTicketData();
  }, [token]);

  /**
   * Enviar calificación del empleado
   */
  const submitRating = async (rating, comment = '') => {
    if (!ticket || !empleado || !atencion) {
      setError('Datos del ticket no disponibles');
      return;
    }

    try {
      setSubmittingRating(true);
      setError(null);

      // Actualizar la calificación y comentario en la tabla atenciones
      const { error: updateError } = await supabase
        .from('atenciones')
        .update({
          calificacion: rating,
          comentario: comment.trim() || null
        })
        .eq('idTicket', ticket.idTicket);

      if (updateError) {
        throw new Error('Error al guardar la calificación: ' + updateError.message);
      }

      // Crear seguimiento con idEstado = 4 (cerrado) sin idUsuario
      const { error: seguimientoError } = await supabase
        .from('seguimientos')
        .insert({
          idTicket: ticket.idTicket,
          idEstado: 4, // Estado cerrado
          fecha: new Date().toISOString()
          // No incluir idUsuario porque es una acción del empleado
        });

      if (seguimientoError) {
        // No lanzamos error porque la calificación ya se guardó correctamente
        console.warn('Error al crear seguimiento de cierre:', seguimientoError);
      }

      // Desactivar el token después de usar
      await deactivateToken(token);

      // Actualizar estados
      setCalificacion(rating);
      setComentario(comment);
      setSuccess(true);
      setIsSubmitted(true);
      setResponseMessage(`¡Gracias por calificar nuestro servicio con ${rating} ${rating === 1 ? 'estrella' : 'estrellas'}!`);

    } catch (error) {
      console.error('Error enviando calificación:', error);
      setError(error.message || 'Error al enviar la calificación');
    } finally {
      setSubmittingRating(false);
    }
  };

  return {
    // Estados principales
    loading,
    error,
    success,
    isSubmitted,
    responseMessage,
    
    // Datos del ticket
    ticket,
    empleado,
    atencion,
    adminNombre,
    fechaRespuesta,
    token,
    
    // Estados de calificación
    calificacion,
    comentario,
    submittingRating,
    
    // Acciones
    submitRating,
    setCalificacion,
    setComentario,
    navigate
  };
};
