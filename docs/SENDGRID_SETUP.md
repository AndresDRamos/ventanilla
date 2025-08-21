# 📧 Guía: Configurar SendGrid Email API

## 1. Crear cuenta en SendGrid
- Ir a: https://sendgrid.com/
- Crear cuenta gratuita (incluye 100 emails/día gratis)
- Verificar email

## 2. Crear API Key
### En SendGrid Dashboard:
1. Ir a: Settings > API Keys
2. Click "Create API Key"
3. Elegir "Restricted Access"
4. Configurar permisos:
   - Mail Send: **FULL ACCESS**
   - Mail Settings: Read Access (opcional)
   - Stats: Read Access (opcional)
5. Nombrar la key: "Ventanilla-Notifications"
6. **COPIAR Y GUARDAR** la API Key (no se puede ver después)

```
API Key: SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## 3. Verificar dominio de envío
### Opción A: Single Sender Verification (Más fácil)
1. Settings > Sender Authentication > Single Sender Verification
2. Click "Create New Sender"
3. Completar datos:
   ```
   From Name: Sistema Ventanilla EZI
   From Email: noreply@tudominio.com  # O tu email personal
   Address, City, etc.
   ```
4. Verificar email que llega a tu bandeja

### Opción B: Domain Authentication (Para producción)
1. Settings > Sender Authentication > Domain Authentication
2. Agregar tu dominio (ej: tudominio.com)
3. Seguir instrucciones DNS
4. Verificar registros DNS

## 4. Configurar variables:
```bash
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@tudominio.com  # Email verificado
```

## 5. Configuración avanzada (opcional)

### Templates personalizados:
1. Email API > Dynamic Templates
2. Crear template HTML personalizado
3. Usar ID de template en código

### Supresión lists:
1. Suppression Management
2. Configurar unsubscribe groups
3. Manejar bounces automáticamente

## 6. Testing
### Desde SendGrid Dashboard:
1. Email API > Integration Guide
2. Usar "Test Your Integration"
3. Enviar email de prueba

### Desde código:
```javascript
// Test básico con curl
curl -X "POST" "https://api.sendgrid.com/v3/mail/send" \
     -H "Authorization: Bearer SG.tu-api-key" \
     -H "Content-Type: application/json" \
     -d '{
       "personalizations": [{"to": [{"email": "test@email.com"}]}],
       "from": {"email": "noreply@tudominio.com"},
       "subject": "Test",
       "content": [{"type": "text/plain", "value": "Hello World!"}]
     }'
```

## 💰 Límites gratuitos:
- **Free Plan**: 100 emails/día permanentemente
- **Essentials**: $19.95/mes = 50,000 emails/mes
- **Pro**: $89.95/mes = 100,000 emails/mes

## 📊 Monitoreo:
1. Statistics > Overview
2. Ver tasas de entrega, bounces, opens
3. Suppressions para emails bloqueados
4. Activity Feed para debugging

## ⚠️ Consejos importantes:
- Usar dominios propios para mejor deliverability
- Evitar spam words en subject/content
- Implementar unsubscribe links
- Monitorear reputation score
