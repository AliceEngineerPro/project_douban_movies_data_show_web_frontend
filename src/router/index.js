import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomePageView'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(), routes
})

export default router
