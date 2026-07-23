import { defineConfig } from 'vite'

export default defineConfig({
  base: '/brew-calculator/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
