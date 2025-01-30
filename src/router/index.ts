import { createRouter, createWebHashHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/', 
            name: 'Home',
            component: ProductList 
        },
        {
            path: '/category/:categoryId',
            name: 'ProductList',
            component: ProductList,
            props: true
        },
        { 
            path: '/product/:id', 
            name: 'ProductDetail',
            component: ProductDetail, 
            props: true 
        }
      ]
})