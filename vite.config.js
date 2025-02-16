import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // If deploying to the root
  // OR if you're deploying to a subfolder, set it like this:
  // base: '/portfolio/', // Uncomment if using subfolder
})
