// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// TODO: domain may change; update `site` if renamed away from carbidecore.online.
export default defineConfig({
  site: 'https://carbidecore.online',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    icon({ iconDir: 'src/assets/icons' }),
  ],
  build: {
    format: 'directory',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
