<script setup>
import { ref, onMounted } from 'vue'

// cria a referência para o código
const codigo = ref('')

// gera o código aleatório
function gerarCodigoAleatorio() {
  codigo.value = Math.floor(100000 + Math.random() * 900000)
}

// executa assim que o componente estiver montado
onMounted(() => {
  gerarCodigoAleatorio()
})
</script>

<template>
  <div class="container">
    <section class="pedido-subway">
      <img src="/images/preparandopedido.jpeg" alt="ícone Subway" class="sub-icon">
      <h1>Pedido Confirmado!</h1>
      <p class="descricao">Preparação iniciada:
      Seu pedido ficará pronto em instantes!😋</p>

      <div class="info-codigo">
        <h2>Código:</h2>
        <div id="codigo">{{ codigo }}</div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap');

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

.pedido-subway {
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  border-top: 8px solid #66BB6A;
  border-bottom: 8px solid #FFCA28;
  transition: transform 0.3s ease;
  margin: 40px auto;
  font-family: 'Poppins', sans-serif;
}

.pedido-subway:hover {
  transform: scale(1.015);
}

.sub-icon {
  width: 120px;
  height: auto;
  border: none;
  outline: none;
}

h1 {
  font-size: 2.4rem;
  font-weight: 900;
  color: #2E7D32;
  margin-bottom: 16px;
}

.descricao {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 24px;
  color: #4E944F;
}

.info-codigo h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #388E3C;
  letter-spacing: 0.5px;
}

#codigo {
  font-family: 'Poppins', monospace;
  font-size: 2.8rem;
  font-weight: 700;
  background: linear-gradient(90deg, #43A047, #66BB6A);
  color: #ffffff;
  padding: 12px 0;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(27, 94, 32, 0.25);
  user-select: all;
  letter-spacing: 6px;
}
</style>
