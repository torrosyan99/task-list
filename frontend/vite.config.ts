import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "@icons":path.resolve(__dirname, './src/shared/assets/icons'),
    }
  },
  server: {
    proxy: {
      "/api": {
        target: 'http://localhost:5000',
      }
    }
  }
})
