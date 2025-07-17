<script setup>
import { ref, onMounted } from 'vue'

// Estado reativo para o código
const codigo = ref('')

// Função para gerar código aleatório
function gerarCodigoAleatorio() {
  return Math.floor(10000 + Math.random() * 90000)
}

// Define o código quando o componente for montado
onMounted(() => {
  codigo.value = gerarCodigoAleatorio()
})
</script>
<template>
  <section class="pg10">
    <h1>Seu pedido está sendo preparado!</h1>

    <div onload="gerarCodigoAleatorio()">
      <h3>Seu Código:</h3>
       <div id="codigo">{{ codigo }}</div>
    </div>
  </section>
</template>
<style scoped>
.pg10 {
  font-family: 'Segoe UI', sans-serif;
  background-color:  #eef3aa;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.pg10 h1 {
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: bold;
}

.pg10 h3 {
  font-size: 1.2rem;
  color: #000000;
  margin: 1.5rem 0 0.5rem;
}
#codigo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #062b0b;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  display: inline-block;
  margin-top: 0.5rem;
}
</style>