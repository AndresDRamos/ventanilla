-- Script SQL para añadir campo email a la tabla usuarios
-- Ejecutar en Supabase SQL Editor

-- 1. Añadir columna correo si no existe
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'usuarios' AND column_name = 'correo'
    ) THEN
        ALTER TABLE usuarios ADD COLUMN correo VARCHAR(255);
        COMMENT ON COLUMN usuarios.correo IS 'Email del usuario para notificaciones';
    END IF;
END $$;

-- 2. Verificar estructura de la tabla
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'usuarios'
ORDER BY ordinal_position;

-- 3. Ejemplo de cómo actualizar emails para usuarios existentes
-- IMPORTANTE: Reemplaza con emails reales antes de ejecutar

/*
UPDATE usuarios 
SET correo = 'admin@ezi.com' 
WHERE idUsuario = 1 AND correo IS NULL;

UPDATE usuarios 
SET correo = 'supervisor@ezi.com' 
WHERE idUsuario = 2 AND correo IS NULL;

UPDATE usuarios 
SET correo = 'delegado@ezi.com' 
WHERE idUsuario = 3 AND correo IS NULL;
*/

-- 4. Consulta para verificar usuarios con email
SELECT 
    idUsuario,
    nombre,
    usuario,
    correo,
    idRol,
    CASE 
        WHEN idRol = 1 THEN 'Administrador'
        WHEN idRol = 2 THEN 'Supervisor'
        WHEN idRol = 3 THEN 'Delegado'
        ELSE 'Desconocido'
    END as rol_nombre,
    CASE 
        WHEN correo IS NOT NULL THEN '✅ Puede recibir emails'
        ELSE '❌ Sin email configurado'
    END as estado_email
FROM usuarios
ORDER BY idUsuario;
