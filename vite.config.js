import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Toutes les requêtes /api de Vite iront vers Apache
      '/api': {
        target: 'http://localhost/les_mikates_v7', // <- dossier servi par WAMP
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
