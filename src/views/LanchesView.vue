<script setup>
import { reactive } from 'vue'
import { useCarrinhoStore } from '@/stores/carrinho'

const carrinho = useCarrinhoStore()

const precos = {
  "Sanduíche Vegetariano": 34.00,
  "Sanduíche Frango Teriyaki": 34.00,
  "Sanduíche de Presunto": 34.00,
  "Sanduíche Italiano": 34.00,
  "Sanduíche Carne Suprema": 34.00,
  "Sanduíche Carne Seca c/ Cream Cheese": 34.00
}

const lanches = reactive([
  { nome: "Sanduíche Vegetariano", imagem: "/images/sanduiches-veg-vegetariano.jpg" },
  { nome: "Sanduíche Frango Teriyaki", imagem: "/images/sanduiches-frango-teriyaki.jpg" },
  { nome: "Sanduíche de Presunto", imagem: "/images/sanduiches-embutidos-presunto.jpg" },
  { nome: "Sanduíche Italiano", imagem: "/images/sanduiches-embutidos-bmt-italiano.jpg" },
  { nome: "Sanduíche Carne Suprema", imagem: "/images/sanduiches-carne-supreme.jpg" },
  { nome: "Sanduíche Carne Seca c/ Cream Cheese", imagem: "/images/sanduiches-embutidos-bmt-italiano.jpg" }
])

function alterarQuantidade(index, delta) {
  const lanche = lanches[index]
  const lancheComPreco = {
    nome: lanche.nome,
    preco: precos[lanche.nome]
  }

  if (delta > 0) {
    carrinho.adicionarItem(lancheComPreco)
  } else {
    carrinho.removerItem(lanche.nome)
  }
}
</script>

<template>
  <!-- Carrinho fixo no topo -->
  <div class="carrinho-fixo" v-if="carrinho.itens.length">
    <h3>🛒 Carrinho</h3>
    <ul>
      <li v-for="item in carrinho.itens" :key="item.nome">
        {{ item.nome }} ({{ item.quantidade }}) - R$ {{ (item.preco * item.quantidade).toFixed(2) }}
      </li>
    </ul>
    <p class="total">Total: R$ {{ carrinho.total }}</p>
    <button @click="carrinho.limparCarrinho">Esvaziar Carrinho</button>
  </div>

  <!-- Lista de lanches -->
  <section class="lanches">
    <ul>
      <li v-for="(lanche, index) in lanches" :key="index">
        <img :src="lanche.imagem" :alt="lanche.nome" />
        <p>{{ lanche.nome }}</p>
        <p class="preco">R$ {{ precos[lanche.nome].toFixed(2) }}</p>
        <div class="controle">
          <button @click="alterarQuantidade(index, -1)">–</button>
          <span class="quantidade">{{ carrinho.getQuantidade(lanche.nome) }}</span>
          <button @click="alterarQuantidade(index, 1)">+</button>
        </div>
      </li>
    </ul>

    <!-- Navegação -->
    <section class="botoes">
      <router-link to="/bebidas"><button><span class="fas fa-bottle-water"></span></button></router-link>
      <router-link to="/montarlanche"><button><span class="fas fa-hamburger"></span></button></router-link>
      <router-link to="/entregaretirada"><button><span class="fas fa-arrow-right"></span></button></router-link>
    </section>
  </section>
</template>

<style scoped>
.pg1 {
  background-color: white;
  color: #006633;
}

.lanches ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
}

.lanches ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  text-align: center;
  background: #f7f7f7;
  color: #006633;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

.lanches img {
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
}

.lanches ul li p {
  margin: 4px 0;
  font-size: 14px;
  color: #333;
}

.lanches ul li .preco {
  font-weight: bold;
  color: #009639;
}

.controle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.controle button {
  background-color: #009639;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.controle button:first-child {
  background-color: #9e2a1d;
}

.controle button:hover {
  background-color: #007d32;
}

.quantidade {
  min-width: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.botoes {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
}

.botoes button {
  background-color: #e6bc00;
  border: none;
  border-radius: 12px;
  padding: 10px;
  font-size: 22px;
  color: #006633;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: background 0.3s;
}

.botoes button:hover {
  background-color: #e6bc00;
}

/* Carrinho fixo no topo */
.carrinho-fixo {
  position: sticky;
  top: 0;
  background-color: #fff7d6;
  border-bottom: 2px solid #e6bc00;
  padding: 10px 20px;
  z-index: 999;
  color: #006633;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.carrinho-fixo ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.carrinho-fixo li {
  font-size: 14px;
  margin-bottom: 4px;
}

.carrinho-fixo .total {
  margin-top: 6px;
  font-size: 16px;
  color: #009639;
}

.carrinho-fixo button {
  margin-top: 8px;
  background-color: #9e2a1d;
  color: white;
  border: none;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
