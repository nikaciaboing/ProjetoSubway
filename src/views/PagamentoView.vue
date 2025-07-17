<script setup>
import { ref } from 'vue';

const total = 34.00;

const mostrarCartaoOpcoes = ref(false);
const mostrarPixOpcoes = ref(false);
const mostrarDinheiroOpcoes = ref(false);

const mensagemCartao = ref('');
const chavePix = ref('+5511999999999');
const msgCopiar = ref('');
const valorRecebido = ref('');
const troco = ref('');

function mostrarCartao() {
  mostrarCartaoOpcoes.value = true;
  mostrarPixOpcoes.value = false;
  mostrarDinheiroOpcoes.value = false;
  mensagemCartao.value = '';
}

function aproximar(tipo) {
  mensagemCartao.value = `Pagamento via ${tipo}.\nAproxime o cartão na maquininha.`;
}

function mostrarPix() {
  mostrarCartaoOpcoes.value = false;
  mostrarPixOpcoes.value = true;
  mostrarDinheiroOpcoes.value = false;
  msgCopiar.value = '';
}

function mostrarDinheiro() {
  mostrarCartaoOpcoes.value = false;
  mostrarPixOpcoes.value = false;
  mostrarDinheiroOpcoes.value = true;
  troco.value = '';
}

function calcularTroco() {
  const recebido = parseFloat(valorRecebido.value);
  if (recebido >= total) {
    troco.value = `Troco: R$ ${(recebido - total).toFixed(2)}`;
  } else if (recebido > 0) {
    troco.value = 'Valor insuficiente.';
  } else {
    troco.value = '';
  }
}

function copiarChavePix() {
  navigator.clipboard.writeText(chavePix.value)
    .then(() => {
      msgCopiar.value = 'Chave Pix copiada para a área de transferência!';
    });
}
</script>

<template>
  <section class="pg9">
    <h1>Total: <span>R$ 34,00</span></h1>

    <div class="botoes-principais">
      <button @click="mostrarCartao">Cartão</button>
      <button @click="mostrarPix">Pix</button>
      <button @click="mostrarDinheiro">Dinheiro</button>
    </div>

    <div v-if="mostrarCartaoOpcoes" class="opcoes">
      <button @click="aproximar('Crédito')">Crédito</button>
      <button @click="aproximar('Débito')">Débito</button>
      <p style="white-space: pre-line;">{{ mensagemCartao }}</p>
    </div>

    <div v-if="mostrarPixOpcoes" class="opcoes">
      <p>Copie a chave Pix:</p>
      <input
        type="text"
        :value="chavePix"
        readonly
        id="chave-pix"
        style="width: 80%; padding: 8px; border-radius: 6px; border: none; text-align: center; font-weight: bold;"
      />
      <button @click="copiarChavePix">Copiar chave Pix</button>
      <p style="color: #00e676; font-weight: bold; margin-top: 10px;">{{ msgCopiar }}</p>
    </div>

    <div v-if="mostrarDinheiroOpcoes" class="opcoes">
      <label>Valor Recebido:</label>
      <input
        type="number"
        v-model="valorRecebido"
        placeholder="Ex: 50"
        @input="calcularTroco"
      />
      <p>{{ troco }}</p>
    </div>
  </section>
</template>

<style scoped>
body {
  margin: 0;
  background: #d8d8d8;
  font-family: Arial, sans-serif;
  color: #eee;
}

.pg9 {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: #062b0b;
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(36, 35, 35, 0.5);
  text-align: center;
}

.pg9 h1 span {
  color: #00e676;
}

.botoes-principais button {
  background: #00c853;
  color: white;
  border: none;
  padding: 14px 24px;
  margin: 10px 5px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-weight: bold;
}

.botoes-principais button:hover {
  background: #00b248;
  transform: scale(1.05);
}

.opcoes {
  margin-top: 20px;
  font-weight: bold;
}

.opcoes button {
  background: #fffc32;
  margin: 8px;
  padding: 12px 20px;
  border-radius: 6px;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.opcoes button:hover {
  background: #00796b;
}

input {
  padding: 12px;
  width: 80%;
  border-radius: 6px;
  border: none;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
}
</style>
