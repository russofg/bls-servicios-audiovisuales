// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://serviciosbls.com",
  devToolbar: {
    enabled: false,
  },
  // Optimizaciones para mejorar el rendimiento
  vite: {
    build: {
      // Minificar JavaScript y eliminar código no utilizado
      minify: "esbuild",
      target: "es2020", // Para evitar servir polyfills de legacy a navegadores modernos
      rollupOptions: {
        output: {
          // Evitar duplicación de módulos en bundles
          manualChunks: {
            vendor: ["astro/client-image"],
          },
        },
      },
    },
    // Optimizaciones adicionales
    ssr: {
      noExternal: ["astro-seo"],
    },
  },
  // Asegurar que se use SSG para todas las páginas
  output: "static",
});
