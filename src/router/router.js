import { createRouter, createWebHistory } from 'vue-router'

const routes = []

const router = createRouter({
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from, next) => {

  
// })

export default router
