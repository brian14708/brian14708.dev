import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://brian14708.dev",
  integrations: [sitemap()],
});
