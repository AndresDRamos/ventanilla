-- Script para crear tabla ticket_tokens en Supabase
-- Ejecutar en: Supabase Dashboard → SQL Editor → New Query

-- 1. Crear tabla ticket_tokens
CREATE TABLE IF NOT EXISTS ticket_tokens (
    id SERIAL PRIMARY KEY,
    token VARCHAR(255) UNIQUE NOT NULL,
    id_ticket INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    usado BOOLEAN DEFAULT FALSE,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    fecha_expiracion TIMESTAMP WITH TIME ZONE NOT NULL,
    
    -- Claves foráneas
    CONSTRAINT fk_ticket_tokens_ticket 
        FOREIGN KEY (id_ticket) REFERENCES tickets(idTicket) ON DELETE CASCADE,
    CONSTRAINT fk_ticket_tokens_usuario 
        FOREIGN KEY (id_usuario) REFERENCES usuarios(idUsuario) ON DELETE CASCADE
);

-- 2. Crear índices para optimizar consultas
CREATE INDEX IF NOT EXISTS idx_ticket_tokens_token ON ticket_tokens(token);
CREATE INDEX IF NOT EXISTS idx_ticket_tokens_ticket ON ticket_tokens(id_ticket);
CREATE INDEX IF NOT EXISTS idx_ticket_tokens_usuario ON ticket_tokens(id_usuario);
CREATE INDEX IF NOT EXISTS idx_ticket_tokens_usado ON ticket_tokens(usado);
CREATE INDEX IF NOT EXISTS idx_ticket_tokens_expiracion ON ticket_tokens(fecha_expiracion);

-- 3. Comentarios para documentación
COMMENT ON TABLE ticket_tokens IS 'Tokens para acceso directo a tickets sin autenticación';
COMMENT ON COLUMN ticket_tokens.token IS 'Token único para acceso directo (UUID)';
COMMENT ON COLUMN ticket_tokens.id_ticket IS 'ID del ticket al que da acceso';
COMMENT ON COLUMN ticket_tokens.id_usuario IS 'ID del usuario destinatario del token';
COMMENT ON COLUMN ticket_tokens.usado IS 'Si el token ya fue utilizado';
COMMENT ON COLUMN ticket_tokens.fecha_expiracion IS 'Fecha y hora de expiración del token';

-- 4. Configurar políticas RLS (Row Level Security)
ALTER TABLE ticket_tokens ENABLE ROW LEVEL SECURITY;

-- Política para permitir insertar tokens (desde la aplicación)
CREATE POLICY "Permitir insertar tokens" ON ticket_tokens
    FOR INSERT WITH CHECK (true);

-- Política para permitir leer tokens válidos
CREATE POLICY "Permitir leer tokens válidos" ON ticket_tokens
    FOR SELECT USING (
        fecha_expiracion > NOW() 
        AND usado = false
    );

-- Política para permitir actualizar tokens (marcar como usados)
CREATE POLICY "Permitir marcar tokens como usados" ON ticket_tokens
    FOR UPDATE USING (true)
    WITH CHECK (true);

-- 5. Verificar que la tabla se creó correctamente
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'ticket_tokens'
ORDER BY ordinal_position;

-- 6. Verificar políticas RLS
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'ticket_tokens';
