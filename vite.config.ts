import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
// @ts-ignore
import eslint from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      cache: false,
      exclude: [/virtual:/, /node_modules/],
      overrideConfigFile: './.eslintrc.cjs',
      failOnError: false,
      emitWarning: true,
      emitError: true,
      lintOnStart: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001,
    hmr: {
      overlay: true,
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Báo tất cả các warning và error
        warn(warning)
      },
    },
  },
  logLevel: 'info',
  clearScreen: false,
})
