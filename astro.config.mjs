// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Project page lives at https://jw-2002.github.io/cv/ (the GitHub repo is
  // named "cv"), so assets must be served from the /cv/ subpath (not the
  // domain root). Keep this in sync with the repo name.
  site: "https://jw-2002.github.io",
  base: "/cv",
});
