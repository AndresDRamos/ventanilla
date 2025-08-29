import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabase.config.jsx';

export const useTicketResponse = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  
  // Estados
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [actionType, setActionType] = useState('responder');
  const [selectedUser, setSelectedUser] = useState('');
  const [users, setUsers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Cargar usuarios para reasignación
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const { data, error } = await supabase
          .from('usuarios')
          .select('idUsuario, nombre, correo')
          .eq('idRol', 3) // Solo usuarios con rol de delegado
          .order('nombre');

        if (error) throw error;
        setUsers(data || []);
      } catch (err) {
        console.error('Error cargando usuarios:', err);
      }
    };

    loadUsers();
  }, []);

  // Cargar ticket usando el token
  useEffect(() => {
    const loadTicket = async () => {
      if (!token) {
        setError('Token no encontrado en la URL');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const ticketData = await validateAndLoadTicket(token);
        setTicket(ticketData);
        
      } catch (err) {
        console.error('Error cargando ticket:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      loadTicket();
    }
  }, [token]);

  return {
    // Estados básicos
    ticket,
    loading,
    response,
    setResponse,
    error,
    setError,
    success,
    setSuccess,
    
    // Estados de acciones
    actionType,
    setActionType,
    selectedUser,
    setSelectedUser,
    users,
    
    // Estados de envío
    isSubmitting,
    setIsSubmitting,
    responseMessage,
    setResponseMessage,
    isSubmitted,
    setIsSubmitted,
    
    // Utilidades
    token,
    navigate
  };
};

// Función helper para validar y cargar ticket
const validateAndLoadTicket = async (token) => {
  // Validar token básico primero (sin joins complejos para evitar conflictos de relaciones múltiples)
  const { data: tokenData, error: tokenError } = await supabase
    .from('ticket_tokens')
    .select('*')
    .eq('token', token)
    .eq('bActivo', true)
    .gt('fecha_expiracion', new Date().toISOString())
    .single();

  if (tokenError || !tokenData) {
    if (tokenError?.code === 'PGRST116') {
      throw new Error('Enlace inválido, expirado o ya utilizado. Este ticket puede haber sido reasignado a otro usuario.');
    }
    throw new Error('Enlace inválido, expirado o ya utilizado');
  }

  // Obtener el ticket por separado usando el ID correcto
  const ticketId = tokenData.idTicket || tokenData.id_ticket;
  
  const { data: ticketData, error: ticketError } = await supabase
    .from('tickets')
    .select(`
      *,
      empleados (nombre, codigoEmpleado, idPlanta, plantas (planta)),
      tiposSolicitud (tipoSolicitud),
      prioridades (prioridad),
      estados (estado)
    `)
    .eq('idTicket', ticketId)
    .single();

  if (ticketError || !ticketData) {
    throw new Error('Ticket no encontrado');
  }

  // Obtener usuario por separado incluyendo su rol
  const usuarioId = tokenData.idUsuario || tokenData.id_usuario;
  const { data: usuarioData } = await supabase
    .from('usuarios')
    .select('idUsuario, nombre, correo, idRol')  // ← Agregado idUsuario
    .eq('idUsuario', usuarioId)
    .single();

  // Construir el objeto combinado como antes
  const combinedData = {
    ...tokenData,
    tickets: ticketData,
    usuarios: usuarioData
  };

  // Verificar que el ticket esté disponible para responder
  if (combinedData.tickets.idEstado !== 1 && combinedData.tickets.idEstado !== 2) {
    throw new Error('Este ticket ya no está disponible para responder');
  }

  // Ya no necesitamos validaciones específicas por estado
  // porque todo se maneja con bActivo en ticket_tokens

  // Obtener la fecha de creación del ticket
  const { data: fechaCreacion, error: fechaError } = await supabase
    .from('seguimientos')
    .select('fecha')
    .eq('idTicket', combinedData.tickets.idTicket)
    .eq('idEstado', 1)
    .order('fecha', { ascending: true })
    .limit(1)
    .single();

  // Agregar la fecha de creación al ticket
  if (fechaCreacion && !fechaError) {
    combinedData.tickets.fechaCreacion = fechaCreacion.fecha;
  }

  return combinedData;
};
