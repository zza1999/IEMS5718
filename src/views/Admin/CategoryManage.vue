<template>
    <div class="category-management">
        <div class="header">
            <h2>Category Management</h2>
            <el-button type="primary" @click="showCreateDialog"
                >Add Category</el-button
            >
        </div>

        <el-table :data="categories" border>
            <el-table-column prop="name" label="Name" />
            <el-table-column label="Actions" width="120">
                <template #default="{ row }">
                    <el-button
                        size="small"
                        type="danger"
                        @click="deleteCategory(row.id)"
                        >Delete</el-button
                    >
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="dialogVisible" title="Create Category">
            <CategoryForm @submit="handleSubmit" />
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useProductStore } from '@/stores/products';
import CategoryForm from '@/components/CategoryForm.vue';

const productStore = useProductStore();
const dialogVisible = ref(false);

const categories = computed(() => productStore.categories);

onMounted(async () => {
    await productStore.fetchCategories();
});

const showCreateDialog = () => {
    dialogVisible.value = true;
};

const handleSubmit = async (name: string) => {
    try {
        await productStore.createCategory(name);
        dialogVisible.value = false;
    } catch (error) {
        console.error('Error creating category:', error);
    }
};

const deleteCategory = async (id: number) => {
    await productStore.deleteCategory(id);
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>
