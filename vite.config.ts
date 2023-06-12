import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { proxyConfig } from './src/proxy/index';
console.log('proxyObj', proxyConfig);
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
    port: 4000,
    proxy: proxyConfig.proxyObj
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables";`
      }
    }
  }
});
