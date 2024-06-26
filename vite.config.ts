import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  server: {
    port: 9998,
    watch: {
      usePolling: true,
    },
  },
});
