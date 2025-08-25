import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change "photo-journal" to your repo name
export default defineConfig({
  base: '/photo-journal/',
  plugins: [react()]
})