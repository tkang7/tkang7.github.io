import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'tkang7.github.io',
  base: '/v2',
  integrations: [mdx(), sitemap(), tailwind()]
});