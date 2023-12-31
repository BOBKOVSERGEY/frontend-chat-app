  import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'rooms',
        component: () => import('components/RoomList.vue'),
        children: [
          {
            path: '',
            component: () => import('components/ChooseRoom.vue'),
          },
          {
            name: 'ChatWindow',
            path: ':roomId/messages',
            component: () => import('components/ChatWindow.vue'),
          },
        ],
      },

    ],

  },
  {
    path: '/guest',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      {
        path: 'register',
        name: 'Register ',
        component: () => import('pages/RegisterPage.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/LoginPage.vue')
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
