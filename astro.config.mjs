import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Troque pelo dom�nio real ao publicar
export default defineConfig({
  site: 'https://seudominio.com',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
