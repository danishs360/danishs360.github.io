import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://danishsiddique.com',
  base: '/',
  integrations: [mdx(), tailwind()],
  image: {
    domains: ['images.unsplash.com', 'joinroundzero.com'],
  },
});