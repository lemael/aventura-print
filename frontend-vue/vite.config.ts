import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  base: "/aventura-print/",
  server: {
    port: 5173,
  },
});
