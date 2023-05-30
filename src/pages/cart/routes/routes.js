const routes = [
  {
    path: '/carts',
    name: 'carts',
    component: () => import('../index.vue'),
    meta: {
      pageTitle: 'Home'
    }
  }
]

export default routes
