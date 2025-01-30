<template>
    <div class="product-detail" v-if="product">
        <div class="breadcrumb-container">
            <Breadcrumb :current-product="product" />
        </div>
        <div class="detail-content">
            <div class="image-container">
                <img
                    :src="product.image"
                    :alt="product.name"
                    class="main-image"
                />
            </div>
            <div class="info">
                <h1>{{ product.name }}</h1>
                <p class="price">${{ product.price }}</p>
                <p class="description">
                    {{ product.description || "None" }}
                </p>
                <button class="add-to-cart" @click="addToCart(product)">
                    Add to Cart ({{ getCartQuantity(product.id) }})
                </button>
            </div>
        </div>
    </div>
</template>

<!-- js -->
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../stores/cart";
import type { Product } from "../types/product";
import { PRODUCTS } from "../constants";
import Breadcrumb from "../components/Breadcrumb.vue";

const route = useRoute();
const cartStore = useCartStore();

const products = PRODUCTS;
const product = computed(() =>
    products.find((p) => p.id === Number(route.params.id))
);

const addToCart = (product: Product) => cartStore.addToCart(product);
const getCartQuantity = (productId: number) =>
    cartStore.items.find((item) => item.product.id === productId)?.quantity ||
    0;
</script>

<!-- css -->
<style scoped>
.product-detail {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
}

.detail-content {
    display: flex;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.image-container {
    flex: 1;
    max-width: 600px;
}

.main-image {
    width: 100%;
    border-radius: 8px;
}

.info {
    flex: 1;
    padding: 20px;
}

.price {
    color: #ff4444;
    font-size: 2em;
    margin: 20px 0;
}

.description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
}

.add-to-cart {
    background: #28a745;
    color: white;
    padding: 12px 24px;
    width: 180px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background 0.3s;
}

.add-to-cart:hover {
    background: #218838;
}
</style>
