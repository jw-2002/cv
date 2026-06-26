// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Project page lives at https://jw-2002.github.io/website/, so assets must
  // be served from the /website/ subpath (not the domain root).
  site: "https://jw-2002.github.io",
  base: "/website",
});
