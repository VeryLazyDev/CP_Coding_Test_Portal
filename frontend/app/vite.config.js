import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // 👇 This means: any request starting with /api
      // will be sent to your backend
      "/api": {
        target: "http://cp-coding-test-portal.onrender.com", // change this to your backend URL/port
        changeOrigin: true,
        secure: false,
      },
    },
    // 👇 Fixes 404 errors on page refresh when using React Router
    historyApiFallback: true,
  },
});
