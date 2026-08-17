// @ts-check
import { defineConfig } from "astro/config";

// Site is unpublished: no sitemap, no integrations — just the offline
// placeholder page and a 404 for every former URL.
export default defineConfig({
  site: "https://saltlakegaragecoatings.com",
  output: "static",
  compressHTML: true,
});
