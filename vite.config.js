import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      componets: "/src/components",
      assets: "/src/assets",
      utility: "/src/utility",
      context: "/src/context",
      service: "/src/service",
      pages: "/src/pages",
      layouts: "/src/layouts"
    },
  },
})
