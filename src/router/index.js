import Vue from 'vue';
import Router from 'vue-router';
import About from '@/pages/About';
import Blog from '@/pages/Blog';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
  ],
});
