<template>
  <div class="container">
    <aside class="categories">
      <h2>商品分类</h2>
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
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p class="price">¥{{ product.price }}</p>
        <router-link :to="`/product/${product.id}`">
          <button class="detail-btn">查看详情</button>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Product {
  id: number;
  name: string;
  price: number;
  category: number;
  image: string;
  description?: string;
}

interface Category {
  id: number;
  name: string;
}

const selectedCategory = ref<number>(0); // 0表示所有分类

const categories: Category[] = [
  { id: 1, name: "电子产品" },
  { id: 2, name: "服饰箱包" },
  { id: 3, name: "家居生活" },
];

const products: Product[] = [
  {
    id: 1,
    name: "智能手机",
    price: 2999,
    category: 1,
    image: "https://picsum.photos/200/200?1",
  },
  {
    id: 2,
    name: "笔记本电脑",
    price: 8999,
    category: 1,
    image: "https://picsum.photos/200/200?2",
  },
  {
    id: 3,
    name: "男士钱包",
    price: 399,
    category: 2,
    image: "https://picsum.photos/200/200?3",
  },
  {
    id: 4,
    name: "陶瓷餐具",
    price: 129,
    category: 3,
    image: "https://picsum.photos/200/200?4",
  },
];

const filteredProducts = computed(() => {
  return selectedCategory.value === 0
    ? products
    : products.filter((p) => p.category === selectedCategory.value);
});

const selectCategory = (categoryId: number) => {
  selectedCategory.value = categoryId;
};
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
  padding: 20px;
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
}

.price {
  color: #ff4444;
  font-size: 1.2em;
  font-weight: bold;
}

.detail-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.detail-btn:hover {
  background: #0056b3;
}
</style>
