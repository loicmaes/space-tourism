import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home')
  },
  {
    path: '/destination/',
    component: () => import('../views/Destination'),
    redirect: '/destination/moon',
    children: [
      {
        path: ':dest',
        component: () => import('../views/Destination')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
