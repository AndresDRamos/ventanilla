import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "../supabase/supabase.config.jsx";
import { enviarNotificacionDelegacion } from "../services/notificationService.js";

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
          console.log('⏳ Esperando asignaciones para usuario idRol = 2...');
          return; // No hacer fetch hasta que las asignaciones estén disponibles
        } else {
          console.warn('⚠️ Timeout esperando asignaciones - procediendo sin filtrar');
        }
      }

      try {
        setLoading(true);
        console.log('🔄 Iniciando fetch de tickets para usuario:', user.idUsuario, 'idRol:', user.idRol);

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

        // Solo verificar asignaciones para usuarios con idRol = 2, no para idRol = 3
        if (user?.idRol === 2) {
          // Solo verificamos que el usuario tenga idUsuario válido
          if (!user.idUsuario) {
            setTickets([]);
            setLoading(false);
            return;
          }
        }
        // Para usuarios con idRol = 3, no verificamos asignaciones aquí, se filtran más adelante por delegaciones

        // Aplicar filtros
        if (filters.planta) {
          // Para filtros directos de planta, necesitamos hacer un sub-query
          const { data: empleadosEnPlanta } = await supabase
            .from("empleados")
            .select("idEmpleado")
            .eq("idPlanta", filters.planta);

          if (empleadosEnPlanta && empleadosEnPlanta.length > 0) {
            const empleadosIds = empleadosEnPlanta.map((emp) => emp.idEmpleado);
            query = query.in("idEmpleado", empleadosIds);
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
            query = query.in("idEmpleado", empleadosIds);
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

        // Aplicar filtro de asignaciones después de obtener los datos (solo para no-admin)
        if (user?.idRol !== 1) {
          // Lógica específica para usuarios con idRol = 3 (supervisores)
          if (user.idRol === 3) {
            // Obtener tickets delegados a este usuario que estén activos
            const { data: delegaciones } = await supabase
              .from("delegaciones")
              .select("idTicket")
              .eq("idUsuario", user.idUsuario)
              .eq("bActivo", true);

            if (delegaciones && delegaciones.length > 0) {
              // Filtrar solo los tickets que fueron delegados a este usuario
              const ticketsDelegadosIds = delegaciones.map((d) => d.idTicket);
              sortedData = sortedData.filter((ticket) =>
                ticketsDelegadosIds.includes(ticket.idTicket)
              );
            } else {
              // Si no tiene tickets delegados, no ve ninguno
              sortedData = [];
            }
          } else {
            // Lógica original para usuarios con idRol = 2 (administradores/supervisores)
            // Filtrar usando las asignaciones del usuario recibidas como parámetro
            const asignacionesUsuario = asignaciones.filter(a => a.idUsuario === user.idUsuario);

            if (asignacionesUsuario && asignacionesUsuario.length > 0) {
              // Filtrar tickets basado en las asignaciones
              sortedData = sortedData.filter((ticket) => {
                const matches = asignacionesUsuario.some(
                  (asignacion) =>
                    ticket.empleados?.idPlanta === asignacion.idPlanta &&
                    ticket.idTipoSolicitud === asignacion.idTipoSolicitud
                );

                return matches;
              });
            } else {
              // Si no hay asignaciones específicas para el usuario, 
              // verificar si es por timeout/error o realmente no tiene asignaciones
              if (asignaciones.length === 0) {
                console.warn('⚠️ Sin asignaciones disponibles - mostrando todos los tickets');
                // En caso de error/timeout, mostrar todos los tickets para no bloquear al usuario
              } else {
                // El usuario realmente no tiene asignaciones específicas
                sortedData = [];
              }
            }
          }
        }

        // Aplicar ordenamiento
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
        console.log('🔍 Usuario idRol = 2, verificando asignaciones:', asignaciones?.length);
        if (asignaciones && asignaciones.length > 0) {
          console.log('✅ Asignaciones disponibles, ejecutando fetch');
          fetchTickets();
        } else {
          console.log('⏳ Asignaciones aún no disponibles, esperando...');
          // No setear loading = false aquí, mantener el estado de carga
        }
      } else {
        // Para otros roles, ejecutar inmediatamente
        console.log('👤 Usuario idRol =', user.idRol, 'ejecutando fetch inmediato');
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
        console.log('🔄 Iniciando fetch de asignaciones...');
        
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
        
        console.log('✅ Asignaciones obtenidas:', data?.length || 0, 'registros');
        setAsignaciones(data || []);
      } catch (err) {
        console.error("❌ Error fetching asignaciones:", err);
        setAsignaciones([]); // Asegurar que sea array vacío en caso de error
        
        // En caso de timeout o error, no bloquear el sistema
        if (err.message === 'Timeout al cargar asignaciones') {
          console.warn('⚠️ Timeout en asignaciones - el sistema continuará con funcionalidad limitada');
        }
      } finally {
        setLoading(false);
        console.log('🏁 useAsignaciones loading terminado');
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

      // 4. Desactivar cualquier delegación activa del ticket (para autoasignaciones)
      const { error: delegacionError } = await supabase
        .from("delegaciones")
        .update({ bActivo: false })
        .eq("idTicket", idTicket)
        .eq("bActivo", true);

      // No lanzamos error si no hay delegaciones, solo si hay un problema real
      if (delegacionError && !delegacionError.message?.includes("0 rows")) {
        // Error al desactivar delegaciones
      }

      return { success: true, atencion: atencionData };
    } catch (err) {
      console.error("Error al registrar la atención:", err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  const delegarTicket = useCallback(
    async (idTicket, idUsuarioActual, idUsuarioDestino) => {
      try {
        setLoading(true);

        // 0. Invalidar todos los tokens anteriores para este ticket (en caso de re-delegación)
        try {
          const { error: invalidateTokenError } = await supabase
            .from("ticket_tokens")
            .update({ bActivo: false, fecha_uso: new Date().toISOString() })
            .eq("idTicket", idTicket)
            .eq("bActivo", true);

          if (invalidateTokenError) {
            // Advertencia al invalidar tokens en delegación
          }
        } catch (tokenError) {
          // Error manejando tokens (no crítico)
          // Continuar con la delegación aunque falle el manejo de tokens
        }

        // 2. Obtener datos completos del ticket antes de delegar
        const { data: ticketCompleto, error: fetchError } = await supabase
          .from("tickets")
          .select(
            `
          *,
          empleados (
            nombre,
            plantas (planta)
          ),
          tiposSolicitud (tipoSolicitud),
          prioridades (prioridad)
        `
          )
          .eq("idTicket", idTicket)
          .single();

        if (fetchError) throw fetchError;

        // 3. Obtener datos del usuario destinatario
        const { data: usuarioDestino, error: usuarioError } = await supabase
          .from("usuarios")
          .select("idUsuario, nombre, correo")
          .eq("idUsuario", idUsuarioDestino)
          .single();

        if (usuarioError) throw usuarioError;

        // 4. Crear seguimiento con idUsuario que delega e idEstado = 2 (delegado)
        const { error: seguimientoError } = await supabase
          .from("seguimientos")
          .insert({
            idTicket,
            idUsuario: idUsuarioActual,
            idEstado: 2,
          });

        if (seguimientoError) throw seguimientoError;

        // 4. Actualizar el idEstado del ticket a 2
        const { error: ticketError } = await supabase
          .from("tickets")
          .update({ idEstado: 2 })
          .eq("idTicket", idTicket);

        if (ticketError) throw ticketError;

        // 5. Desactivar delegaciones anteriores para este ticket
        const { error: desactivarError } = await supabase
          .from("delegaciones")
          .update({ bActivo: false })
          .eq("idTicket", idTicket)
          .eq("bActivo", true);

        if (desactivarError) throw desactivarError;

        // 6. Crear nueva delegación activa
        const { error: delegacionError } = await supabase
          .from("delegaciones")
          .insert({
            idTicket,
            idUsuario: idUsuarioDestino,
            // bActivo es TRUE por defecto
          });

        if (delegacionError) throw delegacionError;

        // 7. Enviar notificación por email (si está configurado)
        try {
          // Enviar notificación completa (token + email)
          const notificationResult = await enviarNotificacionDelegacion(
            ticketCompleto,
            usuarioDestino
          );

          if (notificationResult.success) {
            // Notificación enviada exitosamente
          } else {
            // Error enviando notificación (delegación completada)
          }
        } catch (notificationError) {
          // Error en sistema de notificaciones (delegación completada)
          // No fallar la delegación por problemas de notificación
        }

        return {
          success: true,
          mensaje: "Ticket delegado exitosamente.",
          ticketData: ticketCompleto,
          usuarioDestino,
        };
      } catch (err) {
        console.error("Error al delegar el ticket:", err);
        return { success: false, error: err.message };
      } finally {
        setLoading(false);
      }
    },
    []
  );

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

  // Función para re-asignar un ticket a otro usuario
  const reasignarTicket = useCallback(
    async (idTicket, nuevoIdUsuario) => {
      if (!user) return { success: false, error: "Usuario no disponible" };

      setLoading(true);
      try {
        // 0. Invalidar todos los tokens anteriores para este ticket (en caso de re-asignación)
        try {
          const { error: invalidateTokenError } = await supabase
            .from("ticket_tokens")
            .update({ bActivo: false, fecha_uso: new Date().toISOString() })
            .eq("idTicket", idTicket)
            .eq("bActivo", true);

          if (invalidateTokenError) {
            // Advertencia al invalidar tokens en reasignación
          }
        } catch (tokenError) {
          // Error manejando tokens en reasignación (no crítico)
          // Continuar con la reasignación aunque falle el manejo de tokens
        }

        // 1. Crear nuevo seguimiento con idEstado = 2 (delegado)
        const { error: seguimientoError } = await supabase
          .from("seguimientos")
          .insert({
            idTicket,
            idUsuario: user.idUsuario,
            idEstado: 2,
          });

        if (seguimientoError) throw seguimientoError;

        // 2. Desactivar delegación anterior
        const { error: desactivarError } = await supabase
          .from("delegaciones")
          .update({ bActivo: false })
          .eq("idTicket", idTicket)
          .eq("bActivo", true);

        if (desactivarError) throw desactivarError;

        // 3. Crear nueva delegación activa
        const { error: delegacionError } = await supabase
          .from("delegaciones")
          .insert({
            idTicket,
            idUsuario: nuevoIdUsuario,
            // bActivo es TRUE por defecto, no necesita especificarse
          });

        if (delegacionError) throw delegacionError;

        // 4. Enviar notificación al nuevo usuario (solo si tiene idRol = 3)
        try {
          // Obtener datos del nuevo usuario y del ticket completo
          const { data: nuevoUsuario, error: userError } = await supabase
            .from("usuarios")
            .select("idUsuario, idRol, correo, nombre")
            .eq("idUsuario", nuevoIdUsuario)
            .single();

          if (!userError && nuevoUsuario && nuevoUsuario.idRol === 3) {
            // Obtener datos completos del ticket
            const { data: ticketCompleto, error: ticketError } = await supabase
              .from("tickets")
              .select(
                `
              *,
              empleados (nombre, plantas (planta)),
              tiposSolicitud (tipoSolicitud),
              prioridades (prioridad),
              estados (estado)
            `
              )
              .eq("idTicket", idTicket)
              .single();

            if (!ticketError && ticketCompleto) {
              const notificationResult = await enviarNotificacionDelegacion(
                ticketCompleto,
                nuevoUsuario
              );

              if (!notificationResult.success) {
                console.error(
                  "Error al enviar notificación de reasignación:",
                  notificationResult.error
                );
                // No fallar toda la operación por error en notificación
              } else {
                // Notificación de reasignación enviada exitosamente
              }
            }
          }
        } catch (notificationError) {
          console.error(
            "Error en proceso de notificación de reasignación:",
            notificationError
          );
          // No fallar toda la operación por error en notificación
        }

        // El ticket mantiene idEstado = 2 (delegado)

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

  // Función para autoasignarse un ticket previamente delegado
  const autoasignarTicket = useCallback(async (idTicket) => {
    setLoading(true);
    try {
      // 1. Desactivar la delegación actual
      const { error: desactivarError } = await supabase
        .from("delegaciones")
        .update({ bActivo: false })
        .eq("idTicket", idTicket)
        .eq("bActivo", true);

      if (desactivarError) throw desactivarError;

      // 2. El usuario ahora puede responder el ticket normalmente
      // No se cambia el idEstado del ticket hasta que envíe la respuesta

      return { success: true };
    } catch (err) {
      console.error("Error al autoasignarse el ticket:", err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    crearAtencion,
    delegarTicket,
    cancelarTicket,
    reasignarTicket,
    autoasignarTicket,
    loading,
  };
};
