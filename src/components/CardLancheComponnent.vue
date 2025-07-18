<script setup>
import { computed } from 'vue'
import { useCarrinhoStore } from '@/stores/carrinho'

// Props recebidas do componente pai
const props = defineProps({
  lanche: {
    type: Object,
    required: true
  }
})

// Acesso à store Pinia
const carrinho = useCarrinhoStore()

// Preço calculado a partir do objeto recebido
const preco = computed(() => props.lanche.preco || 0)

// Quantidade do item no carrinho
const quantidade = computed(() => carrinho.getQuantidade(props.lanche.nome))

// Função para adicionar ou remover item
function alterarQuantidade(valor) {
  if (valor > 0) {
    carrinho.adicionarItem(props.lanche)
  } else {
    carrinho.removerItem(props.lanche.nome)
  }
}
</script>

<template>
  <div class="card-lanche">
    <img :src="lanche.imagem" :alt="lanche.nome" />
    <p class="nome">{{ lanche.nome }}</p>
    <p class="preco">R$ {{ preco.toFixed(2) }}</p>
    <div class="controle">
      <button @click="alterarQuantidade(-1)">–</button>
      <span class="quantidade">{{ quantidade }}</span>
      <button @click="alterarQuantidade(1)">+</button>
    </div>
  </div>
</template>

<style scoped>
.card-lanche {
  width: 180px;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  padding: 10px;
  text-align: center;
}
.card-lanche img {
  width: 100px;
  border-radius: 8px;
  margin-bottom: 8px;
}
.nome {
  font-weight: bold;
  margin-bottom: 4px;
}
.preco {
  color: #009639;
  font-weight: bold;
  margin-bottom: 8px;
}
.controle {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.controle button {
  background-color: #009639;
  color: white;
  border: none;
  padding: 4px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.controle button:first-child {
  background-color: #9e2a1d;
}
</style>
