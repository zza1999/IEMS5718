<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/logo.png" alt="logo" />
            <h2>Bmazon</h2>
        </div>

        <div class="cart-icon">
            🛒
            <div class="cart-dropdown">
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
                                ${{ item.product.price }} x
                                <input
                                    type="number"
                                    v-model.number="item.quantity"
                                    min="1"
                                    @change="
                                        cartStore.updateQuantity(
                                            item.product.id,
                                            item.quantity,
                                        )
                                    "
                                    class="quantity-input"
                                />
                            </p>
                        </div>
                        <button
                            class="delete"
                            @click="cartStore.removeFromCart(item.product.id)"
                        >
                            🗑️
                        </button>
                    </div>
                    <div class="summary">
                        <button class="checkout" @click="">Check Out</button>
                        <div class="cart-total">
                            Total: ${{ cartStore.totalPrice }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<!-- ts -->
<script setup lang="ts">
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
</script>

<!-- css -->
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
.logo {
    display: flex;
    gap: 8px;
    align-items: center;
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
    margin-top: 0;
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
    display: block;
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
.quantity-input {
    width: 50px;
    margin-left: 8px;
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.delete {
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    color: #666;
    transition: background 0.3s;
}
.delete:hover {
    background: #e3242b;
}
.summary {
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
}
.checkout {
    background: #28a745;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
}
.checkout:hover {
    background: #218838;
}
.cart-total {
    font-weight: bold;
    padding-top: 1rem;
}
.empty-cart {
    text-align: center;
    color: #666;
    padding: 1rem;
}
</style>
