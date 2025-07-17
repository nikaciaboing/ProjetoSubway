import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProdutosStore = defineStore('produtos', () => {
  const bebidas = ref([
    { nome: 'agua_crystal', titulo: 'Água sem gás', preco: 4.0, quantidade: 0, imagem: '/images/agua_crystal.png' },
    { nome: 'agua_com_gas', titulo: 'Água com gás', preco: 5.0, quantidade: 0, imagem: '/images/agua_com_gas.png' },
    { nome: 'suco_prats', titulo: 'Suco de laranja', preco: 7.0, quantidade: 0, imagem: '/images/suco_prats.webp' },
    { nome: 'suco_de_uva_del_valle', titulo: 'Suco de uva', preco: 6.0, quantidade: 0, imagem: '/images/suco_de_uva_del_valle.webp' },
    { nome: 'Red_Bull', titulo: 'Red Bull', preco: 11.0, quantidade: 0, imagem: '/images/Red_Bull.png' },
    { nome: 'monster', titulo: 'Energético monster', preco: 9.0, quantidade: 0, imagem: '/images/monster.png' },
    { nome: 'coca', titulo: 'Coca cola lata', preco: 5.5, quantidade: 0, imagem: '/images/coca.png' },
    { nome: 'coca_zero', titulo: 'Coca cola zero lata', preco: 5.5, quantidade: 0, imagem: '/images/coca_zero.png' },
    { nome: 'guarana', titulo: 'Guaraná lata', preco: 5.5, quantidade: 0, imagem: '/images/guarana.webp' },
    { nome: 'sprite', titulo: 'Sprite lata', preco: 5.5, quantidade: 0, imagem: '/images/sprite.png' },
    { nome: 'fanta_laranja', titulo: 'Fanta laranja lata', preco: 5.5, quantidade: 0, imagem: '/images/fanta laranja.png' },
    { nome: 'fanta_uva', titulo: 'Fanta uva lata', preco: 5.5, quantidade: 0, imagem: '/images/fata_uva.webp' }
  ]);

  const sanduiches = ref([
    { nome: 'Sanduíche Vegetariano', titulo: 'Sanduíche Vegetariano', preco: 34, imagem: '/images/sanduiches-veg-vegetariano.jpg', quantidade: 0 },
    { nome: 'Sanduíche Frango Teriyaki', titulo: 'Sanduíche Frango Teriyaki', preco: 34, imagem: '/images/sanduiches-frango-teriyaki.jpg', quantidade: 0 },
    { nome: 'Sanduíche de Presunto', titulo: 'Sanduíche de Presunto', preco: 34, imagem: '/images/sanduiches-embutidos-presunto.jpg', quantidade: 0 },
    { nome: 'Sanduíche Italiano', titulo: 'Sanduíche Italiano', preco: 34, imagem: '/images/sanduiches-embutidos-bmt-italiano.jpg', quantidade: 0 },
    { nome: 'Sanduíche Carne Suprema', titulo: 'Sanduíche Carne Suprema', preco: 34, imagem: '/images/sanduiches-carne-supreme.jpg', quantidade: 0 },
    { nome: 'Sanduíche Carne Seca c/ Cream Cheese', titulo: 'Sanduíche Carne Seca c/ Cream Cheese', preco: 34, imagem: '/images/sanduiches-carne-seca-com-cream-cheese.jpg', quantidade: 0 }
  ]);

  const ingredientes = ref([
    { nome: 'Italiano Branco', titulo: 'Italiano Branco', categoria: 'Pães', preco: 2.5, imagem: '/images/pao_italiano_branco.png', quantidade: 0 },
    { nome: 'Integral', titulo: 'Integral', categoria: 'Pães', preco: 2.8, imagem: 'src/images/pao_9_graos.png', quantidade: 0 },
    { nome: 'Parmesão e Orégano', titulo: 'Parmesão e Orégano', categoria: 'Pães', preco: 3.0, imagem: '/images/pao_parmesao_e_oregano_.png', quantidade: 0 },
    { nome: 'Três Queijos', titulo: 'Três Queijos', categoria: 'Pães', preco: 3.5, imagem: '/images/pao_3_queijos.png', quantidade: 0 },
    { nome: 'Pepperoni', titulo: 'Pepperoni', categoria: 'Carnes', preco: 4.0, imagem: '/images/pepperone.png', quantidade: 0 },
    { nome: 'Presunto', titulo: 'Presunto', categoria: 'Carnes', preco: 3.5, imagem: '/images/presunto.png', quantidade: 0 },
    { nome: 'Salame', titulo: 'Salame', categoria: 'Carnes', preco: 4.2, imagem: '/images/salame.png', quantidade: 0 },
    { nome: 'Bacon', titulo: 'Bacon', categoria: 'Carnes', preco: 3.8, imagem: '/images/bacon.png', quantidade: 0 },
    { nome: 'Queijo Mussarela', titulo: 'Queijo Mussarela', categoria: 'Queijos', preco: 2.7, imagem: '/images/sbw-queijo.png', quantidade: 0 },
    { nome: 'Cheddar Cremoso', titulo: 'Cheddar Cremoso', categoria: 'Molhos', preco: 1.8, imagem: '/images/cheddar_cremoso.png', quantidade: 0 },
    { nome: 'Cream Cheese', titulo: 'Cream Cheese', categoria: 'Molhos', preco: 1.6, imagem: '/images/cream_cheese.png', quantidade: 0 }
  ]);

  function aumentar(lista, nome) {
    const item = lista.value.find(el => el.nome === nome);
    if (item) item.quantidade += 1;
  }

  function diminuir(lista, nome) {
    const item = lista.value.find(el => el.nome === nome);
    if (item && item.quantidade > 0) item.quantidade -= 1;
  }

  function limparTodos() {
    [bebidas, sanduiches, ingredientes].forEach(lista => {
      lista.value.forEach(item => item.quantidade = 0);
    });
  }

  return {
    bebidas,
    sanduiches,
    ingredientes,
    aumentar,
    diminuir,
    limparTodos
  };
});