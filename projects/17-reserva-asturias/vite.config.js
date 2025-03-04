import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      preprocessor: 'scss', 
      additionalData: `@import "~bootstrap/scss/bootstrap";` 
    }
  },
  server: {
    proxy: {
      '/dog': {
        target: 'https://place.dog',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dog/, ''),
      },
    },
  },
});