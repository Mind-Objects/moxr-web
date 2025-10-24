// @ts-check
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel";

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true,
    }
  },

  integrations: [sitemap(), react()],
});