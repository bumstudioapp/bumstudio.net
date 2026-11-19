// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Blog lives under bumstudio.net/blog so all SEO authority stays on one domain.
// If you ever move the blog to the domain root, change `base` to '/' and BASE in src/config.ts to ''.
export default defineConfig({
  site: 'https://bumstudio.net',
  base: '/blog',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
