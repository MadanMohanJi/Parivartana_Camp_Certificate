import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change 'iskcon-certificate' to your actual repository name if it's different
  base: '/iskcon-certificate/', 
})