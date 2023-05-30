const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../index.vue'),
    meta: {
      pageTitle: 'Home'
    }
  }
]

export default routes
