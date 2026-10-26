// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://danour-protfolio.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap(),
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': ['*'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
