import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
    alias: {
      '@': '/src', // ✅ Esto mapea el alias '@' a tu carpeta raíz de código 'src'
    },
  },
})
