<template>
    <div class="app-container">
        <Header />
        <router-view class="main-content" />
    </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<style src="./style.css"></style>
