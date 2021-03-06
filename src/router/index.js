import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';
import Page from '@/pages/Page';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/blog/:slug',
      name: 'Page',
      component: Page,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
