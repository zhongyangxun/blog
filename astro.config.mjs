// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://zhongyangxun.github.io',
  // can access this value via `import.meta.env.BASE_URL`
  base: '/blog/',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    expressiveCode({
      themes: ['catppuccin-macchiato'],
    }),
  ],
});
