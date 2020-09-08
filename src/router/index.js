import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'
import findMusic from '../views/findMusic/findMusic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'findMusic',
    component: findMusic,
    redirect: '/recommend',
    children: [{
      path: '/recommend',
      name: 'recommend',
      components: () => import('views/findMusic/components/recommend')
    }]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
