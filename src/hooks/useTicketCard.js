import { useMemo, useEffect, useState } from 'react';
import { formatMexicanDate } from '../utils/dateUtils';
import { supabase } from '../supabase/supabase.config.jsx';

export const useTicketCard = (ticket, mode, formatDate) => {
  const [usuarioAsignado, setUsuarioAsignado] = useState(null);

  // Buscar en ticket_tokens el usuario asignado activo, con fallback a asignaciones
  useEffect(() => {
    const obtenerUsuarioAsignado = async () => {
      // Validación temprana
      if (!ticket || !ticket.idTicket) {
        setUsuarioAsignado(null);
        return;
      }

      try {
        // Primera consulta: obtener el idUsuario del token activo
        const { data, error } = await supabase
          .from('ticket_tokens')
          .select('idUsuario')
          .eq('idTicket', ticket.idTicket)
          .eq('bActivo', true)
          .maybeSingle(); // Cambiar a maybeSingle() para tickets sin tokens

        let idUsuarioFinal = null;

        if (!error && data?.idUsuario) {
          idUsuarioFinal = data.idUsuario;
        } else {
          // Para tickets sin token (nuevos o anteriores), obtener usuario original
          // usando la cadena: tickets -> empleados -> asignaciones
          if (ticket.idTipoSolicitud && ticket.idEmpleado) {
            try {
              // Obtener idPlanta del empleado
              const { data: empleadoData, error: empleadoError } = await supabase
                .from('empleados')
                .select('idPlanta')
                .eq('idEmpleado', ticket.idEmpleado)
                .single();

              if (!empleadoError && empleadoData?.idPlanta) {
                // Obtener usuario asignado desde asignaciones
                const { data: asignacionData, error: asignacionError } = await supabase
                  .from('asignaciones')
                  .select('idUsuario')
                  .eq('idTipoSolicitud', ticket.idTipoSolicitud)
                  .eq('idPlanta', empleadoData.idPlanta)
                  .single();

                if (!asignacionError && asignacionData?.idUsuario) {
                  idUsuarioFinal = asignacionData.idUsuario;
                }
              }
            } catch (asignacionErr) {
              // Error obteniendo asignación original
            }
          }
          
          // Fallback: usar asignaciones si está disponible
          if (!idUsuarioFinal) {
            idUsuarioFinal = ticket.asignaciones?.idUsuario || null;
          }
        }

        if (idUsuarioFinal) {
          // Segunda consulta: obtener el nombre del usuario
          const { data: userData, error: userError } = await supabase
            .from('usuarios')
            .select('nombre')
            .eq('idUsuario', idUsuarioFinal)
            .single();

          if (!userError && userData?.nombre) {
            setUsuarioAsignado(userData.nombre);
          } else {
            setUsuarioAsignado(null);
          }
        } else {
          setUsuarioAsignado(null);
        }
      } catch (err) {
        // Silencioso: intentar con el usuario de asignaciones original
        const idUsuarioOriginal = ticket.asignaciones?.idUsuario;
        if (idUsuarioOriginal) {
          try {
            const { data: userData, error: userError } = await supabase
              .from('usuarios')
              .select('nombre')
              .eq('idUsuario', idUsuarioOriginal)
              .single();

            if (!userError && userData?.nombre) {
              setUsuarioAsignado(userData.nombre);
            } else {
              setUsuarioAsignado(null);
            }
          } catch {
            setUsuarioAsignado(null);
          }
        } else {
          setUsuarioAsignado(null);
        }
      }
    };

    obtenerUsuarioAsignado();
  }, [ticket]);

  const ticketData = useMemo(() => {
    // Función para obtener el usuario asignado actualmente
    const getUsuarioAsignado = () => {
      return usuarioAsignado;
    };

    // Función para obtener la fecha de creación desde seguimientos
    const getFechaCreacion = () => {
      const fechaSeguimiento = ticket.seguimientos?.find(s => s.idEstado === 1)?.fecha;
      if (fechaSeguimiento) {
        return formatDate ? formatDate(fechaSeguimiento) : formatMexicanDate(fechaSeguimiento);
      }
      return "Pendiente seguimiento inicial";
    };

    // Función para obtener la fecha apropiada según el estado
    const getFechaRelevante = () => {
      const estadoFechas = {
        1: () => getFechaCreacion(),
        2: () => {
          const fecha = ticket.seguimientos?.find(s => s.idEstado === 2)?.fecha;
          return fecha ? (formatDate ? formatDate(fecha) : formatMexicanDate(fecha)) : getFechaCreacion();
        },
        3: () => {
          const fecha = ticket.seguimientos?.find(s => s.idEstado === 3)?.fecha;
          return fecha ? (formatDate ? formatDate(fecha) : formatMexicanDate(fecha)) : getFechaCreacion();
        },
        4: () => {
          const fecha = ticket.seguimientos?.find(s => s.idEstado === 4)?.fecha;
          return fecha ? (formatDate ? formatDate(fecha) : formatMexicanDate(fecha)) : getFechaCreacion();
        },
        5: () => {
          const fecha = ticket.seguimientos?.find(s => s.idEstado === 5)?.fecha;
          return fecha ? (formatDate ? formatDate(fecha) : formatMexicanDate(fecha)) : getFechaCreacion();
        }
      };
      return estadoFechas[ticket.idEstado] ? estadoFechas[ticket.idEstado]() : getFechaCreacion();
    };

    const getEstadoTexto = () => {
      const estados = {
        1: "Sin atender",
        2: "Asignado", 
        3: "Atendido",
        4: "Cerrado",
        5: "Cancelado"
      };
      return estados[ticket.idEstado] || "Pendiente";
    };

    const getEstadoColor = () => {
      const colores = {
        1: "var(--color-estado-sin-atender)",
        2: "var(--color-estado-delegado)", 
        3: "var(--color-estado-atendido)",
        4: "var(--color-estado-cerrado)",
        5: "var(--color-estado-cancelado)"
      };
      return colores[ticket.idEstado] || "#ffc107";
    };

    const getEtiquetaFecha = () => {
      const etiquetas = {
        1: "Fecha de creación:",
        2: "Fecha de asignación:",
        3: "Fecha de atención:",
        4: "Fecha de cierre:",
        5: "Fecha de cancelación:"
      };
      return etiquetas[ticket.idEstado] || "Fecha de creación:";
    };

    return {
      usuarioDelegado: getUsuarioAsignado(),
      fechaCreacion: getFechaCreacion(),
      fechaRelevante: getFechaRelevante(),
      estadoTexto: getEstadoTexto(),
      estadoColor: getEstadoColor(),
      etiquetaFecha: getEtiquetaFecha(),
      borderColor: getEstadoColor(),
      isResolved: mode === "admin" ? ticket.atenciones?.length > 0 : false
    };
  }, [ticket, mode, formatDate, usuarioAsignado]);

  return ticketData;
};
