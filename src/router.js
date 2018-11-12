import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/components/buttons',
      name: 'buttons',
      component: () => import('./views/Buttons.vue'),
    },
    {
      path: '/components/tabs',
      name: 'tabs',
      component: () => import('./views/Tabs.vue'),
    },
    {
      path: '/components/dialogs',
      name: 'dialogs',
      component: () => import('./views/Dialogs.vue'),
    },
    {
      path: '/icons',
      name: 'icons',
      component: () => import('./views/Icons.vue'),
    },
  ],
});
