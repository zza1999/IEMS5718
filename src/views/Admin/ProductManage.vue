<template>
    <div class="product-management">
        <div class="header">
            <h2>Product Management</h2>
            <el-button type="primary" @click="showCreateDialog"
                >Add Product</el-button
            >
        </div>

        <el-table :data="products" border>
            <el-table-column prop="name" label="Name" />
            <el-table-column prop="price" label="Price" />
            <el-table-column prop="catId" label="Category ID" />
            <el-table-column label="Actions" width="180">
                <template #default="{ row }">
                    <el-button size="small" @click="editProduct(row)"
                        >Edit</el-button
                    >
                    <el-button
                        size="small"
                        type="danger"
                        @click="deleteProduct(row.id)"
                        >Delete</el-button
                    >
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="dialogVisible" :title="dialogTitle">
            <ProductForm
                :initial-data="selectedProduct"
                @submit="handleSubmit"
            />
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from '@/stores/products';
import ProductForm from '@/components/ProductForm.vue';

const productStore = useProductStore();
const dialogVisible = ref(false);
const selectedProduct = ref<Product | null>(null);

const products = computed(() => productStore.products);
const dialogTitle = computed(() =>
    selectedProduct.value ? 'Edit Product' : 'Create Product',
);

onMounted(async () => {
    await Promise.all([
        productStore.fetchProducts(),
        productStore.fetchCategories(),
    ]);
});

const showCreateDialog = () => {
    selectedProduct.value = null;
    dialogVisible.value = true;
};

const editProduct = (product: Product) => {
    selectedProduct.value = product;
    dialogVisible.value = true;
};

const handleSubmit = async (
    formData: Omit<Product, 'id'> & { image?: File },
) => {
    try {
        if (selectedProduct.value?.id) {
            await productStore.updateProduct(
                selectedProduct.value.id,
                formData,
            );
        } else {
            await productStore.createProduct(formData);
        }
        dialogVisible.value = false;
    } catch (error) {
        console.error('Error submitting product:', error);
    }
};

const deleteProduct = async (id: number) => {
    await productStore.deleteProduct(id);
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
