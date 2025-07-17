<script setup>
import { reactive, computed } from 'vue'

const precos = {
  "Sanduíche Vegetariano": 34.00,
  "Sanduíche Frango Teriyaki": 34.00,
  "Sanduíche de Presunto": 34.00,
  "Sanduíche Italiano": 34.00,
  "Sanduíche Carne Suprema": 34.00,
  "Sanduíche Carne Seca c/ Cream Cheese": 34.00
}

const lanches = reactive([
  { nome: "Sanduíche Vegetariano", imagem: "/images/sanduiches-veg-vegetariano.jpg", quantidade: 0 },
  { nome: "Sanduíche Frango Teriyaki", imagem: "/images/sanduiches-frango-teriyaki.jpg", quantidade: 0 },
  { nome: "Sanduíche de Presunto", imagem: "/images/sanduiches-embutidos-presunto.jpg", quantidade: 0 },
  { nome: "Sanduíche Italiano", imagem: "/images/sanduiches-embutidos-bmt-italiano.jpg", quantidade: 0 },
  { nome: "Sanduíche Carne Suprema", imagem: "/images/sanduiches-carne-supreme.jpg", quantidade: 0 },
  { nome: "Sanduíche Carne Seca c/ Cream Cheese", imagem: "/images/sanduiches-embutidos-bmt-italiano.jpg", quantidade: 0 }
])

function alterarQuantidade(index, delta) {
  const lanche = lanches[index]
  lanche.quantidade = Math.max(0, lanche.quantidade + delta)
}

function removerLanche(index) {
  lanches[index].quantidade = 0
}

function limparLanches() {
  lanches.forEach(lanche => lanche.quantidade = 0)
}

const selecionados = computed(() =>
  lanches
    .map((l, index) => ({
      ...l,
      index,
      preco: precos[l.nome],
      total: l.quantidade * precos[l.nome]
    }))
    .filter(l => l.quantidade > 0)
)

const total = computed(() =>
  selecionados.value.reduce((soma, item) => soma + item.total, 0)
)
</script>
<template>
  <section class="lanches">
    <ul>
      <li v-for="(lanche, index) in lanches" :key="index">
        <img :src="lanche.imagem" :alt="lanche.nome" />
        <p>{{ lanche.nome }}</p>
        <p class="preco">R$ {{ precos[lanche.nome].toFixed(2) }}</p>
        <div class="controle">
          <button @click="alterarQuantidade(index, -1)">–</button>
          <span class="quantidade">{{ lanche.quantidade }}</span>
          <button @click="alterarQuantidade(index, 1)">+</button>
        </div>
      </li>
    </ul>

    <div class="selecionados" v-if="selecionados.length">
      <h3>Ingredientes Selecionados:</h3>
      <ul>
        <li v-for="item in selecionados" :key="item.index">
          <span>{{ item.nome }} ({{ item.quantidade }}) - R$ {{ item.total.toFixed(2) }}</span>
          <button class="btn-remover" @click="removerLanche(item.index)">Remover</button>
        </li>
      </ul>
      <p id="valor-total"><strong>Total: R$ {{ total.toFixed(2) }}</strong></p>
      <button class="btn-limpar" @click="limparLanches">Limpar Tudo 🧹</button>
    </div>

    <section class="botoes">
      <router-link to="/bebidas"><button><span class="fas fa-bottle-water"></span></button></router-link>
      <router-link to="/montarlanche"><button><span class="fas fa-hamburger"></span></button></router-link>
      <router-link to="/entregaretirada"><button><span class="fas fa-arrow-right"></span></button></router-link>
    </section>
  </section>
</template>
<style scoped>
/* ---------- GERAL ---------- */
.pg1 {
  background-color: white;
  color: #006633;
}

/* ---------- LISTA DE LANCHES ---------- */
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

/* ---------- CONTROLE DE QUANTIDADE ---------- */
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

/* ---------- BOTÕES DE NAVEGAÇÃO ---------- */
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

/* ---------- SELECIONADOS ---------- */
.selecionados {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  border: 1px solid #ccc;
  width: fit-content;
  max-width: 100%;
}

.selecionados h3 {
  margin: 0 0 10px;
  color: #009639;
  font-size: 1.1em;
}

.selecionados ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
  width: 100%;
}

.selecionados li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #009639;
  font-weight: bold;
  margin-bottom: 5px;
  background-color: white;
  padding: 6px 10px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.btn-remover {
  background-color: #9e2a1d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.85em;
  cursor: pointer;
}

.btn-remover:hover {
  background-color: #741e14;
}

#valor-total {
  margin-top: 10px;
  font-size: 1.2em;
  color: #009639;
  font-weight: bold;
}

.btn-limpar {
  margin-top: 10px;
  background-color: #009639;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.95em;
  cursor: pointer;
}

.btn-limpar:hover {
  background-color: #007d32;
}
</style>