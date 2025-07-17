<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'

const ingredientesSelecionados = ref([])

const total = ref(0)

function atualizarLista() {
  const lista = document.getElementById('lista-ingredientes')
  const valorTotal = document.getElementById('valor-total')
  lista.innerHTML = ''

  total.value = 0

  ingredientesSelecionados.value.forEach(item => {
    const li = document.createElement('li')
    li.textContent = `${item.nome} (${item.quantidade}) - R$ ${(item.quantidade * item.preco).toFixed(2)}`
    lista.appendChild(li)

    total.value += item.quantidade * item.preco
  })

  valorTotal.innerHTML = `<strong>Total:</strong> R$ ${total.value.toFixed(2)}`
}

// Adiciona ou remove ingredientes
function alterarQuantidade(event, delta) {
  const card = event.target.closest('.ingrediente-card')
  const nome = card.dataset.nome
  const preco = parseFloat(card.dataset.preco)
  const spanQuantidade = card.querySelector('.quantidade')
  let quantidade = parseInt(spanQuantidade.textContent)

  quantidade += delta
  if (quantidade < 0) quantidade = 0

  spanQuantidade.textContent = quantidade

  const index = ingredientesSelecionados.value.findIndex(item => item.nome === nome)

  if (index !== -1) {
    if (quantidade === 0) {
      ingredientesSelecionados.value.splice(index, 1)
    } else {
      ingredientesSelecionados.value[index].quantidade = quantidade
    }
  } else if (quantidade > 0) {
    ingredientesSelecionados.value.push({ nome, preco, quantidade })
  }

  atualizarLista()
}

// Limpa os ingredientes selecionados
function limparIngredientes() {
  ingredientesSelecionados.value = []
  total.value = 0

  // Zera visualmente todas as quantidades no template
  document.querySelectorAll('.quantidade').forEach(el => el.textContent = '0')

  atualizarLista()
}

// Garante que o HTML esteja montado antes de tentar acessar os elementos
onMounted(() => {
  atualizarLista()
})
</script>
<template>
  <section class="montar-lanche">
    <h2>Monte Seu Lanche Subway</h2>

    <!-- Pães -->
    <div class="ingredientes-secao">
      <h3>Pães</h3>
      <div class="ingredientes">
        <div class="ingrediente-card" data-nome="Italiano Branco" data-categoria="Pães" data-preco="2.50">
          <img src="/images/pao_italiano_branco.png" alt="Italiano Branco" />
          <p><strong>Italiano Branco</strong></p>
          <p class="preco">R$ 2,50</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>

        <div class="ingrediente-card" data-nome="Integral" data-categoria="Pães" data-preco="2.80">
          <img src="/images/pao_9_graos.png" alt="Integral" />
          <p><strong>Integral</strong></p>
          <p class="preco">R$ 2,80</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>

        <div class="ingrediente-card" data-nome="Parmesão e Orégano" data-categoria="Pães" data-preco="3.00">
          <img src="/images/pao_parmesao_e_oregano_.png" alt="Parmesão e Orégano" />
          <p><strong>Parmesão e Orégano</strong></p>
          <p class="preco">R$ 3,00</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>

        <div class="ingrediente-card" data-nome="Três Queijos" data-categoria="Pães" data-preco="3.50">
          <img src="/images/pao_3_queijos.png" alt="Três Queijos" />
          <p><strong>Três Queijos</strong></p>
          <p class="preco">R$ 3,50</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Carnes -->
    <div class="ingredientes-secao">
      <h3>Carnes</h3>
      <div class="ingredientes">
        <div class="ingrediente-card" data-nome="Pepperoni" data-categoria="Carnes" data-preco="4.00">
          <img src="/images/pepperone.png" alt="Pepperoni" />
          <p><strong>Pepperoni</strong></p>
          <p class="preco">R$ 4,00</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>

        <div class="ingrediente-card" data-nome="Presunto" data-categoria="Carnes" data-preco="3.50">
          <img src="/images/presunto.png" alt="Presunto" />
          <p><strong>Presunto</strong></p>
          <p class="preco">R$ 3,50</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>

        <div class="ingrediente-card" data-nome="Salame" data-categoria="Carnes" data-preco="4.20">
          <img src="/images/salame.png" alt="Salame" />
          <p><strong>Salame</strong></p>
          <p class="preco">R$ 4,20</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>

        <div class="ingrediente-card" data-nome="Bacon" data-categoria="Carnes" data-preco="3.80">
          <img src="/images/bacon.png" alt="Bacon" />
          <p><strong>Bacon</strong></p>
          <p class="preco">R$ 3,80</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Queijos -->
    <div class="ingredientes-secao">
      <h3>Queijos</h3>
      <div class="ingredientes">
        <div class="ingrediente-card" data-nome="Queijo Mussarela" data-categoria="Queijos" data-preco="2.70">
          <img src="/images/sbw-queijo.png" alt="Queijo Mussarela" />
          <p><strong>Queijo Mussarela</strong></p>
          <p class="preco">R$ 2,70</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Molhos -->
    <div class="ingredientes-secao">
      <h3>Molhos</h3>
      <div class="ingredientes">
        <div class="ingrediente-card" data-nome="Cheddar Cremoso" data-categoria="Molhos" data-preco="1.80">
          <img src="/images/cheddar_cremoso.png" alt="Cheddar Cremoso" />
          <p><strong>Cheddar Cremoso</strong></p>
          <p class="preco">R$ 1,80</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>

        <div class="ingrediente-card" data-nome="Cream Cheese" data-categoria="Molhos" data-preco="1.60">
          <img src="/images/cream_cheese.png" alt="Cream Cheese" />
          <p><strong>Cream Cheese</strong></p>
          <p class="preco">R$ 1,60</p>
          <div class="controle">
            <button @click="alterarQuantidade($event, -1)">–</button>
            <span class="quantidade">0</span>
            <button @click="alterarQuantidade($event, 1)">+</button>
          </div>
        </div>
      </div>
    </div>

    <div class="selecionados">
      <h3>Ingredientes Selecionados:</h3>
      <ul id="lista-ingredientes">
      </ul>
      <p id="valor-total"><strong>Total:</strong> R$ 0.00</p>
      <button @click="limparIngredientes">Limpar Tudo 🧹</button>
    </div>

    <div class="botoes">
      <router-link to="/lanches"><button type="button">⬅ Voltar</button></router-link>
      <router-link to="/bebidas"><button type="submit">Continuar ➡</button></router-link>
    </div>
  </section>
</template>
<style scoped>
/* ---------- CONTAINER PRINCIPAL ---------- */
.montar-lanche {
  background: white;
  padding: 25px;
  max-width: 900px;
  margin: 40px auto;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}

/* ---------- INGREDIENTES ---------- */
.ingredientes-secao {
  margin-bottom: 30px;
}

.ingredientes {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.ingrediente-card {
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

.ingrediente-card img {
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
}

.ingrediente-card p {
  margin: 4px 0;
  font-size: 14px;
  color: #333;
}

.ingrediente-card .preco {
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

/* ---------- SELECIONADOS ---------- */
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

/* ---------- BOTÕES INFERIORES ---------- */
.botoes {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.botoes button {
  background-color: #ffcb05;
  color: #003a23;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.botoes button:hover {
  background-color: #ffd633;
}
</style>