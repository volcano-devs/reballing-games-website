// @ts-check
import { defineConfig, envField } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {}
  },

  integrations: [react()]
});