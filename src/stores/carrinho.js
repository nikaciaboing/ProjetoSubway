import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    itens: []
  }),

  getters: {
    // Total do carrinho com 2 casas decimais
    total(state) {
      return state.itens.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0
      ).toFixed(2)
    },

    // Retorna a quantidade de um item específico
    getQuantidade: (state) => (nome) => {
      const item = state.itens.find(i => i.nome === nome)
      return item ? item.quantidade : 0
    }
  },

  actions: {
    adicionarItem(lanche) {
      const existente = this.itens.find(i => i.nome === lanche.nome)
      if (existente) {
        existente.quantidade++
      } else {
        this.itens.push({
          nome: lanche.nome,
          preco: lanche.preco,
          quantidade: 1
        })
      }
    },

    removerItem(nome) {
      const index = this.itens.findIndex(i => i.nome === nome)
      if (index !== -1) {
        if (this.itens[index].quantidade > 1) {
          this.itens[index].quantidade--
        } else {
          this.itens.splice(index, 1)
        }
      }
    },

    limparCarrinho() {
      this.itens = []
    }
  }
})
