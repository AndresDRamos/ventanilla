import { formatMexicanDate } from "../../utils/dateUtils";
import {
  ResponseViewSection,
  ResponseInfo,
  ResponseViewTitle,
  ResponseText,
  AttentionInfo,
  AttentionInfoRow,
  AttentionInfoLabel,
  AttentionInfoValue,
} from "./TicketModal.styles";

const TicketModalResponse = ({ ticket, usuarioQueAtendio }) => {
  if (!ticket) return null;

  // Mostrar respuesta si existe
  const hasResponse = ticket.atenciones && ticket.atenciones.length > 0 && ticket.atenciones[0].respuesta;
  const hasAtencion = ticket.atenciones && ticket.atenciones.length > 0;
  const response = hasAtencion ? ticket.atenciones[0] : null;

  // Obtener el usuario desde las atenciones o desde el prop
  const usuarioAtendio =
    response?.usuarios?.nombre || usuarioQueAtendio?.nombre || "No disponible";

  return (
    <ResponseViewSection>
      {hasResponse && (
        <>
          <ResponseViewTitle>Respuesta:</ResponseViewTitle>
          <ResponseText>{response.respuesta}</ResponseText>
        </>
      )}

      {/* Información de atención para tickets atendidos/cancelados */}
      {(hasAtencion || ticket.idEstado === 5 || ticket.idEstado === 3) && (
        <AttentionInfo>
          <AttentionInfoRow>
            <AttentionInfoLabel>
              {ticket.idEstado === 5 ? "Cancelado por:" : "Atendido por:"}
            </AttentionInfoLabel>
            <AttentionInfoValue>{usuarioAtendio}</AttentionInfoValue>
          </AttentionInfoRow>

          <AttentionInfoRow>
            <AttentionInfoLabel>
              {ticket.idEstado === 5
                ? "Fecha de cancelación:"
                : "Fecha de atención:"}
            </AttentionInfoLabel>
            <AttentionInfoValue>
              {(() => {
                const estadoBuscado = ticket.idEstado === 5 ? 5 : 3;
                const fechaEstado = ticket.seguimientos?.find(
                  (s) => s.idEstado === estadoBuscado
                )?.fecha;
                return fechaEstado
                  ? formatMexicanDate(fechaEstado)
                  : "No disponible";
              })()}
            </AttentionInfoValue>
          </AttentionInfoRow>
        </AttentionInfo>
      )}

      {/* Información adicional para tickets atendidos con calificación */}
      {ticket.idEstado === 4 && response?.calificacion && response.calificacion > 0 && (
        <ResponseInfo>
          <div>
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Calificación del empleado:</strong>
              <span style={{ marginLeft: '0.5rem', fontSize: '1.2rem', color: '#ffc107' }}>
                {'★'.repeat(response.calificacion)}{'☆'.repeat(3 - response.calificacion)}
              </span>
              <span style={{ marginLeft: '0.25rem', fontSize: '0.9rem', color: '#6c757d' }}>
                ({response.calificacion}/3)
              </span>
            </div>
            {response.comentario && response.comentario.trim() && (
              <div style={{ marginTop: '0.5rem' }}>
                <strong>Comentarios del empleado:</strong>
                <div style={{ 
                  marginTop: '0.25rem', 
                  padding: '0.5rem', 
                  background: '#f8f9fa', 
                  borderRadius: '4px',
                  fontStyle: 'italic',
                  color: '#495057'
                }}>
                  &ldquo;{response.comentario}&rdquo;
                </div>
              </div>
            )}
          </div>
        </ResponseInfo>
      )}

      {/* Información adicional para tickets cancelados */}
      {ticket.idEstado === 5 && (
        <ResponseInfo
          style={{
            background: "#fff3cd",
            borderLeftColor: "#ffc107",
            color: "#856404",
          }}
        >
          <strong>Estado:</strong> Este ticket ha sido cancelado.
        </ResponseInfo>
      )}
    </ResponseViewSection>
  );
};

export default TicketModalResponse;
