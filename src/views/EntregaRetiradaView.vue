<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
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
              <router-link to="/pagamento"><button class="opcao-btn">🏃‍♂️ Retirada</button></router-link>
              <router-link to="/enderecoentrega"><button class="opcao-btn">🛵 Entrega</button></router-link> 
            </div>
             <div class="botoes-navegacao">
                <router-link to="/bebidas"><button id="btn-voltar">Voltar</button></router-link>
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
</style>