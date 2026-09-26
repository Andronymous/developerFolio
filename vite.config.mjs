import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset paths so the site works on any GitHub Pages path
  base: "./",
  plugins: [react()],
  build: {
    outDir: "build"
  },
  server: {
    port: 3000,
    host: true
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js"
  }
});
