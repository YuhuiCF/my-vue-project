import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import PartQualities from '@/components/PartQualities';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/partqualities',
      name: 'PartQualities',
      component: PartQualities,
    },
  ],
});
