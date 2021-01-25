import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Blue from '../views/Blue.vue'
import Pink from '../views/Pink.vue'
import Red from '../views/Red.vue'
import Gold from '../views/Gold.vue'
import RedAnime from '../views/RedAnime.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/ECCard',
    name: 'Home',
    component: Home
  },
  {
    path: '/ECCard/Blue',
    name: 'Blue',
    component: Blue
  },
  {
    path: '/ECCard/Pink',
    name: 'Pink',
    component: Pink
  },
  {
    path: '/ECCard/Red',
    name: 'Red',
    component: Red
  },
  {
    path: '/ECCard/Gold',
    name: 'Gold',
    component: Gold
  },
  {
    path: '/ECCard/RedAnime',
    name: 'RedAnime',
    component: RedAnime
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
