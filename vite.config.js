import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ventanilla/",
  plugins: [react()],
  server: {
    proxy: {
      '/api/email': {
        target: 'http://172.17.201.2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/email/, '/SendEmail.aspx')
      }
    }
  }
});
