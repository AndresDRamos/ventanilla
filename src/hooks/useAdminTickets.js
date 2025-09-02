import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "../supabase/supabase.config.jsx";
import { enviarNotificacionRespuesta } from "../services/notificationService.js";

// Hook para obtener todos los tickets con filtros
export const useAdminTickets = (user, asignaciones = []) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usar useRef para trackear si ya se ejecutó el fetch inicial
  const hasInitialFetch = useRef(false);
  const currentUserId = useRef(null);

  const fetchTickets = useCallback(
    async (filters = {}) => {
      if (!user) return;

      // Para usuarios idRol = 2, esperar a que las asignaciones estén disponibles
      // Pero con timeout - si no cargan en tiempo razonable, continuar sin filtrar
      if (user.idRol === 2 && (!asignaciones || asignaciones.length === 0)) {
        // Si han pasado más de 15 segundos desde el montaje, proceder sin asignaciones
        const timeoutMs = 15000;
        const startTime = hasInitialFetch.current ? Date.now() - timeoutMs : Date.now();
        
        if (Date.now() - startTime < timeoutMs) {
          return; // No hacer fetch hasta que las asignaciones estén disponibles
        }
      }

      try {
        setLoading(true);

        // Función inline para crear seguimiento inicial
        const createInitialSeguimientoInline = async (ticket) => {
          try {
            const tieneSeguimientoInicial = ticket.seguimientos?.find(
              (s) => s.idEstado === 1
            );
            if (tieneSeguimientoInicial) {
              return { success: true, mensaje: "Ya tiene seguimiento inicial" };
            }

            const { error } = await supabase.from("seguimientos").insert({
              idTicket: ticket.idTicket,
              idUsuario: null,
              idEstado: 1,
            });

            if (error) throw error;
            return { success: true, mensaje: "Seguimiento inicial creado" };
          } catch (err) {
            console.error("Error creando seguimiento inicial:", err);
            return { success: false, error: err.message };
          }
        };

        let query = supabase
          .from("tickets")
          .select(
            `
          *,
          empleados (
            idEmpleado,
            codigoEmpleado,
            nombre,
            idPlanta,
            idEsquemaPago,
            plantas (
              idPlanta,
              planta
            )
          ),
          tiposSolicitud:idTipoSolicitud (tipoSolicitud),
          prioridades:idPrioridad (prioridad),
          atenciones (
            idAtencion,
            respuesta,
            calificacion,
            comentario,
            usuarios (
              nombre
            )
          ),
          seguimientos (
            idSeguimiento,
            fecha,
            idEstado,
            estados (
              idEstado,
              estado
            ),
            usuarios (
              idUsuario,
              nombre
            )
          )
        `
          )
          .order("idTicket", { ascending: false });

        // Aplicar filtro de asignaciones ANTES de ejecutar la query principal para evitar parpadeo
        let empleadosPermitidosIds = null;
        
        if (user?.idRol === 2) {
          // Para usuarios con idRol = 2, filtrar por asignaciones desde el inicio
          if (!user.idUsuario || !asignaciones || asignaciones.length === 0) {
            setTickets([]);
            setLoading(false);
            return;
          }
          
          const asignacionesUsuario = asignaciones.filter(a => a.idUsuario === user.idUsuario);
          
          if (asignacionesUsuario.length === 0) {
            setTickets([]);
            setLoading(false);
            return;
          }
          
          // Obtener todos los empleados que coincidan con las asignaciones del usuario
          const empleadosQueries = asignacionesUsuario.map(asignacion => 
            supabase
              .from("empleados")
              .select("idEmpleado")
              .eq("idPlanta", asignacion.idPlanta)
          );
          
          const empleadosResults = await Promise.all(empleadosQueries);
          const empleadosAsignados = empleadosResults.flatMap(result => 
            result.data || []
          );
          
          empleadosPermitidosIds = [...new Set(empleadosAsignados.map(emp => emp.idEmpleado))];
          
          if (empleadosPermitidosIds.length === 0) {
            setTickets([]);
            setLoading(false);
            return;
          }
          
          // Aplicar filtro por empleados de las plantas asignadas
          query = query.in("idEmpleado", empleadosPermitidosIds);
          
          // CRÍTICO: También filtrar por tipos de solicitud asignados al usuario
          const tiposAsignados = [...new Set(asignacionesUsuario.map(a => a.idTipoSolicitud))];
          query = query.in("idTipoSolicitud", tiposAsignados);
        }
        // Eliminada lógica de idRol = 3 (delegaciones) por problemas en BD

        // Aplicar filtros adicionales
        if (filters.planta) {
          // Para filtros directos de planta, necesitamos hacer un sub-query
          const { data: empleadosEnPlanta } = await supabase
            .from("empleados")
            .select("idEmpleado")
            .eq("idPlanta", filters.planta);

          if (empleadosEnPlanta && empleadosEnPlanta.length > 0) {
            const empleadosIds = empleadosEnPlanta.map((emp) => emp.idEmpleado);
            
            // Si ya tenemos filtro por asignaciones, hacer intersección
            if (empleadosPermitidosIds) {
              const empleadosInterseccion = empleadosIds.filter(id => empleadosPermitidosIds.includes(id));
              if (empleadosInterseccion.length === 0) {
                setTickets([]);
                setLoading(false);
                return;
              }
              query = query.in("idEmpleado", empleadosInterseccion);
            } else {
              query = query.in("idEmpleado", empleadosIds);
            }
          } else {
            // No hay empleados en esa planta
            setTickets([]);
            setLoading(false);
            return;
          }
        }
        if (filters.tipoSolicitud) {
          query = query.eq("idTipoSolicitud", filters.tipoSolicitud);
        }
        if (filters.prioridad) {
          query = query.eq("idPrioridad", filters.prioridad);
        }
        if (filters.empleado) {
          // Para filtros de empleado, también necesitamos sub-query
          const { data: empleadosFiltrados } = await supabase
            .from("empleados")
            .select("idEmpleado")
            .or(
              `codigoEmpleado.ilike.%${filters.empleado}%,nombre.ilike.%${filters.empleado}%`
            );

          if (empleadosFiltrados && empleadosFiltrados.length > 0) {
            const empleadosIds = empleadosFiltrados.map(
              (emp) => emp.idEmpleado
            );
            
            // Si ya tenemos filtro por asignaciones, hacer intersección
            if (empleadosPermitidosIds) {
              const empleadosInterseccion = empleadosIds.filter(id => empleadosPermitidosIds.includes(id));
              if (empleadosInterseccion.length === 0) {
                setTickets([]);
                setLoading(false);
                return;
              }
              query = query.in("idEmpleado", empleadosInterseccion);
            } else {
              query = query.in("idEmpleado", empleadosIds);
            }
          } else {
            // No hay empleados que coincidan
            setTickets([]);
            setLoading(false);
            return;
          }
        }

        const { data, error } = await query;

        if (error) throw error;

        let sortedData = data || [];

        // Migración automática: crear seguimientos iniciales para tickets que no los tengan
        const ticketsSinSeguimientoInicial = sortedData.filter(
          (ticket) => !ticket.seguimientos?.find((s) => s.idEstado === 1)
        );

        if (ticketsSinSeguimientoInicial.length > 0) {
          // Crear seguimientos iniciales en paralelo
          const promesasMigracion = ticketsSinSeguimientoInicial.map((ticket) =>
            createInitialSeguimientoInline(ticket)
          );

          try {
            await Promise.all(promesasMigracion);

            // Recargar datos para obtener los seguimientos recién creados
            const { data: dataActualizada } = await query;
            if (dataActualizada) {
              sortedData = dataActualizada;
            }
          } catch (migrationError) {
            console.error(
              "Error en migración de seguimientos:",
              migrationError
            );
          }
        }

        // Aplicar ordenamiento directamente sobre los datos filtrados
        if (filters.sortBy === "prioridad") {
          sortedData.sort((a, b) => a.idPrioridad - b.idPrioridad);
        } else {
          // Ordenar por fecha de creación (seguimiento con idEstado = 1 únicamente)
          sortedData.sort((a, b) => {
            const fechaA = a.seguimientos?.find((s) => s.idEstado === 1)?.fecha;
            const fechaB = b.seguimientos?.find((s) => s.idEstado === 1)?.fecha;

            // Si no tienen seguimiento de creación, van al final
            if (!fechaA && !fechaB) return 0;
            if (!fechaA) return 1;
            if (!fechaB) return -1;

            return new Date(fechaB) - new Date(fechaA);
          });
        }

        setTickets(sortedData);
        setError(null);
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [user, asignaciones]
  ); // Incluir user y asignaciones como dependencias

  useEffect(() => {
    // Solo ejecutar si el usuario cambió o es la primera vez
    if (user && (currentUserId.current !== user.idUsuario || !hasInitialFetch.current)) {
      currentUserId.current = user.idUsuario;
      hasInitialFetch.current = true;
      
      // Para usuarios idRol = 2, verificar que las asignaciones estén cargadas
      if (user.idRol === 2) {
        if (asignaciones && asignaciones.length > 0) {
          fetchTickets();
        }
        // Si no hay asignaciones aún, el fetchTickets se ejecutará cuando las asignaciones cambien
      } else {
        // Para otros roles, ejecutar inmediatamente
        fetchTickets();
      }
    }
  }, [user, fetchTickets, asignaciones]); // Agregar asignaciones como dependencia

  return { tickets, loading, error, refetchTickets: fetchTickets };
};

// Hook para obtener estadísticas de tickets
export const useTicketStats = (tickets) => {
  const stats = {
    total: tickets.length,
    sinAtender: tickets.filter((t) => t.idEstado === 1).length,
    reasignados: tickets.filter((t) => t.idEstado === 2).length,
    atendidos: tickets.filter((t) => t.idEstado === 3).length,
    cerrados: tickets.filter((t) => t.idEstado === 4).length,
    cancelados: tickets.filter((t) => t.idEstado === 5).length,
  };

  return stats;
};

// Hook para obtener asignaciones y responsables
export const useAsignaciones = () => {
  const [asignaciones, setAsignaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAsignaciones = async () => {
      try {
        // Timeout para conexiones lentas (10 segundos)
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout al cargar asignaciones')), 10000)
        );

        const fetchPromise = supabase.from("asignaciones").select(`
            *,
            usuarios:idUsuario (nombre),
            plantas:idPlanta (planta),
            tiposSolicitud:idTipoSolicitud (tipoSolicitud)
          `);

        const { data, error } = await Promise.race([fetchPromise, timeoutPromise]);

        if (error) throw error;
        
        setAsignaciones(data || []);
      } catch (err) {
        console.error("Error fetching asignaciones:", err);
        setAsignaciones([]); // Asegurar que sea array vacío en caso de error
      } finally {
        setLoading(false);
      }
    };

    fetchAsignaciones();
  }, []);

  const getResponsable = useCallback(
    (idPlanta, idTipoSolicitud) => {
      const asignacion = asignaciones.find(
        (a) => a.idPlanta === idPlanta && a.idTipoSolicitud === idTipoSolicitud
      );
      return asignacion?.usuarios?.nombre || "No asignado";
    },
    [asignaciones]
  );

  return { asignaciones, loading, getResponsable };
};

// Hook para crear atenciones
export const useAtenciones = (user) => {
  const [loading, setLoading] = useState(false);

  const crearAtencion = useCallback(async (idTicket, idUsuario, respuesta) => {
    try {
      setLoading(true);

      // 1. Crear seguimiento con idUsuario e idEstado = 3 (respondido)
      const { error: seguimientoError } = await supabase
        .from("seguimientos")
        .insert({
          idTicket,
          idUsuario,
          idEstado: 3,
        });

      if (seguimientoError) throw seguimientoError;

      // 2. Crear atención con respuesta, idTicket e idUsuario
      const { data: atencionData, error: atencionError } = await supabase
        .from("atenciones")
        .insert({
          idTicket,
          idUsuario, // Agregar el idUsuario que responde
          respuesta,
        })
        .select()
        .single();

      if (atencionError) throw atencionError;

      // 3. Actualizar el idEstado del ticket a 3
      const { error: ticketError } = await supabase
        .from("tickets")
        .update({ idEstado: 3 })
        .eq("idTicket", idTicket);

      if (ticketError) throw ticketError;

      // 4. NUEVO: Enviar notificación por email al empleado (si tiene correo)
      try {
        // Obtener datos completos del ticket incluyendo empleado
        const { data: ticketCompleto, error: ticketError } = await supabase
          .from("tickets")
          .select(`
            *,
            empleados (
              idEmpleado,
              nombre,
              correo,
              plantas (planta)
            ),
            tiposSolicitud (tipoSolicitud),
            prioridades (prioridad)
          `)
          .eq("idTicket", idTicket)
          .single();

        if (!ticketError && ticketCompleto?.empleados?.correo) {
          // Enviar notificación solo si el empleado tiene correo
          const notificationResult = await enviarNotificacionRespuesta(
            ticketCompleto,
            ticketCompleto.empleados,
            atencionData
          );

          if (notificationResult.success) {
            console.log('Notificación de respuesta enviada exitosamente');
          } else {
            console.warn('Error enviando notificación de respuesta:', notificationResult.error);
          }
        }
      } catch (notificationError) {
        // No fallar toda la operación por problemas de notificación
        console.warn('Error en el sistema de notificaciones:', notificationError);
      }

      return { success: true, atencion: atencionData };
    } catch (err) {
      console.error("Error al registrar la atención:", err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  const cancelarTicket = useCallback(
    async (idTicket, idUsuario, motivoCancelacion) => {
      try {
        setLoading(true);

        // 1. Crear seguimiento con idUsuario e idEstado = 5 (cancelado)
        const { error: seguimientoError } = await supabase
          .from("seguimientos")
          .insert({
            idTicket,
            idUsuario,
            idEstado: 5,
          });

        if (seguimientoError) throw seguimientoError;

        // 2. Crear atención con el motivo de cancelación
        const { data: atencionData, error: atencionError } = await supabase
          .from("atenciones")
          .insert({
            idTicket,
            respuesta: motivoCancelacion,
          })
          .select()
          .single();

        if (atencionError) throw atencionError;

        // 3. Actualizar el idEstado del ticket a 5
        const { error: ticketError } = await supabase
          .from("tickets")
          .update({ idEstado: 5 })
          .eq("idTicket", idTicket);

        if (ticketError) throw ticketError;

        return { success: true, atencion: atencionData };
      } catch (err) {
        console.error("Error al cancelar el ticket:", err);
        return { success: false, error: err.message };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Función para re-asignar un ticket a otro usuario (simplificada sin delegaciones)
  const reasignarTicket = useCallback(
    async (idTicket, _nuevoIdUsuario) => {
      if (!user) return { success: false, error: "Usuario no disponible" };

      setLoading(true);
      try {
        // 1. Crear nuevo seguimiento con idEstado = 2 (reasignado)
        const { error: seguimientoError } = await supabase
          .from("seguimientos")
          .insert({
            idTicket,
            idUsuario: user.idUsuario,
            idEstado: 2,
          });

        if (seguimientoError) throw seguimientoError;

        return { success: true };
      } catch (err) {
        console.error("Error al re-asignar el ticket:", err);
        return { success: false, error: err.message };
      } finally {
        setLoading(false);
      }
    },
    [user]
  );

  // Función para autoasignarse un ticket (ya no necesaria sin delegaciones)
  const autoasignarTicket = useCallback(async (_idTicket) => {
    // Sin tabla de delegaciones, esta función ya no es necesaria
    // Los tickets se pueden responder directamente
    return { success: true };
  }, []);

  return {
    crearAtencion,
    cancelarTicket,
    reasignarTicket,
    autoasignarTicket,
    loading,
  };
};
