// @ts-check
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/server";

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
});
