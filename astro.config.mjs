// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://troniti.com',
  build: {
    // One-pager: inlining the whole stylesheet removes the only render-blocking
    // request and lets the browser discover @font-face URLs immediately.
    inlineStylesheets: 'always'
  },
  markdown: {
    // External links in articles open in a new tab; internal (/learn, /#...)
    // links are untouched.
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]
  },
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});