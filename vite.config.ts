import react from '@vitejs/plugin-react'
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
