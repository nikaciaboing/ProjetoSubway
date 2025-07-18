<script setup>
import { useRoute } from 'vue-router'
import { watchEffect } from 'vue'
import HeaderComponnent from './components/HeaderComponnent.vue'
import FooterComponnent from './components/FooterComponnent.vue'

const route = useRoute()

watchEffect(() => {
  document.body.style.backgroundColor = route.path === '/' ? '#006633' : 'white'
})
</script>

<template>
  <div class="app-wrapper">
    <HeaderComponnent v-if="route.path !== '/'" />

    <main class="conteudo">
      <router-view />
    </main>

    <FooterComponnent />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.conteudo {
  flex: 1; 
}
</style>
