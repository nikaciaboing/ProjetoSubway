<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <section class="pg9">
    <h1>Total:</h1>
    <p>R$</p>
    <button >Pix</button>
    <button >Cartão</button>
    <button >Dinheiro</button>
    <div class="botoes-navegacao">
                <router-link to="/entregaretirada"><button id="btn-voltar">Voltar</button></router-link>
                <router-link to="/preparando"><button id="btn-proximo">Próximo</button></router-link>
    </div>
    </section>
</template>
<style scoped>
.pg9 {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  margin: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.pg9 h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.pg9 p {
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 2rem;
}

.pg9 button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pg9 button:hover {
  background-color: #45a049;
}
.botoes-navegacao {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1000;
}

.botoes-navegacao button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #154b13;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.botoes-navegacao button:hover {
  background-color: #005fa3;
}


button:hover {
  background-color: #176829; /* Tom mais escuro no hover */
}
</style>