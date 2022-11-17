import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutView from '../views/LayoutView.vue';
import WelcomeView from '../views/WelcomeView.vue';
import CartView from '../views/CartView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeView,
  },
  {
    path: '/',
    name: 'layout',
    component: LayoutView,
    children: [
      {
        path: '/home',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/category/:id',
        name: 'category',
        component: HomeView,
      },
      {
        path: '/cart',
        name: 'cart',
        component: CartView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
