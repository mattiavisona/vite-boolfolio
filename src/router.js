import { createRouter, createWebHistory } from "vue-router";


import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/projects/ProjectList.vue';
import SingleProject from './pages/projects/SingleProject.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
  
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
      meta: {
        title: 'Home'
      },
    },

    {
      path: '/projects',
      name: 'projectList',
      component: ProjectList,
      meta: {
        title: 'I miei progetti'
      }
    },

    {
      path: '/about',
      name: 'about',
      component: AppAbout,
      meta: {
        title: 'Chi sono'
      }
    },

    {
      path: '/projects/:slug',
      name: 'singleProject',
      component: SingleProject,
      meta: {
      }
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
      meta: {
        title: '404'
      }
    }
  ],

});

router.beforeEach((to) => {
  document.title = to.meta?.title ? 'Boolfolio - ' + to.meta.title : 'Boolfolio';
});

export {router};