# Guía de Despliegue - Portfolio Personal

Este documento explica cómo desplegar este proyecto en tu VPS de Hostinger **sin afectar** el proyecto existente en `/home/my-website2`.

## Configuración de Puertos

- **Proyecto existente** (my-website2): Puerto 3000
- **Este proyecto** (personal_website): Puerto 3001

## Pasos de Despliegue

### 1. Conectar al VPS

```bash
ssh usuario@tu-ip-vps
```

### 2. Clonar el repositorio

```bash
# Ir al directorio /var/www
cd /var/www

# Clonar el repositorio
sudo git clone https://github.com/tu-usuario/personal_website.git

# Cambiar permisos
sudo chown -R $USER:$USER /var/www/personal_website
```

### 3. Instalar dependencias y construir

```bash
cd /var/www/personal_website
npm install
npm run build
```

### 4. Configurar PM2

El archivo `ecosystem.config.js` ya está incluido en el proyecto. Simplemente ejecuta:

```bash
cd /var/www/personal_website
pm2 start ecosystem.config.js
pm2 save
```

Para verificar que la aplicación está corriendo:

```bash
pm2 list
pm2 logs personal-portfolio
```

### 5. Configurar NGINX

#### 5.1 Crear archivo de configuración

```bash
sudo nano /etc/nginx/sites-available/tu-dominio-portfolio.com
```

#### 5.2 Copiar la configuración

Usa el contenido del archivo `nginx-config-example.conf` incluido en este proyecto, reemplazando `tu-dominio-portfolio.com` con tu dominio real.

```nginx
server {
    listen 80;
    server_name tu-dominio-portfolio.com www.tu-dominio-portfolio.com;

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

#### 5.3 Habilitar el sitio

```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/tu-dominio-portfolio.com /etc/nginx/sites-enabled/

# Verificar la configuración
sudo nginx -t

# Recargar NGINX
sudo systemctl reload nginx
```

### 6. Configurar SSL con Let's Encrypt

```bash
sudo certbot --nginx -d tu-dominio-portfolio.com -d www.tu-dominio-portfolio.com
```

## Verificación

Para verificar que ambos proyectos están corriendo:

```bash
# Ver todos los procesos de PM2
pm2 list

# Deberías ver algo como:
# ┌────┬─────────────────────┬─────────┬─────────┬──────────┐
# │ id │ name                │ mode    │ status  │ port     │
# ├────┼─────────────────────┼─────────┼─────────┼──────────┤
# │ 0  │ nextjs-app          │ cluster │ online  │ 3000     │
# │ 1  │ personal-portfolio  │ fork    │ online  │ 3001     │
# └────┴─────────────────────┴─────────┴─────────┴──────────┘

# Verificar logs de este proyecto
pm2 logs personal-portfolio

# Verificar que NGINX está sirviendo correctamente
curl -I http://localhost:3001
```

## Actualizar la Aplicación

Cuando hagas cambios y quieras actualizar:

```bash
cd /var/www/personal_website
git pull
npm install
npm run build
pm2 restart personal-portfolio
```

## Comandos Útiles de PM2

```bash
# Ver estado de todas las apps
pm2 list

# Ver logs en tiempo real
pm2 logs personal-portfolio

# Detener la app
pm2 stop personal-portfolio

# Reiniciar la app
pm2 restart personal-portfolio

# Eliminar la app de PM2
pm2 delete personal-portfolio

# Ver información detallada
pm2 show personal-portfolio

# Ver uso de recursos
pm2 monit
```

## Solución de Problemas

### La aplicación no inicia

```bash
# Verificar los logs
pm2 logs personal-portfolio

# Verificar que el puerto 3001 no esté en uso
sudo lsof -i :3001

# Reiniciar PM2
pm2 restart personal-portfolio
```

### NGINX devuelve error 502

```bash
# Verificar que la app esté corriendo
pm2 list

# Verificar logs de NGINX
sudo tail -f /var/log/nginx/error.log

# Verificar la configuración de NGINX
sudo nginx -t
```

### Conflicto de puertos

Si el puerto 3001 ya está en uso:

1. Edita `ecosystem.config.js` y cambia el puerto a otro (ej: 3002)
2. Reinicia la aplicación con PM2
3. Actualiza la configuración de NGINX para apuntar al nuevo puerto

## Estructura de Archivos en el VPS

```
/var/www/
├── my-website2/           (Proyecto existente - Puerto 3000)
│   └── ...
└── personal_website/      (Este proyecto - Puerto 3001)
    ├── app/
    ├── public/
    ├── node_modules/
    ├── .next/
    ├── package.json
    ├── ecosystem.config.js
    └── ...

/etc/nginx/sites-available/
├── tu-dominio-existente.com        (Config del proyecto existente)
└── tu-dominio-portfolio.com        (Config de este proyecto)

/etc/nginx/sites-enabled/
├── tu-dominio-existente.com        (Enlace simbólico)
└── tu-dominio-portfolio.com        (Enlace simbólico)
```

## Notas Importantes

1. **No necesitas reinstalar Node.js, PM2 o NGINX** - ya están instalados
2. **Los dos proyectos correrán simultáneamente** sin interferir entre sí
3. **Cada proyecto necesita su propio dominio o subdominio**
4. **Asegúrate de que los registros DNS apunten a la IP de tu VPS**
5. **El firewall (UFW) ya debería estar configurado** del proyecto anterior

## Dominio/Subdominio

Tienes varias opciones para acceder a este proyecto:

1. **Dominio diferente**: `portfolio.com`
2. **Subdominio**: `portfolio.tu-dominio.com`
3. **Subdominio de proyecto**: `personal.tu-dominio.com`

Asegúrate de configurar los registros DNS correspondientes en tu proveedor de dominio.
