#!/usr/bin/env bash
# Deploy de antoniomorales.cl: lo invoca GitHub Actions (clave con comando forzado).
# Hace pull del repo, build de Astro y sincroniza al directorio que sirve Nginx.
# Copia versionada: la que se ejecuta vive en /root/deploy-portfolio.sh del VPS.
set -euo pipefail
export PATH="$HOME/.nvm/versions/node/v26.13.1/bin:$PATH"

cd /root/my-portfolio
echo "== git pull =="
git pull --ff-only origin main
echo "== npm ci =="
npm ci
echo "== build =="
npm run build
echo "== publicar en /root/portfolio-live =="
rsync -a --delete /root/my-portfolio/dist/ /root/portfolio-live/
echo "== OK: desplegado $(date -Is) =="
