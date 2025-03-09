import { createRouter, createWebHashHistory } from 'vue-router';
import ProductList from '../views/ProductList.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Admin from '../views/Admin/Admin.vue';
import CategoryManage from '../views/Admin/CategoryManage.vue';
import ProductManage from '../views/Admin/ProductManage.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: ProductList,
        },
        {
            path: '/category/:categoryId',
            name: 'ProductList',
            component: ProductList,
            props: true,
        },
        {
            path: '/product/:id',
            name: 'ProductDetail',
            component: ProductDetail,
            props: true,
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            children: [
                {
                    path: 'product-manage',
                    name: 'ProductManage',
                    component: ProductManage,
                },
                {
                    path: 'category-manage',
                    name: 'CategoryManage',
                    component: CategoryManage,
                },
            ],
        },
    ],
});
