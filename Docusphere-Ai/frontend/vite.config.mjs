
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'animation-vendor': ['gsap', 'three', 'motion', 'motion-v'],
          'chart-vendor': ['chart.js'],
          'utils-vendor': ['axios', 'moment', 'clsx', 'tailwind-merge'],
        },
      },
    },
    // Increase chunk size warning limit to avoid warnings for intentional large chunks
    chunkSizeWarningLimit: 1000,
    // Enable minification with esbuild (faster and no extra dependency needed)
    minify: 'esbuild',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@reduxjs/toolkit',
      'react-redux',
      'axios',
    ],
  },
})

