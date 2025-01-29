import { createRouter, createWebHashHistory } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../components/ProductDetail.vue'

const router = createRouter({
  history: createWebHashHistory("/IEMS5718/"),
  routes: [
    { path: '/', component: ProductList },
    { path: '/product/:id', component: ProductDetail, props: true }
  ]
})

export default router