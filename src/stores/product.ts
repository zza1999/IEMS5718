import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    catId: number;
    image?: string;
}

interface Category {
    id: number;
    name: string;
}

export const useProductStore = defineStore('product', () => {
    const products = ref<Product[]>([]);
    const categories = ref<Category[]>([]);

    const fetchProducts = async () => {
        const { data } = await axios.get('/api/products');
        products.value = data;
    };

    const fetchCategories = async () => {
        const { data } = await axios.get('/api/categories');
        categories.value = data;
    };

    const createProduct = async (
        productData: Omit<Product, 'id'> & { image?: File },
    ) => {
        const formData = new FormData();
        formData.append('catId', productData.catId.toString());
        formData.append('name', productData.name);
        formData.append('price', productData.price.toString());
        formData.append('description', productData.description);
        if (productData.image) {
            formData.append('image', productData.image);
        }

        const { data } = await axios.post('/api/products', formData);
        products.value.push(data);
    };

    const updateProduct = async (
        id: number,
        updates: Partial<Product> & { image?: File },
    ) => {
        const formData = new FormData();
        Object.entries(updates).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                if (key === 'image' && value instanceof File) {
                    formData.append('image', value);
                } else {
                    formData.append(key, value.toString());
                }
            }
        });

        const { data } = await axios.put(`/api/products/${id}`, formData);
        const index = products.value.findIndex((p) => p.id === id);
        if (index !== -1) {
            products.value[index] = data;
        }
    };

    const deleteProduct = async (id: number) => {
        await axios.delete(`/api/products/${id}`);
        products.value = products.value.filter((p) => p.id !== id);
    };

    const createCategory = async (name: string) => {
        const { data } = await axios.post('/api/categories', { name });
        categories.value.push(data);
    };

    const deleteCategory = async (id: number) => {
        await axios.delete(`/api/categories/${id}`);
        categories.value = categories.value.filter((c) => c.id !== id);
    };

    return {
        products,
        categories,
        fetchProducts,
        fetchCategories,
        createProduct,
        updateProduct,
        deleteProduct,
        createCategory,
        deleteCategory,
    };
});
s;
