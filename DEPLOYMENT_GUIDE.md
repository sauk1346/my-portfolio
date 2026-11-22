# Guía de despliegue

El sitio es estático (Astro). Nginx sirve los archivos de `/root/portfolio-live` en el VPS; no hay proceso Node en ejecución.

## Despliegue automático

Cada push a `main` ejecuta `.github/workflows/deploy.yml`:

1. GitHub Actions entra por SSH al VPS con la clave guardada en el secreto `VPS_DEPLOY_KEY`.
2. En el VPS, esa clave está restringida en `/root/.ssh/authorized_keys` a un solo comando (`/root/deploy-portfolio.sh`), sin terminal ni redirección de puertos. La huella del servidor está fijada en el workflow.
3. El script (copia versionada en `deploy/deploy-portfolio.sh`) hace `git pull`, `npm ci`, `npm run build` y copia `dist/` con `rsync` a `/root/portfolio-live`. Si el build falla, la copia no se hace y el sitio publicado no cambia.

Para volver a desplegar sin commits nuevos: `gh workflow run deploy.yml` y luego `gh run watch`.

## Piezas en el VPS

| Pieza | Ubicación |
|---|---|
| Repositorio clonado | `/root/my-portfolio` |
| Archivos publicados | `/root/portfolio-live` |
| Script de despliegue | `/root/deploy-portfolio.sh` |
| Configuración de Nginx | `/etc/nginx/sites-available/antoniomorales.cl` (ejemplo en `nginx-config-example.conf`) |
| Node | nvm, `v22.23.3` (la ruta está fijada en el script) |

## Si cambia la versión de Node del VPS

Actualizar la ruta `PATH` en `/root/deploy-portfolio.sh` y en `deploy/deploy-portfolio.sh`.

## Certificado SSL

Lo gestiona Certbot (renovación automática). Las líneas `# managed by Certbot` de la configuración de Nginx no se editan a mano.
