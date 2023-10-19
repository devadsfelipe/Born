<script setup>
import navigation from './components/navigation.vue';
</script>

<template>
  <div class="container">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 100%;
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background: var(--secondary);
  padding: 0%;
}
</style>
