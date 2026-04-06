// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebastianpinto2424.github.io',
  base: '/Propuesta-pagina-proyect.github.io/',
  integrations: [icon()],
});