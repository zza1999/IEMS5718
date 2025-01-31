<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/logo.png" alt="logo" />
        </div>

        <div class="cart-icon" @mouseenter="showCart" @mouseleave="hideCart">
            🛒 {{ cartStore.totalItems }}
            <div v-if="cartStore.isCartVisible" class="cart-dropdown">
                <div v-if="cartStore.items.length === 0" class="empty-cart">
                    EMPTY
                </div>
                <div v-else>
                    <div
                        v-for="item in cartStore.items"
                        :key="item.product.id"
                        class="cart-item"
                    >
                        <img
                            :src="item.product.image"
                            class="cart-item-image"
                        />
                        <div class="cart-item-info">
                            <h4>{{ item.product.name }}</h4>
                            <p>
                                ${{ item.product.price }} x {{ item.quantity }}
                            </p>
                        </div>
                    </div>
                    <div class="cart-total">
                        Total: ${{ cartStore.totalPrice }}
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

const showCart = () => (cartStore.isCartVisible = true);
const hideCart = () => (cartStore.isCartVisible = false);
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 60px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo img {
    height: 40px;
}

.cart-icon {
    position: relative;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 4px;
    background: #f5f5f5;
    transition: background 0.2s;
}

.cart-icon:hover {
    background: #e0e0e0;
}

.cart-dropdown {
    position: absolute;
    right: 0;
    top: 100%;
    width: 300px;
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 1rem;
    margin-top: 8px;
    border-radius: 8px;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    pointer-events: none;
}

.cart-icon:hover .cart-dropdown {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.cart-item {
    display: flex;
    gap: 1rem;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
}

.cart-item-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 4px;
}

.cart-total {
    font-weight: bold;
    padding-top: 1rem;
    text-align: right;
}

.empty-cart {
    text-align: center;
    color: #666;
    padding: 1rem;
}
</style>
