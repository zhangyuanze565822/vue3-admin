import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { path: '/main' } },
    {
      path: '/auth',
      component: () => import('../views/auth/index.vue'),
      children: [
        { path: '', name: 'auth', redirect: { name: 'login' } },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/login/index.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/auth/register/index.vue'),
        },
      ],
    },
    {
      path: '/main',
      component: () => import('../views/pages/index.vue'),
      children: [
        { path: '', name: 'main', redirect: { name: 'dashboard' } },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/pages/dashboard/index.vue'),
        },
        {
          path: 'workbench',
          name: 'workbench',
          component: () => import('../views/pages/workbench/index.vue'),
        },
        {
          path: 'account-setting',
          name: 'account-setting',
          component: () => import('../views/pages/settings/account/index.vue'),
        },
        {
          path: 'menu-setting',
          name: 'menu-setting',
          component: () => import('../views/pages/settings/menu/index.vue'),
        },
        {
          path: 'about-us',
          name: 'about-us',
          component: () => import('../views/pages/aboutUs/index.vue'),
        },
      ],
    },
  ],
});

export default router;
