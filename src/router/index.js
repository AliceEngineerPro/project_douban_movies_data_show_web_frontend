import {createRouter, createWebHashHistory, createWebHistory,} from 'vue-router'
import HomePageView from '@/views/HomePageView'
import TestModuleView from "@/views/TestModuleView";

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
    },
    {
        path: '/test',
        name: 'test',
        component: TestModuleView
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
})

export default router
