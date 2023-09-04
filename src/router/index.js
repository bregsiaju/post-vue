import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: HomeView
    },
    {
      path: '/reports',
      name: 'reports',
      component: HomeView
    },
    {
      path: '/customer',
      name: 'customer',
      component: HomeView
    }
  ]
})

export default router
