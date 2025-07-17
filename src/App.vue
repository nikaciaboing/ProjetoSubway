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
  <HeaderComponnent v-if="route.path !== '/'" />

  <router-view />

  <FooterComponnent />
</template>

<style scoped>

</style>
