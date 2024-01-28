import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/movie-site/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['axios'],
    },
  },
 
})
