# antoniomorales.cl

Portafolio personal publicado en [antoniomorales.cl](https://antoniomorales.cl).

## Stack

- [Astro 7](https://astro.build) con salida estática: el build genera HTML, CSS e imágenes optimizadas en `dist/`, sin servidor de aplicación.
- **Tailwind 4** para los estilos y fuente Geist desde Fontsource.
- **react-icons** para los íconos. Se renderizan en el build mediante `@astrojs/react`; no se envía React al navegador.
- El modo oscuro y el resaltado del menú son scripts pequeños dentro de `ThemeToggle.astro` y `Navigation.astro`.

## Estructura

```text
src/
├── assets/images/   # imágenes que Astro optimiza en el build (WebP, varios tamaños)
├── components/      # una sección de la página por componente
├── layouts/         # BaseLayout: metadatos, vista previa al compartir y tema
├── pages/           # index.astro
└── styles/          # global.css
public/
├── docs/            # CV (fuente .tex y PDF), diplomas y certificados
├── favicon.png
└── og.png           # imagen de vista previa al compartir el enlace (1200×630)
```

## Comandos

| Comando           | Acción                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Instala dependencias                                |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`          |
| `npm run build`   | Genera el sitio estático en `dist/`                 |
| `npm run preview` | Sirve `dist/` en local para revisarlo antes de publicar |

## CV

El CV se escribe en `public/docs/cv_antonio_morales.tex` y se compila con XeLaTeX (usa la fuente Carlito):

```bash
cd public/docs && xelatex cv_antonio_morales.tex
```
