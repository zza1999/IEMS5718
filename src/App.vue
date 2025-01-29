<template>
  <div class="app-container">
    <Header />
    <router-view class="main-content" />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-top: 60px;
}

body {
  margin: 0;
  padding: 0;
  background: #f8f9fa;
}
</style>
