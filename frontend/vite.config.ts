import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({registerType:'autoUpdate'}), //configures vite plugin for PWA, specifies the registration type for the service worker
    react()
  ],
})
