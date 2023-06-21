import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '~bootstrap': 'bootstrap'
    }
  },
  server: {
    host: '0.0.0.0',
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables";`
      }
    }
  }
});
