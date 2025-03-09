<template>
    <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
        <el-form-item label="Category Name" prop="name">
            <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm">Submit</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ElForm } from 'element-plus';

const formRef = ref<InstanceType<typeof ElForm>>();

const form = ref({
    name: '',
});

const rules = {
    name: [
        {
            required: true,
            message: 'Category name is required',
            trigger: 'blur',
        },
    ],
};

const emit = defineEmits<{ (e: 'submit', name: string): void }>();

const submitForm = async () => {
    await formRef.value?.validate();
    emit('submit', form.value.name);
};
</script>
