import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Blog from '@/pages/Blog';

Vue.use(Router);

export default new Router({
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
  ],
});
