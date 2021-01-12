import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Blue from '../views/Blue.vue'
import Pink from '../views/Pink.vue'
import Red from '../views/Red.vue'
import Gold from '../views/Gold.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Blue',
    name: 'Blue',
    component: Blue
  },
  {
    path: '/Pink',
    name: 'Pink',
    component: Pink
  },
  {
    path: '/Red',
    name: 'Red',
    component: Red
  },
  {
    path: '/Gold',
    name: 'Gold',
    component: Gold
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
