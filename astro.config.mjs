import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https:danields.dev",
  output: "static",
  adapter: vercel({ webAnalytics: true }),
});
