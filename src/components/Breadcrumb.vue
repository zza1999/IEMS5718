<template>
    <nav class="breadcrumb">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <span v-if="index > 0" class="separator">/</span>
                <router-link v-if="item.link" :to="item.link" class="link">
                    {{ item.name }}
                </router-link>
                <span v-else class="current">
                    {{ item.name }}
                </span>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import type { Product } from "../types/product";

const props = defineProps<{
    currentProduct?: Product;
}>();

const route = useRoute();

const items = computed(() => {
    const crumbs = [{ name: "Home", link: "/" }];

    // 处理分类页
    if (route.name === "ProductList" && route.params.categoryId) {
        const category = categories.find(
            (c) => c.id === Number(route.params.categoryId)
        );
        crumbs.push({
            name: category?.name || "分类",
            link: `/category/${route.params.categoryId}`,
        });
    }

    // 处理详情页
    if (route.name === "ProductDetail" && props.currentProduct) {
        const category = categories.find(
            (c) => c.id === props.currentProduct?.category
        );
        crumbs.push(
            {
                name: category?.name || "分类",
                link: `/category/${category?.id}`,
            },
            { name: props.currentProduct.name, link: "" }
        );
    }

    return crumbs;
});

// 分类数据需要全局访问（与ProductList中的一致）
const categories = [
    { id: 1, name: "电子产品" },
    { id: 2, name: "服饰箱包" },
    { id: 3, name: "家居生活" },
];
</script>

<style scoped>
.breadcrumb {
    padding: 2rem 2rem 0;
    background: #f8f9fa;
    border-radius: 4px;
    /* margin-bottom: 1rem; */
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}

li {
    display: flex;
    align-items: center;
}

.separator {
    margin: 0 8px;
    color: #666;
}

.link {
    color: #007bff;
    text-decoration: none;
    transition: color 0.2s;
}

.link:hover {
    color: #0056b3;
    text-decoration: underline;
}

.current {
    color: #666;
    cursor: default;
}
</style>
