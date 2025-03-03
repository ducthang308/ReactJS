import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ReactJS/", // Đảm bảo đường dẫn base đúng với repo GitHub Pages của bạn
  build: {
    rollupOptions: {
      input: "index.html", // Đảm bảo Rollup build từ `index.html`
    },
  },
});
