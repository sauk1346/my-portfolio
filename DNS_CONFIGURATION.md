# Configuración DNS para antoniomorales.cl

Esta guía te ayudará a conectar tu dominio `www.antoniomorales.cl` con tu VPS de Hostinger.

## Paso 1: Configurar los Registros DNS

Necesitas acceder al panel de control donde compraste el dominio (probablemente NIC Chile o tu proveedor de dominios) y agregar los siguientes registros DNS:

### Registros DNS Necesarios

| Tipo | Nombre/Host | Valor/Destino | TTL |
|------|-------------|---------------|-----|
| A | @ | **TU_IP_DEL_VPS** | 3600 |
| A | www | **TU_IP_DEL_VPS** | 3600 |

**Importante:** Reemplaza `TU_IP_DEL_VPS` con la dirección IP real de tu VPS de Hostinger.

### Cómo obtener la IP de tu VPS

Si no conoces la IP de tu VPS, puedes obtenerla de dos formas:

1. **Desde el panel de Hostinger:**
   - Accede a tu panel de Hostinger
   - Ve a la sección de VPS
   - La IP aparecerá en los detalles del servidor

2. **Conectándote por SSH:**
   ```bash
   # Una vez conectado al VPS, ejecuta:
   curl ifconfig.me
   # O también:
   hostname -I
   ```

### Ejemplo de configuración DNS

Si tu IP del VPS es `123.45.67.89`, los registros quedarían así:

```
Tipo: A
Host: @
Valor: 123.45.67.89
TTL: 3600

Tipo: A
Host: www
Valor: 123.45.67.89
TTL: 3600
```

### Donde configurar los DNS

#### Si compraste el dominio en NIC Chile:
1. Accede a https://www.nic.cl
2. Inicia sesión con tus credenciales
3. Ve a "Mis Dominios" → selecciona `antoniomorales.cl`
4. Busca la opción "Administrar DNS" o "Gestionar DNS"
5. Agrega los registros A mencionados arriba

#### Si usas Hostinger para el dominio:
1. Accede al panel de Hostinger
2. Ve a "Dominios"
3. Selecciona `antoniomorales.cl`
4. Ve a "DNS / Name Servers"
5. Agrega los registros A

#### Si usas otro proveedor:
El proceso es similar, busca la sección de "Gestión DNS" o "DNS Management" en tu panel de control.

## Paso 2: Verificar la Propagación DNS

Los cambios DNS pueden tardar entre 5 minutos y 48 horas en propagarse, aunque normalmente toma entre 15-30 minutos.

### Verificar desde tu computadora:

```bash
# Verificar si el dominio apunta a tu IP
dig antoniomorales.cl +short
dig www.antoniomorales.cl +short

# O usando nslookup
nslookup antoniomorales.cl
nslookup www.antoniomorales.cl

# O usando host
host antoniomorales.cl
host www.antoniomorales.cl
```

### Verificar online:
- https://dnschecker.org
- Ingresa `antoniomorales.cl` y verifica que apunte a la IP de tu VPS en diferentes ubicaciones

## Paso 3: Configurar NGINX en el VPS

Una vez que los DNS estén propagados, configura NGINX en tu VPS:

```bash
# Conectar al VPS
ssh usuario@TU_IP_VPS

# Crear el archivo de configuración de NGINX
sudo nano /etc/nginx/sites-available/antoniomorales.cl
```

Copia y pega la siguiente configuración:

```nginx
server {
    listen 80;
    server_name antoniomorales.cl www.antoniomorales.cl;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Guarda el archivo (Ctrl+O, Enter, Ctrl+X).

```bash
# Crear enlace simbólico para habilitar el sitio
sudo ln -s /etc/nginx/sites-available/antoniomorales.cl /etc/nginx/sites-enabled/

# Verificar que la configuración sea correcta
sudo nginx -t

# Si todo está OK, recargar NGINX
sudo systemctl reload nginx
```

## Paso 4: Verificar que el Sitio Funciona

```bash
# Desde tu computadora, prueba acceder:
curl http://antoniomorales.cl
curl http://www.antoniomorales.cl

# O simplemente abre tu navegador y visita:
# http://antoniomorales.cl
# http://www.antoniomorales.cl
```

## Paso 5: Configurar SSL (HTTPS)

Una vez que el sitio funcione con HTTP, configura el certificado SSL:

```bash
# Conectar al VPS
ssh usuario@TU_IP_VPS

# Instalar certificado SSL con Certbot
sudo certbot --nginx -d antoniomorales.cl -d www.antoniomorales.cl

# Seguir las instrucciones en pantalla:
# 1. Ingresa tu email
# 2. Acepta los términos
# 3. Selecciona si quieres compartir tu email (opcional)
# 4. Certbot configurará automáticamente NGINX para usar HTTPS
```

Después de esto, tu sitio estará disponible en:
- https://antoniomorales.cl
- https://www.antoniomorales.cl

Certbot también configurará la renovación automática del certificado.

## Paso 6: Forzar HTTPS (Opcional pero Recomendado)

Certbot ya habrá agregado esto, pero verifica que tu configuración de NGINX incluya la redirección:

```bash
sudo nano /etc/nginx/sites-available/antoniomorales.cl
```

Deberías ver algo como:

```nginx
server {
    listen 80;
    server_name antoniomorales.cl www.antoniomorales.cl;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name antoniomorales.cl www.antoniomorales.cl;

    ssl_certificate /etc/letsencrypt/live/antoniomorales.cl/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/antoniomorales.cl/privkey.pem;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Resumen del Proceso Completo

1. ✅ **Configurar DNS** - Agregar registros A apuntando a la IP del VPS
2. ⏳ **Esperar propagación** - Puede tomar de 15 minutos a 48 horas
3. ✅ **Verificar propagación** - Usar dig/nslookup o dnschecker.org
4. ✅ **Configurar NGINX** - Crear archivo de configuración y habilitarlo
5. ✅ **Verificar sitio HTTP** - Probar que el sitio cargue
6. ✅ **Instalar SSL** - Usar Certbot para obtener certificado HTTPS
7. ✅ **Verificar sitio HTTPS** - Confirmar que funcione con SSL

## Solución de Problemas

### El dominio no resuelve (no encuentra la IP)
- Verifica que los registros DNS estén correctos
- Espera más tiempo (la propagación puede tardar hasta 48h)
- Usa `dig` o `nslookup` para verificar

### Error 502 Bad Gateway
- Verifica que la aplicación esté corriendo: `pm2 list`
- Verifica los logs: `pm2 logs personal-portfolio`
- Confirma que el puerto 3001 esté libre: `sudo lsof -i :3001`

### Error "Connection Refused"
- Verifica que NGINX esté corriendo: `sudo systemctl status nginx`
- Revisa los logs de NGINX: `sudo tail -f /var/log/nginx/error.log`
- Verifica el firewall: `sudo ufw status`

### Certbot falla al instalar SSL
- Asegúrate de que el sitio funcione primero con HTTP
- Verifica que los DNS estén completamente propagados
- Revisa que el puerto 80 esté abierto en el firewall

## Comandos Útiles de Verificación

```bash
# Ver estado de NGINX
sudo systemctl status nginx

# Reiniciar NGINX
sudo systemctl restart nginx

# Ver logs de NGINX en tiempo real
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Ver certificados SSL instalados
sudo certbot certificates

# Renovar certificados manualmente
sudo certbot renew

# Ver estado de PM2
pm2 list
pm2 logs personal-portfolio
```

## Contacto y Ayuda

Si encuentras problemas durante la configuración, verifica:
1. Los logs de PM2: `pm2 logs`
2. Los logs de NGINX: `sudo tail -f /var/log/nginx/error.log`
3. El estado del servicio: `sudo systemctl status nginx`
4. La propagación DNS: https://dnschecker.org
