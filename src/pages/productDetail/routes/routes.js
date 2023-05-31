const routes = [
  {
    path: '/product-detail/:id',
    name: 'productDetail',
    component: () => import('../index.vue'),
    meta: {
      pageTitle: 'Product Detail'
    }
  }
]

export default routes
