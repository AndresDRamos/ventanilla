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
        
        if (!tokenData.empleados || !tokenData.tickets) {
          setError('Este enlace es para administradores. Los empleados deben usar el enlace de respuesta.');
          setLoading(false);
          return;
        }

        // Establecer datos básicos
        setTicket(tokenData.tickets);
        setEmpleado(tokenData.empleados);

        // Obtener datos completos de la atención/respuesta
        const { data: atencionData, error: atencionError } = await supabase
          .from('atenciones')
          .select(`
            respuesta,
            fechaAtencion,
            calificacion,
            comentario,
            usuarios (nombre)
          `)
          .eq('idTicket', tokenData.tickets.idTicket)
          .single();

        if (atencionError) {
          throw new Error('No se pudo cargar la respuesta del ticket');
        }

        setAtencion(atencionData);
        setAdminNombre(atencionData.usuarios?.nombre || 'Administrador');

        // Obtener fecha de cuando se respondió
        const { data: seguimientoData, error: seguimientoError } = await supabase
          .from('seguimientos')
          .select('fecha')
          .eq('idTicket', tokenData.tickets.idTicket)
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
          comentario: comment.trim() || null,
          fechaCalificacion: new Date().toISOString()
        })
        .eq('idTicket', ticket.idTicket);

      if (updateError) {
        throw new Error('Error al guardar la calificación: ' + updateError.message);
      }

      // Desactivar el token después de usar
      await deactivateToken(token);

      // Actualizar estados
      setCalificacion(rating);
      setComentario(comment);
      setSuccess(true);
      setIsSubmitted(true);
      setResponseMessage(`¡Gracias por calificar nuestro servicio con ${rating} ${rating === 1 ? 'estrella' : 'estrellas'}!`);

      console.log('✅ Calificación guardada exitosamente');

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
