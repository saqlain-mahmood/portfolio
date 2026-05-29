import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Tailwind v4 plugs straight into Vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
