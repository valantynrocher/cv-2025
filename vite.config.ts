import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// Convertit l’URL du fichier en chemin absolu
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
