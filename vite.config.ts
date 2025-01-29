import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "/IEMS5718/",
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [vue()]
})
