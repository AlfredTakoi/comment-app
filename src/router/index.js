import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: SignUp
  },
  
  {
    path: '/home',
    name: 'Home',
    meta:{
      auth: true
    },
    component: Home
  },
  {

    path: '/post',
    name: 'post',
    component: () => import('../views/Post.vue'),
    meta:{
      auth: true
    }
  },
  {
    path: '/account/',
    name: 'account',
    component: () => import('../views/Account.vue'),
    meta:{
      auth: true
    }
  },
  
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !localStorage.getItem("token")) {
    next("/");
  } else if (!to.meta.auth && localStorage.getItem("token")) {
    next("/home");
  }else{
    next();
  }
});


export default router
