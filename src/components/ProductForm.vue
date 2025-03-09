<template>
    <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
        <el-form-item label="Category" prop="catId">
            <el-select v-model="form.catId" placeholder="Select category">
                <el-option
                    v-for="cat in categories"
                    :key="cat.id"
                    :label="cat.name"
                    :value="cat.id"
                />
            </el-select>
        </el-form-item>

        <el-form-item label="Product Name" prop="name">
            <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="Price" prop="price">
            <el-input-number v-model="form.price" :min="0" />
        </el-form-item>

        <el-form-item label="Description" prop="description">
            <el-input v-model="form.description" type="textarea" rows="4" />
        </el-form-item>

        <el-form-item label="Product Image" prop="image">
            <el-upload
                :before-upload="beforeUpload"
                :on-change="handleFileChange"
                :show-file-list="false"
                accept=".jpg,.jpeg,.png,.gif"
            >
                <el-button type="primary">Upload Image</el-button>
                <div class="upload-tip">
                    Supported formats: JPG/PNG/GIF, max size: 10MB
                </div>
            </el-upload>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm">Submit</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ElForm } from 'element-plus';
import { ElMessage } from 'element-plus';
import { useProductStore } from '@/stores/products';
import type { Product } from '../types/product';

type FormType = Omit<Product, 'id'> & { image?: File };

const props = defineProps<{ initialData?: Product }>();
const emit = defineEmits<{ (e: 'submit', data: FormType): void }>();

const productStore = useProductStore();
const formRef = ref<InstanceType<typeof ElForm>>();

const form = ref<FormType>({
    catId: props.initialData?.catId || null,
    name: props.initialData?.name || '',
    price: props.initialData?.price || 0,
    description: props.initialData?.description || '',
    image: undefined,
});

const rules = {
    catId: [
        { required: true, message: 'Category is required', trigger: 'change' },
    ],
    name: [
        {
            required: true,
            message: 'Product name is required',
            trigger: 'blur',
        },
    ],
    price: [
        { required: true, message: 'Price is required' },
        { type: 'number', min: 0, message: 'Price must be positive' },
    ],
};

const categories = computed(() => productStore.categories);

const beforeUpload = (file: File) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const isValidType = validTypes.includes(file.type);
    const isValidSize = file.size <= 10 * 1024 * 1024;

    if (!isValidType) {
        ElMessage.error('Invalid file format');
        return false;
    }
    if (!isValidSize) {
        ElMessage.error('File size exceeds 10MB');
        return false;
    }
    return true;
};

const handleFileChange = (uploadFile: { raw: File }) => {
    form.value.image = uploadFile.raw;
};

const submitForm = async () => {
    await formRef.value?.validate();
    emit('submit', form.value);
};
</script>

<style scoped>
.upload-tip {
    font-size: 12px;
    color: #999;
    margin-top: 8px;
}
</style>
