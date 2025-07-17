<script setup>
import { RouterLink } from 'vue-router';
// Lista de ingredientes com quantidade
const ingredientesSelecionados = [];

// Tabela de preços
const precos = {
  "Italiano Branco": 2.50,
  "Integral": 2.80,
  "Parmesão e Orégano": 3.00,
  "Três Queijos": 3.50,
  "Pepperoni": 4.00,
  "Presunto": 3.50,
  "Salame": 4.20,
  "Bacon": 3.80,
  "Queijo Mussarela": 2.70,
  "Cheddar Cremoso": 1.80,
  "Cream Cheese": 1.60
};

// Função chamada pelos botões de + e –
function alterarQuantidade(botao, delta) {
  const card = botao.closest('.ingrediente-card');
  const nome = card.dataset.nome;
  const categoria = card.dataset.categoria;
  const preco = parseFloat(card.dataset.preco);
  const spanQtd = card.querySelector('.quantidade');

  let quantidadeAtual = parseInt(spanQtd.textContent) + delta;
  if (quantidadeAtual < 0) quantidadeAtual = 0;

  spanQtd.textContent = quantidadeAtual;

  const existente = ingredientesSelecionados.find(item => item.nome === nome);
  if (existente) {
    existente.quantidade = quantidadeAtual;
    existente.total = preco * quantidadeAtual;
    if (quantidadeAtual === 0) {
      const index = ingredientesSelecionados.indexOf(existente);
      ingredientesSelecionados.splice(index, 1);
    }
  } else if (quantidadeAtual > 0) {
    ingredientesSelecionados.push({
      nome,
      categoria,
      preco,
      quantidade: quantidadeAtual,
      total: preco * quantidadeAtual
    });
  }

  atualizarLista();
}

// Atualiza a lista lateral com ingredientes
function atualizarLista() {
  const lista = document.getElementById("lista-ingredientes");
  lista.innerHTML = "";
  let total = 0;

  ingredientesSelecionados.forEach((item, index) => {
    const subtotal = item.quantidade * item.preco;
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.categoria}</strong>: ${item.nome} x${item.quantidade} – R$ ${subtotal.toFixed(2)}
      <button onclick="removerIngrediente(${index})">🗑️</button>`;
    lista.appendChild(li);
    total += subtotal;
  });

  document.getElementById("valor-total").textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Remove completamente um item
function removerIngrediente(index) {
  const item = ingredientesSelecionados[index];
  ingredientesSelecionados.splice(index, 1);

  // Zera a quantidade no card
  const card = document.querySelector(`.ingrediente-card[data-nome="${item.nome}"]`);
  if (card) card.querySelector(".quantidade").textContent = "0";

  atualizarLista();
}

// Limpa todos os ingredientes
function limparIngredientes() {
  ingredientesSelecionados.length = 0;
  document.querySelectorAll('.quantidade').forEach(el => el.textContent = "0");
  atualizarLista(); 
}
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
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
                        </div>
                    </div>

                    <div class="ingrediente-card" data-nome="Integral" data-categoria="Pães" data-preco="2.80">
                        <img src="/images/pao_9_graos.png" alt="Integral" />
                        <p><strong>Integral</strong></p>
                        <p class="preco">R$ 2,80</p>
                        <div class="controle">
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
                        </div>
                    </div>

                    <div class="ingrediente-card" data-nome="Parmesão e Orégano" data-categoria="Pães"
                        data-preco="3.00">
                        <img src="/images/pao_parmesao_e_oregano_.png" alt="Parmesão e Orégano" />
                        <p><strong>Parmesão e Orégano</strong></p>
                        <p class="preco">R$ 3,00</p>
                        <div class="controle">
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
                        </div>
                    </div>

                    <div class="ingrediente-card" data-nome="Três Queijos" data-categoria="Pães" data-preco="3.50">
                        <img src="/images/pao_3_queijos.png" alt="Três Queijos" />
                        <p><strong>Três Queijos</strong></p>
                        <p class="preco">R$ 3,50</p>
                        <div class="controle">
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
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
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
                        </div>
                    </div>

                    <div class="ingrediente-card" data-nome="Presunto" data-categoria="Carnes" data-preco="3.50">
                        <img src="/images/presunto.png" alt="Presunto" />
                        <p><strong>Presunto</strong></p>
                        <p class="preco">R$ 3,50</p>
                        <div class="controle">
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
                        </div>
                    </div>

                    <div class="ingrediente-card" data-nome="Salame" data-categoria="Carnes" data-preco="4.20">
                        <img src="/images/salame.png" alt="Salame" />
                        <p><strong>Salame</strong></p>
                        <p class="preco">R$ 4,20</p>
                        <div class="controle">
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
                        </div>
                    </div>

                    <div class="ingrediente-card" data-nome="Bacon" data-categoria="Carnes" data-preco="3.80">
                        <img src="/images/bacon.png" alt="Bacon" />
                        <p><strong>Bacon</strong></p>
                        <p class="preco">R$ 3,80</p>
                        <div class="controle">
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Queijos -->
            <div class="ingredientes-secao">
                <h3>Queijos</h3>
                <div class="ingredientes">
                    <div class="ingrediente-card" data-nome="Queijo Mussarela" data-categoria="Queijos"
                        data-preco="2.70">
                        <img src="/images/sbw-queijo.png" alt="Queijo Mussarela" />
                        <p><strong>Queijo Mussarela</strong></p>
                        <p class="preco">R$ 2,70</p>
                        <div class="controle">
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
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
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
                        </div>
                    </div>

                    <div class="ingrediente-card" data-nome="Cream Cheese" data-categoria="Molhos" data-preco="1.60">
                        <img src="/images/cream_cheese.png" alt="Cream Cheese" />
                        <p><strong>Cream Cheese</strong></p>
                        <p class="preco">R$ 1,60</p>
                        <div class="controle">
                            <button onclick="alterarQuantidade(this, -1)">–</button>
                            <span class="quantidade">0</span>
                            <button onclick="alterarQuantidade(this, 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ingredientes Selecionados -->
            <div class="selecionados">
                <h3>Ingredientes Selecionados:</h3>
                <ul id="lista-ingredientes"></ul>
                <p id="valor-total"><strong>Total:</strong> R$ 0.00</p>
                <button onclick="limparIngredientes()">Limpar Tudo 🧹</button>
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