<script setup>
// BOTÃO ENTREGA E RETIRADA 

let tipoRecebimento = null;

function selecionarOpcao(opcao) {
  tipoRecebimento = opcao;
  alert(`Opção selecionada: ${opcao}`);
}

function finalizarPedido() {
  if (!tipoRecebimento) {
    alert("Por favor, selecione entre Retirada ou Entrega.");
    return;
  }

  if (ingredientesSelecionados.length === 0) {
    alert("Você ainda não adicionou nenhum ingrediente.");
    return;
  }

  const total = ingredientesSelecionados.reduce((soma, item) => soma + item.total, 0).toFixed(2);

  alert(`Pedido finalizado com sucesso!\nModo: ${tipoRecebimento}\nTotal: R$ ${total}`);
}

</script>
<template>
   <!-- Forma de recebimento -->
        <section class="opcao-entrega-retirada">
            <h3>Como você deseja receber seu lanche?</h3>
            <div class="opcoes">
                <button class="opcao-btn" onclick="selecionarOpcao('Retirada')">🏃‍♂️ Retirada</button>
                <button class="opcao-btn" onclick="selecionarOpcao('Entrega')">🛵 Entrega</button>
            </div>

            <div class="finalizar">
                <button onclick="finalizarPedido()"> Escolher Forma de Pagamento </button>
            </div>
        </section> 
</template>
<style scoped>
/* BOTÃO ENTREGA E RETIRADA */

 .opcao-entrega-retirada {
  margin-top: 40px;
  text-align: center;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 12px;
  border: 1px solid #ccc;
}

.opcoes {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 15px 0;
}

.opcao-btn {
  padding: 10px 20px;
  background-color: #009639;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.opcao-btn:hover {
  background-color: #007a30;
}

.finalizar button {
  background-color: #ffcb05;
  color: #003a23;
  border: none;
  padding: 12px 24px;
  font-size: 1.1em;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.finalizar button:hover {
  background-color: #ffd633;
}
</style>