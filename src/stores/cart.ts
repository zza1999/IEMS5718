import { defineStore } from 'pinia'
import type { CartItem, Product } from '../types/product'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
        isCartVisible: false
    }),
    actions: {
        addToCart(product: Product) {
            const existingItem = this.items.find(item => item.product.id === product.id)
            existingItem ? existingItem.quantity++ : this.items.push({ product, quantity: 1 })
        },
        removeFromCart(productId: number) {
            this.items = this.items.filter(item => item.product.id !== productId)
        }
    },
    getters: {
        totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: (state) => state.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
    }
})