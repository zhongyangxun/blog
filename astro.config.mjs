// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://zhongyangxun.github.io',
  // can access this value via `import.meta.env.BASE_URL`
  base: '/blog/',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
