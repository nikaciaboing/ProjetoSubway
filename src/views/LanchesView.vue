<script setup>

  const lanchesSelecionados = [];

  const precos = {
    "Sanduíche Vegetariano": 34.00,
    "Sanduíche Frango Teriyaki": 34.00,
    "Sanduíche de Presunto": 34.00,
    "Sanduíche Italiano": 34.00,
    "Sanduíche Carne Suprema": 34.00,
    "Sanduíche Carne Seca c/ Cream Cheese": 34.00
  };

  function alterarQuantidade(botao, delta) {
    const li = botao.closest('li');
    const nome = li.querySelector('p').textContent.trim();
    const preco = precos[nome] || 0;
    const spanQtd = li.querySelector('.quantidade');

    let quantidadeAtual = parseInt(spanQtd.textContent) + delta;
    if (quantidadeAtual < 0) quantidadeAtual = 0;

    spanQtd.textContent = quantidadeAtual;

    const existente = lanchesSelecionados.find(item => item.nome === nome);
    if (existente) {
      existente.quantidade = quantidadeAtual;
      existente.total = preco * quantidadeAtual;
      if (quantidadeAtual === 0) {
        const index = lanchesSelecionados.indexOf(existente);
        lanchesSelecionados.splice(index, 1);
      }
    } else if (quantidadeAtual > 0) {
      lanchesSelecionados.push({
        nome,
        preco,
        quantidade: quantidadeAtual,
        total: preco * quantidadeAtual
      });
    }

    atualizarListaLanches();
  }

  function atualizarListaLanches() {
    const lista = document.getElementById("selecionados");
    lista.innerHTML = "";
    let total = 0;

    lanchesSelecionados.forEach((item, index) => {
      const subtotal = item.quantidade * item.preco;
      const li = document.createElement("li");
      li.innerHTML = `${item.nome} x${item.quantidade} – R$ ${subtotal.toFixed(2)}
      <button onclick="removerLanche(${index})">Remover</button>`;

      lista.appendChild(li);
      total += subtotal;
    });

    document.getElementById("valor").innerHTML = `<strong>Total:</strong> R$ ${total.toFixed(2)}`;

  }

  function removerLanche(index) {
    const item = lanchesSelecionados[index];
    lanchesSelecionados.splice(index, 1);

    const cards = document.querySelectorAll('.lanches ul li');
    cards.forEach(li => {
      const nome = li.querySelector('p').textContent.trim();
      if (nome === item.nome) {
        li.querySelector('.quantidade').textContent = "0";
      }
    });

    atualizarListaLanches();
  }

  function limparLanches() {
    lanchesSelecionados.length = 0;
    document.querySelectorAll('.quantidade').forEach(el => el.textContent = "0");
    atualizarListaLanches();
  }
</script>
<template>
  <section class="lanches">
    <ul>
      <li>
        <img src="/images/sanduiches-veg-vegetariano.jpg" alt="Vegetariano" />
        <p>Sanduíche Vegetariano</p>
        <p class="preco">R$ 34,00</p>
        <div class="controle">
          <button onclick="alterarQuantidade(this, -1)">–</button>
          <span class="quantidade">0</span>
          <button onclick="alterarQuantidade(this, 1)">+</button>
        </div>
      </li>

      <li>
        <img src="/images/sanduiches-embutidos-presunto.jpg" alt="Presunto" />
        <p>Sanduíche de Presunto</p>
        <p class="preco">R$ 34,00</p>
        <div class="controle">
          <button onclick="alterarQuantidade(this, -1)">–</button>
          <span class="quantidade">0</span>
          <button onclick="alterarQuantidade(this, 1)">+</button>
        </div>
      </li>

      <li>
        <img src="/images/sanduiches-embutidos-bmt-italiano.jpg" alt="BMT Italiano" />
        <p>Sanduíche Italiano</p>
        <p class="preco">R$ 34,00</p>
        <div class="controle">
          <button onclick="alterarQuantidade(this, -1)">–</button>
          <span class="quantidade">0</span>
          <button onclick="alterarQuantidade(this, 1)">+</button>
        </div>
      </li>

      <li>
        <img src="/images/sanduiches-embutidos-bmt-italiano.jpg" alt="BMT Italiano" />
        <p>Sanduíche Italiano</p>
        <p class="preco">R$ 34,00</p>
        <div class="controle">
          <button onclick="alterarQuantidade(this, -1)">–</button>
          <span class="quantidade">0</span>
          <button onclick="alterarQuantidade(this, 1)">+</button>
        </div>
      </li>

      <li>
        <img src="/images/sanduiches-carne-supreme.jpg" alt="Carne Supreme" />
        <p>Sanduíche Carne Suprema</p>
        <p class="preco">R$ 34,00</p>
        <div class="controle">
          <button onclick="alterarQuantidade(this, -1)">–</button>
          <span class="quantidade">0</span>
          <button onclick="alterarQuantidade(this, 1)">+</button>
        </div>
      </li>

      <li>
        <img src="/images/sanduiches-frango-teriyaki.jpg" alt="Frango Teriyaki" />
        <p>Sanduíche Frango Teriyaki</p>
        <p class="preco">R$ 34,00</p>
        <div class="controle">
          <button onclick="alterarQuantidade(this, -1)">–</button>
          <span class="quantidade">0</span>
          <button onclick="alterarQuantidade(this, 1)">+</button>
        </div>
      </li>
       <section class="resumo">
          <h3>Lanches Selecionados:</h3>
          <ul id="selecionados"></ul>
          <p id="valor"><strong>Total:</strong> R$ 0.00</p>
          <button onclick="limparLanches()">Limpar Tudo</button>
        </section>
    </ul>

    <section class="botoes">
      <router-link to="/bebidas"><button>
        <span class="fas fa-bottle-water"></span>
      </button></router-link>
      <router-link to="/montarlanche"><button>
        <span class="fas fa-hamburger"></span>
      </button></router-link>
      <router-link to="/entregaretirada"><button>
        <span class="fas fa-arrow-right"></span>
      </button></router-link>
    </section>
  </section>
</template>

<style scoped>
/* Lanches */

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
  justify-items: center;
}

.lanches img {
  width: 100px;
  border-radius: 12px;
}

.lanches p {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
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

.lanches ul li img {
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

/* Controle de quantidade */

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


/* Botões */

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

.adicionar {
  background-color: #e6bc00;
  border: none;
  border-radius: 10px;
  color: #006633;
  font-size: 22px;
}
</style>