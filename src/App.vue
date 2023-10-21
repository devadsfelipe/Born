<script setup>
import navigation from './components/navigation.vue';
</script>

<template>
  <div id="header">
    <div class="container">
      <navigation></navigation>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
#header {
  width: 100%;
  height: 100vh;
  background-image: url(../src/assets/background.png);
  background-size: cover;
  background-position: center;
}

.container{
  padding: 10px 10 ;
  min-width: 100% !important;
  max-width: 100% !important;
}
</style>
