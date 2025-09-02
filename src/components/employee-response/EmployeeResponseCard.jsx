import { useState } from 'react';
import {
  Card,
  Header,
  Content,
  TicketInfo,
  InfoGrid,
  Description,
  ResponseSection,
  ResponseContent,
  ResponseMeta,
  RatingSection,
  StarRating,
  RatingLabels,
  CommentSection,
  ActionButtons,
  Button,
  AlreadyRatedMessage
} from './EmployeeResponse.styles';

export const EmployeeResponseCard = ({ responseData }) => {
  const {
    ticket,
    empleado,
    atencion,
    adminNombre,
    fechaRespuesta,
    calificacion,
    comentario,
    isSubmitted,
    submittingRating,
    submitRating
  } = responseData;

  // Estados locales para el formulario de calificación
  const [selectedRating, setSelectedRating] = useState(calificacion || 0);
  const [commentText, setCommentText] = useState(comentario || '');

  if (!ticket || !empleado || !atencion) {
    return null;
  }

  // Datos para mostrar
  const fechaCreacion = ticket.fechaCreacion 
    ? new Date(ticket.fechaCreacion).toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
      })
    : 'No disponible';

  const prioridad = ticket.prioridades?.prioridad || 'Normal';
  const tipoSolicitud = ticket.tiposSolicitud?.tipoSolicitud || 'Consulta General';

  const handleSubmitRating = () => {
    if (selectedRating === 0) {
      alert('Por favor selecciona una calificación de 1 a 3 estrellas');
      return;
    }
    
    submitRating(selectedRating, commentText);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          className={`star ${i <= selectedRating ? 'filled' : ''} ${isSubmitted ? 'disabled' : ''}`}
          onClick={isSubmitted ? undefined : () => setSelectedRating(i)}
          disabled={isSubmitted}
        >
          {i <= selectedRating ? '★' : '☆'}
        </button>
      );
    }
    return stars;
  };

  return (
    <Card>
      <Header>
        <h1>Tu Ticket Ha Sido Respondido</h1>
        <p>Hola {empleado.nombre}, hemos atendido tu solicitud</p>
      </Header>

      <Content>
        {/* Información del Ticket */}
        <TicketInfo>
          <h3>
            🎫 Información del Ticket
          </h3>
          
          <InfoGrid>
            <div className="info-item">
              <span className="label">Ticket:</span>
              <span className="value">#{ticket.idTicket}</span>
            </div>
            <div className="info-item">
              <span className="label">Fecha creación:</span>
              <span className="value">{fechaCreacion}</span>
            </div>
            <div className="info-item">
              <span className="label">Prioridad:</span>
              <span className="value">{prioridad}</span>
            </div>
            <div className="info-item">
              <span className="label">Tipo:</span>
              <span className="value">{tipoSolicitud}</span>
            </div>
          </InfoGrid>

          <Description>
            <div className="label">Tu solicitud original:</div>
            <div className="text">&ldquo;{ticket.descripcion}&rdquo;</div>
          </Description>
        </TicketInfo>

        {/* Respuesta del Administrador */}
        <ResponseSection>
          <h3>
            📋 Respuesta del Equipo
          </h3>
          
          <ResponseContent>
            <p>{atencion.respuesta}</p>
          </ResponseContent>

          <ResponseMeta>
            <div className="meta-item">
              <span className="icon">👤</span>
              <span className="label">Atendido por:</span>
              <span className="value">{adminNombre}</span>
            </div>
            <div className="meta-item">
              <span className="icon">📅</span>
              <span className="label">Fecha de respuesta:</span>
              <span className="value">{fechaRespuesta}</span>
            </div>
          </ResponseMeta>
        </ResponseSection>

        {/* Sección de Calificación */}
        <RatingSection>
          <h3>Califica Nuestro Servicio</h3>
          
          {isSubmitted ? (
            <AlreadyRatedMessage>
              <div className="icon">✅</div>
              <h4>¡Gracias por tu calificación!</h4>
              <p>
                Calificaste nuestro servicio con {calificacion} {calificacion === 1 ? 'estrella' : 'estrellas'}.
                {comentario && (
                  <>
                    <br />
                    <strong>Tu comentario:</strong> &ldquo;{comentario}&rdquo;
                  </>
                )}
              </p>
            </AlreadyRatedMessage>
          ) : (
            <>
              <div className="rating-description">
                ¿Cómo fue la atención que recibiste? Tu opinión nos ayuda a mejorar.
              </div>

              <StarRating>
                {renderStars()}
              </StarRating>

              <RatingLabels>
                <span>Necesita mejorar</span>
                <span>Buena atención</span>
                <span>Excelente servicio</span>
              </RatingLabels>

              <CommentSection>
                <label htmlFor="comment">
                  Comentarios adicionales (opcional):
                </label>
                <textarea
                  id="comment"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Cuéntanos más sobre tu experiencia..."
                  maxLength={500}
                  disabled={isSubmitted}
                />
                <div className="char-count">
                  {commentText.length}/500
                </div>
              </CommentSection>

              <ActionButtons>
                <Button
                  className="primary"
                  onClick={handleSubmitRating}
                  disabled={submittingRating || selectedRating === 0}
                >
                  {submittingRating ? 'Enviando...' : 'Enviar Calificación'}
                </Button>
              </ActionButtons>
            </>
          )}
        </RatingSection>
      </Content>
    </Card>
  );
};
