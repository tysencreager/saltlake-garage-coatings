// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Static output is intentional: a fully pre-rendered site is the fastest path
// to a 95+ PageSpeed score and deploys to Cloudflare Pages with zero runtime.
export default defineConfig({
  site: "https://saltlakegaragecoatings.com",
  output: "static",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
