import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // redirige /api vers ton serveur WAMP (port 80)
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
        secure: false,
        // rewrite: path => path.replace(/^\/api/, '/api') // si besoin
      }
    }
  }
})
