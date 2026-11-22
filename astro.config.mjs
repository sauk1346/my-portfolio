// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://antoniomorales.cl',
  // React solo se usa para renderizar los íconos de react-icons en el build:
  // ningún componente se hidrata, así que no se envía React al navegador.
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
