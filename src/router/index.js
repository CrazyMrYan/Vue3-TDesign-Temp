import { createRouter, createWebHistory } from 'vue-router'

import { baseRoutes, layoutRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...baseRoutes, ...layoutRoutes]
})

export default router
