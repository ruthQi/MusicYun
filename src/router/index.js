import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';

Vue.use(Router);

export default new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         name: 'main',
         component: Main,
         redirect: 'recommend',
         children: [
            {
               path: 'recommend',
               //按需加载
               component: () => import('@/components/Recommend')
            },
            {
               path: 'hot',
               component: () => import('@/components/Hot')
            },
            {
               path: 'search',
               component: () => import('@/components/Search')
            }
         ]
      }
   ]
});
