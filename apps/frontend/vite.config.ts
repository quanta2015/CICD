import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 修改此项，允许所有IP访问
    port: 5173,
    strictPort: false,
    proxy: { "/api": "http://localhost:3000" }
  }
});
