// @ts-check
import { defineConfig } from "astro/config";
import sitemapPlugin from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemapPlugin()],
});
