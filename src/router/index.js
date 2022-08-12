import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "home",
    redirect: '/login',
    component: () => import('@/views/MainLayout'),
    children: [{
      path: '/users',
      name: 'users',
      meta:{
        title: 'Users',
      },
      component: () => import('@/pages/Users'),
    },
    {
      path: '/users/:id/todos',
      name: 'todos',
      meta: {
        title: 'Todos',
      },
      component: () => import('@/pages/Todos')
    }]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      isPublic: true
    },
    component: () => import('@/pages/Login')
  },
  {
    path: '*',
    name: 'not-found',
    meta: {
      isPublic: true
    },
    component: () => import('@/pages/NotFound')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(!to.meta.isPublic && !localStorage.user)
    return next({name: 'login'});
  
  if(to.meta.isPublic && localStorage.user)
    return next({name: 'users'});
  
  return next();
});

export default router
