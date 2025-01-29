import { createRouter, createWebHashHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: ProductList },
    { path: '/product/:id', component: ProductDetail, props: true }
  ]
})