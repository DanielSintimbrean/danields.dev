import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    robotsTxt(),
  ],
  site: "https:danields.dev",
  output: "static",
  adapter: vercel({ webAnalytics: true }),
});
