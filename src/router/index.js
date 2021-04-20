import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import Avatar from '../views/Avatar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/avatar/:id',
    name: 'Avatar',
    component: Avatar
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
