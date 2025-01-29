<template>
  <div class="product-detail" v-if="product">
    <div class="detail-content">
      <div class="image-container">
        <img :src="product.image" :alt="product.name" class="main-image" />
      </div>
      <div class="info">
        <h1>{{ product.name }}</h1>
        <p class="price">¥{{ product.price }}</p>
        <p class="description">{{ product.description || "暂无商品描述" }}</p>
        <button class="add-to-cart" @click="addToCart(product)">
          加入购物车 ({{ getCartQuantity(product.id) }})
        </button>
        <router-link to="/">
          <button class="back-btn">返回列表</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cart";
import type { Product } from "@/types/product";

const route = useRoute();
const cartStore = useCartStore();

const products: Product[] = [
  {
    id: 1,
    name: "智能手机",
    price: 2999,
    category: 1,
    image: "https://picsum.photos/200/200?1",
    description: "最新款旗舰智能手机",
  },
  {
    id: 2,
    name: "笔记本电脑",
    price: 8999,
    category: 1,
    image: "https://picsum.photos/200/200?2",
    description: "高性能游戏笔记本",
  },
  {
    id: 3,
    name: "男士钱包",
    price: 399,
    category: 2,
    image: "https://picsum.photos/200/200?3",
    description: "真皮男士钱包",
  },
  {
    id: 4,
    name: "陶瓷餐具",
    price: 129,
    category: 3,
    image: "https://picsum.photos/200/200?4",
    description: "精美陶瓷餐具套装",
  },
];

const product = computed(() =>
  products.find((p) => p.id === Number(route.params.id))
);

const addToCart = (product: Product) => cartStore.addToCart(product);
const getCartQuantity = (productId: number) =>
  cartStore.items.find((item) => item.product.id === productId)?.quantity || 0;
</script>

<style scoped>
.product-detail {
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
  font-size: 1.1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 15px;
  transition: background 0.3s;
}

.add-to-cart:hover {
  background: #218838;
}

.back-btn {
  background: #6c757d;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.back-btn:hover {
  background: #5a6268;
}
</style>
