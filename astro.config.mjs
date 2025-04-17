// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import sitemapPlugin from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    edgeMiddleware: true,
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemapPlugin(),
    react({
      experimentalReactChildren: true,
    }),
  ],
});
