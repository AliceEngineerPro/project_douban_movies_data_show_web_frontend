import { createRouter, createWebHashHistory } from 'vue-router'
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
  history: createWebHashHistory(),
  routes
})

export default router
