// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// @astrojs/sitemap only emits sitemap-index.xml + sitemap-0.xml, but crawlers
// and audit tools expect /sitemap.xml. Publish the urlset there too. Must run
// after sitemap() in the integrations array (hooks fire in array order).
const sitemapAlias = () => ({
  name: "sitemap-alias",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      const out = fileURLToPath(dir);
      await copyFile(join(out, "sitemap-0.xml"), join(out, "sitemap.xml"));
    },
  },
});

// Static output is intentional: a fully pre-rendered site is the fastest path
// to a 95+ PageSpeed score and deploys to Cloudflare Pages with zero runtime.
export default defineConfig({
  site: "https://saltlakegaragecoatings.com",
  output: "static",
  integrations: [react(), sitemap(), sitemapAlias()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
