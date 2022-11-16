import {createRouter, createWebHashHistory, createWebHistory,} from 'vue-router'
import HomePageView from '@/views/HomePageView'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePageView
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
