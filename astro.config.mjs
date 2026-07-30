// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://troniti.com',
  build: {
    // One-pager: inlining the whole stylesheet removes the only render-blocking
    // request and lets the browser discover @font-face URLs immediately.
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});