import { ref, computed } from 'vue';

import { defineStore } from 'pinia';



export const useCartStore = defineStore('cart', () => {

  const cart = ref([]);



  function adicionar(item) {

    const produto = cart.value.find(p => p.nome === item.nome);

    if (produto) {

      produto.quantidade += 1;

    } else {

      cart.value.push({ ...item, quantidade: 1 });

    }

  }



  function diminuir(item) {

    const produto = cart.value.find(p => p.nome === item.nome);

    if (produto) {

      if (produto.quantidade > 1) {

        produto.quantidade -= 1;

      } else {

        cart.value = cart.value.filter(p => p.nome !== item.nome);

      }

    }

  }



  function limpar() {

    cart.value = [];

  }



  const total = computed(() =>

    cart.value.reduce((acc, p) => acc + p.preco * p.quantidade, 0)

  );



  return {

    cart,

    adicionar,

    diminuir,

    limpar,

    total

  };

});