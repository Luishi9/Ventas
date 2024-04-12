import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
//import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  //el output puede servir para el servidor; sit queremos estatico y servidor hybrid
  output: 'server',
  adapter: netlify()
});