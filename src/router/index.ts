import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import { App } from 'vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/reg',
    component: () => import('@/views/login/reg.vue')
  }
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
