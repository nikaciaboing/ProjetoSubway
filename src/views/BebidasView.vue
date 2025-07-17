<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue'

const ingredientesSelecionados = ref([])
const total = ref(0)

function atualizarLista() {
  const lista = document.getElementById("lista-ingredientes")
  const totalElement = document.getElementById("valor-total")
  lista.innerHTML = ""
  total.value = 0

  ingredientesSelecionados.value.forEach((item, index) => {
    const subtotal = item.quantidade * item.preco
    const li = document.createElement("li")
    li.innerHTML = `<strong>${item.categoria}</strong>: ${item.nome} x${item.quantidade} – R$ ${subtotal.toFixed(2)}
      <button onclick="removerIngrediente(${index})">🗑️</button>`
    lista.appendChild(li)
    total.value += subtotal
  })

  totalElement.innerHTML = `<strong>Total:</strong> R$ ${total.value.toFixed(2)}`
}

function alterarQuantidade(event, delta) {
  const card = event.target.closest('.ingrediente-card')
  const nome = card.dataset.nome
  const categoria = card.dataset.categoria
  const preco = parseFloat(card.dataset.preco)
  const spanQtd = card.querySelector('.quantidade')

  let quantidadeAtual = parseInt(spanQtd.textContent) + delta
  if (quantidadeAtual < 0) quantidadeAtual = 0
  spanQtd.textContent = quantidadeAtual

  const existente = ingredientesSelecionados.value.find(item => item.nome === nome)

  if (existente) {
    existente.quantidade = quantidadeAtual
    existente.total = preco * quantidadeAtual
    if (quantidadeAtual === 0) {
      const index = ingredientesSelecionados.value.indexOf(existente)
      ingredientesSelecionados.value.splice(index, 1)
    }
  } else if (quantidadeAtual > 0) {
    ingredientesSelecionados.value.push({
      nome,
      categoria,
      preco,
      quantidade: quantidadeAtual,
      total: preco * quantidadeAtual
    })
  }

  atualizarLista()
}

function limparIngredientes() {
  ingredientesSelecionados.value = []
  document.querySelectorAll('.quantidade').forEach(el => el.textContent = "0")
  atualizarLista()
}

window.removerIngrediente = function (index) {
  const item = ingredientesSelecionados.value[index]
  ingredientesSelecionados.value.splice(index, 1)

  const card = document.querySelector(`.ingrediente-card[data-nome="${item.nome}"]`)
  if (card) card.querySelector('.quantidade').textContent = '0'

  atualizarLista()
}

onMounted(() => {
  atualizarLista()
})
</script>

<template>
  <section id="pg5">
    <h1>Bebidas</h1>
    <div class="container">
      <div class="produto ingrediente-card" data-nome="agua_crystal" data-categoria="Bebida" data-preco="4.00">
        <img src="/images/agua_crystal.png" alt="Agua">
        <p>Água sem gás</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 4,00</p>
      </div>

      <div class="produto ingrediente-card" data-nome="agua_com_gas" data-categoria="Bebida" data-preco="5.00">
        <img src="/images/agua_com_gas.png" alt="Agua com Gas">
        <p>Água com gás</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 5,00</p>
      </div>

      <div class="produto ingrediente-card" data-nome="suco_prats" data-categoria="Bebida" data-preco="7.00">
        <img src="/images/suco_prats.webp" alt="Suco de Laranja">
        <p>Suco de laranja</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 7,00</p>
      </div>

      <div class="produto ingrediente-card" data-nome="suco_de_uva_del_valle" data-categoria="Bebida" data-preco="6.00">
        <img src="/images/suco_de_uva_del_valle.webp" alt="Suco de Uva">
        <p>Suco de uva</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 6,00</p>
      </div>

      <div class="produto ingrediente-card" data-nome="Red_Bull" data-categoria="Bebida" data-preco="11.00">
        <img src="/images/Red_Bull.png" alt="Red Bull">
        <p>Red Bull</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 11,00</p>
      </div>

      <div class="produto ingrediente-card" data-nome="monster" data-categoria="Bebida" data-preco="9.00">
        <img src="/images/monster.png" alt="Monster">
        <p>Energético monster</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 9,00</p>
      </div>

      <div class="produto ingrediente-card" data-nome="coca" data-categoria="Bebida" data-preco="5.50">
        <img src="/images/coca.png" alt="Coca Cola">
        <p>Coca cola lata</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 5,50</p>
      </div>

      <div class="produto ingrediente-card" data-nome="coca_zero" data-categoria="Bebida" data-preco="5.50">
        <img src="/images/coca_zero.png" alt="Coca Zero">
        <p>Coca cola zero lata</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 5,50</p>
      </div>

      <div class="produto ingrediente-card" data-nome="guarana" data-categoria="Bebida" data-preco="5.50">
        <img src="/images/guarana.webp" alt="Guarana">
        <p>Guaraná lata</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 5,50</p>
      </div>

      <div class="produto ingrediente-card" data-nome="sprite" data-categoria="Bebida" data-preco="5.50">
        <img src="/images/sprite.png" alt="Sprite">
        <p>Sprite lata</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 5,50</p>
      </div>

      <div class="produto ingrediente-card" data-nome="fanta_laranja" data-categoria="Bebida" data-preco="5.50">
        <img src="/images/fanta laranja.png" alt="Fanta Laranja">
        <p>Fanta laranja lata</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 5,50</p>
      </div>

      <div class="produto ingrediente-card" data-nome="fanta_uva" data-categoria="Bebida" data-preco="5.50">
        <img src="/images/fata_uva.webp" alt="Fanta Uva">
        <p>Fanta uva lata</p>
        <div class="controle-quantidade">
          <button class="menos" @click="alterarQuantidade($event, -1)">−</button>
          <span class="quantidade">0</span>
          <button class="mais" @click="alterarQuantidade($event, 1)">+</button>
        </div>
        <p>R$ 5,50</p>
      </div>

      <div class="botoes-navegacao">
        <router-link to="/lanches"><button id="btn-voltar">Voltar</button></router-link>
        <router-link to="/entregaretirada"><button id="btn-proximo">Próximo</button></router-link>
      </div>
    </div>
    <div class="selecionados">
      <h3>Ingredientes Selecionados:</h3>
      <ul id="lista-ingredientes">
      </ul>
      <p id="valor-total"><strong>Total:</strong> R$ 0.00</p>
      <button @click="limparIngredientes">Limpar Tudo 🧹</button>
    </div>
  </section>
</template>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* espaço entre os produtos */
  justify-content: center; 
}

.produto {
  width: calc(50% - 20px); /* metade da largura menos o espaço entre */
  box-sizing: border-box;
}

  img {
  width: 400px; 
  height: 400px; 
}
.produto {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center;
}

/* Seção de bebidas */
#pg5 {
  margin-bottom: 30px;
}

/* Container de bebidas */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* Cartão de produto */
.produto {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  text-align: center;
  background: #f7f7f7;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
}

/* Imagem do produto */
.produto img {
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
}

/* Nome e preço */
.produto p {
  margin: 4px 0;
  font-size: 14px;
  color: #333;
}

.produto p:last-of-type {
  font-weight: bold;
  color: #009639;
}

/* Controle de quantidade */
.controle-quantidade {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.controle-quantidade button {
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

.controle-quantidade button:first-child {
  background-color: #9e2a1d;
}

.controle-quantidade button:hover {
  background-color: #007d32;
}

.controle-quantidade .quantidade {
  min-width: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 12px; 
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  position:relative;
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
  background-color: #009639;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.botoes-navegacao button:hover {
  background-color: #176829;
}


button:hover {
  background-color: #176829; 
}

/* selecionados */

.selecionados {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  border: 1px solid #ccc;
}
.selecionados h3 {
  color: #009639;
}

.selecionados ul {
  list-style: none;
  padding-left: 0;
  color: #009639;
  font-weight: bold;
}

.selecionados li {
  margin-bottom: 6px;
}

.selecionados button {
  background-color: #009639;
  color: #fff;
  border: none;
  padding: 4px 8px;
  margin-left: 10px;
  margin: 10px 0 10px 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}

.selecionados button:hover {
  background-color: rgb(4, 72, 4);
}

#valor-total {
  margin-top: 10px;
  font-size: 1.2em;
  color: #009639;
  font-weight: bold;
}

</style>