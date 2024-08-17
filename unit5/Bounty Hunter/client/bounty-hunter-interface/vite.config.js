import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/bounty': {
        target: 'http://localhost:9000/bounty',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});