import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [

  {
    path: '/timers',
    name: 'Timers',
    component: () => import("../views/Timers")
  },
  {
    path: '/theme',
    name: 'Theme',
    component: () => import("../views/Theme")
  },
  {
    path: '/preference',
    name: 'Preference',
    component: () => import("../views/Preference")
  },

]

const router = new VueRouter({
  routes
})

export default router
