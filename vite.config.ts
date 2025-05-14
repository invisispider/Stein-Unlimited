/// <reference types="vitest" />
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/',
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
  },
  plugins: [
    vue(), 
    visualizer({ 
      filename: 'dist/stats.html', // can also be 'stats.html' in root
      open: true, // auto-opens in browser
      brotliSize: true,
      template: 'treemap', // or 'sunburst'
    })
  ],
  build: {
    outDir: 'dist',
    minify: false, // readable production build (not minified) for dev
    sourcemap: false,  // ✅ enables .map files for debugging
  },
  resolve: {
    alias: {
      // vue: 'vue/dist/vue.esm-bundler.js', // added when broken 2025
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~types": fileURLToPath(new URL('./types', import.meta.url)),
    },
  },
  server: {
    port: 8000, // Explicitly set the port to 8000
    host: "0.0.0.0", // Ensure it's accessible within the Docker container
    strictPort: true // Prevents Vite from switching ports
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['__tests__/vitest/**/*.{test,spec}.?(c|m)[jt]s?(x)', '__tests__/vitest/**/*.{test,spec}.?(m)tsx'],  // Include all test files under vitest
    exclude: ['__tests__/playwright/*'],
  },
  envPrefix: 'VITE_',
});
