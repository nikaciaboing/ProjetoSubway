<script setup>
import { useProdutosStore } from '../stores/produtos'
const produtosStore = useProdutosStore()
</script>
<template>
  <section id="inicio">
    <div class="conteudo">
      <div class="banner">
        <img src="/images/Subway_logo_editado.svg" alt="Logo Subway" />
        <h2 class="mensagem">BEM-VINDO!</h2>
        <router-link to="/cadastro">
          <button class="botao">CONTINUAR</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>

.inicio {
  background-color: #006633;
}
.conteudo {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.banner {
  text-align: center;
  width: 90%;
  padding: 40vw 20px;
}

.mensagem {
  font-size: 30px;
  margin: 15vw 0;
  font-weight: bold;
}

.botao {
  background-color: #e6bc00;
  color: #006633;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.botao:hover {
  background-color: #ffd633;
}
</style>
