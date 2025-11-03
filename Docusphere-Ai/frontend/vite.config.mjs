
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable manual chunking to avoid Rollup issues
      },
    },
    // Increase chunk size warning limit to avoid warnings for intentional large chunks
    chunkSizeWarningLimit: 1500,
    // Enable minification with esbuild (faster and no extra dependency needed)
    minify: 'esbuild',
    // Target modern browsers for better compatibility
    target: 'esnext',
    // Optimize sourcemaps for production
    sourcemap: false,
    // Ensure commonjs dependencies work correctly
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
    },
  },
})

