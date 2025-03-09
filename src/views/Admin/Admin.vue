<template>
    <div class="admin-layout">
        <el-container>
            <el-aside width="200px">
                <el-menu
                    router
                    :default-active="$route.path"
                    active-text-color="#409EFF"
                    class="sidebar-menu"
                >
                    <el-menu-item index="/products">
                        <span>Products Management</span>
                    </el-menu-item>
                    <el-menu-item index="/categories">
                        <span>Categories Management</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(route, (newRoute) => {
    document.title = `Admin Panel - ${newRoute.meta.title}`;
});
</script>

<style scoped>
.admin-layout {
    height: 100vh;
}

.sidebar-menu {
    height: 100%;
}

.el-aside {
    background-color: #fff;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.1);
}

.el-main {
    background-color: #f0f2f5;
    padding: 20px;
}
</style>
