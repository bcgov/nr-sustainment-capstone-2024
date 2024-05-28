import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  plugins: [
    VitePWA({
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'QuackStack NMP',
        description: 'An NMP web application designed to be mobile and desktop compatible.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/install-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/icons/install-126.png',
            sizes: '126x126',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/icons/install-32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/icons/install-16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    react(),
    {
      name: 'build-html',
      apply: 'build',
      transformIndexHtml: (html) => ({
        html,
        tags: [
          {
            tag: 'script',
            attrs: {
              src: '/env.js',
            },
            injectTo: 'head',
          },
        ],
      }),
    },
  ],
  build: {
    outDir: 'dist', // Ensure this matches your output directory
  },
});
