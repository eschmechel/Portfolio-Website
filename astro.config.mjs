// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eschmechel.dev',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  prefetch: true,

  integrations: [sitemap(), icon(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});