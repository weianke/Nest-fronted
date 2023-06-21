import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from './store/index';
import { setupRouter } from './router/index';
import 'bootstrap/dist/js/bootstrap';
import axios from '@/request/axios';

function bootstrap() {
  const app = createApp(App);
  // 全局配置axios
  app.config.globalProperties.$axios = axios;
  //router
  setupRouter(app);

  //store
  setupStore(app);

  app.mount('#app');
}

bootstrap();
