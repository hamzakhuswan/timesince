import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../App'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/theme',
    name: 'Theme',
    component: () => import("../views/Theme")
  },
  {
    path: '/timers',
    name: 'Timers',
    component: () => import("../views/Timers")
  },
  {
    path: '/prefernce',
    name: 'Preference',
    component: () => import("../views/Preference")
  },

]

const router = new VueRouter({
  routes
})

export default router
