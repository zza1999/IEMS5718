<template>
    <div class="container">
        <div class="breadcrumb-container">
            <Breadcrumb />
        </div>
        <div class="main-content">
            <aside class="categories">
                <h2>Categories</h2>
                <ul>
                    <li
                        v-for="category in categories"
                        :key="category.id"
                        :class="{ active: selectedCategory === category.id }"
                        @click="selectCategory(category.id)"
                    >
                        {{ category.name }}
                    </li>
                </ul>
            </aside>

            <main class="product-list">
                <div
                    v-for="product in filteredProducts"
                    :key="product.id"
                    class="product-card"
                >
                    <router-link :to="`/product/${product.id}`">
                        <img
                            :src="product.image"
                            :alt="product.name"
                            class="product-image"
                        />
                        <h3>{{ product.name }}</h3>
                    </router-link>
                    <p class="price">${{ product.price }}</p>
                    <button class="add-to-cart" @click="addToCart(product)">
                        Add to Cart ({{ getCartQuantity(product.id) }})
                    </button>
                </div>
            </main>
        </div>
    </div>
</template>

<!-- js -->
<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCartStore } from "../stores/cart";
import type { Product } from "../types/product";
import { CATEGORIES, PRODUCTS } from "../constants";
import Breadcrumb from "../components/Breadcrumb.vue";

const route = useRoute();
const router = useRouter();
const selectedCategory = ref<number>(
    route.params.categoryId ? parseInt(route.params.categoryId as string) : 0
);
const cartStore = useCartStore();

const categories = CATEGORIES;
const products = PRODUCTS;

const filteredProducts = computed(() =>
    selectedCategory.value === 0
        ? products
        : products.filter((p) => p.category === selectedCategory.value)
);

const selectCategory = (id: number) => {
    selectedCategory.value = id;
    router.push(id ? `/category/${id}` : "/");
};

const addToCart = (product: Product) => cartStore.addToCart(product);
const getCartQuantity = (productId: number) =>
    cartStore.items.find((item) => item.product.id === productId)?.quantity ||
    0;
</script>

<!-- css -->
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}
.breadcrumb-container {
    width: 100%;
    order: -1;
}
.main-content {
    display: flex;
    gap: 20px;
}
.categories {
    width: 200px;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 8px;
}

.categories ul {
    list-style: none;
    padding: 0;
}

.categories li {
    padding: 10px;
    cursor: pointer;
    transition: background 0.3s;
}

.categories li:hover,
.categories li.active {
    background: #e0e0e0;
    border-radius: 4px;
}

.product-list {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.product-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 10px;
}

.price {
    color: #ff4444;
    font-size: 1.2em;
    margin: 10px 0;
}

.add-to-cart {
    background: #28a745;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}

.add-to-cart:hover {
    background: #218838;
}

.product-card a {
    text-decoration: none;
    color: inherit;
}

.product-card h3 {
    margin: 10px 0;
    transition: color 0.2s;
}

.product-card h3:hover {
    color: #007bff;
}
</style>
