<script setup>
import { RouterLink } from 'vue-router';
import { createPinia } from 'pinia';
</script>
<template>
    <section id="pg5">
        <h1>Bebidas</h1>
        <div class="container">
            <div class="produto" data-nome="agua_crystal">
                <img src="/images/agua_crystal.png" alt="Agua">
                <p>Água sem gás</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 4,00</p>
            </div>

            <div class="produto" data-nome="agua_com_gas">
                <img src="/images/agua_com_gas.png" alt="Agua com Gas">
                <p>Água com gás</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,00</p>
            </div>

            <div class="produto" data-nome="suco_prats">
                <img src="" alt="suco_prats">
                <p>Suco de laranja</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 7,00</p>
            </div>

            <div class="produto" data-nome="suco_de_uva_del_valle">
                <img src="/images/suco_de_uva_del_valle.webp" alt="suco de uva">
                <p>Suco de uva</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 6,00</p>
            </div>

            <div class="produto" data-nome="Red_Bull">
                <img src="/images/Red_Bull.png" alt="Red Bull">
                <p>Red Bull</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 11,00</p>
            </div>

            <div class="produto" data-nome="monster">
                <img src="/images/monster.png" alt="Monster">
                <p>Energético monster</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 9,00</p>
            </div>
            <div class="produto" data-nome="coca">
                <img src="/images/coca.png" alt="Coca Cola">
                <p>Coca cola lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="coca_zero">
                <img src="/images/coca_zero.png" alt="Coca Zero">
                <p>Coca cola zero lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="guarana">
                <img src="/images/guarana.webp" alt="Guarana">
                <p>Guaraná lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="sprite">
                <img src="/images/sprite.png" alt="Sprite">
                <p>Sprite lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="fanta_laranja">
                <img src="/images/fanta laranja.png" alt="Fanta Laranja">
                <p>Fanta laranja lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="fanta_uva">
                <img src="/images/fata_uva.webp" alt="Fanta Uva">
                <p>Fanta uva lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="botoes-navegacao">
                <router-link to="/lanches"><button id="btn-voltar">Voltar</button></router-link>
                <router-link to="/entregaretirada"><button id="btn-proximo">Próximo</button></router-link>
            </div>
        </div>
    </section>    
</template>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* espaço entre os produtos */
  justify-content: center; /* centraliza os produtos */
}

.produto {
  width: calc(50% - 20px); /* metade da largura menos o espaço entre */
  box-sizing: border-box;
}

  img {
  width: 400px; /* Define a largura */
  height: 400px; /* Define a altura */
}
.produto {
  display: flex;
  flex-direction: column;
  align-items: center; /* alinha horizontalmente ao centro */
  justify-content: center; /* alinha verticalmente ao centro */
  text-align: center;
}

/* Seção de bebidas */
#pg5 {
  margin-bottom: 30px;
}

/* Container de bebidas */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* Cartão de produto */
.produto {
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

/* Imagem do produto */
.produto img {
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
}

/* Nome e preço */
.produto p {
  margin: 4px 0;
  font-size: 14px;
  color: #333;
}

.produto p:last-of-type {
  font-weight: bold;
  color: #009639;
}

/* Controle de quantidade */
.controle-quantidade {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

.controle-quantidade button {
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

.controle-quantidade button:first-child {
  background-color: #9e2a1d;
}

.controle-quantidade button:hover {
  background-color: #007d32;
}

.controle-quantidade .quantidade {
  min-width: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
button {
  background-color: #28a745; /* Verde vibrante */
  color: white;
  border: none;
  border-radius: 12px; /* Bordas arredondadas */
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  position:relative;
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
  background-color: #154b13;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.botoes-navegacao button:hover {
  background-color: #005fa3;
}


button:hover {
  background-color: #176829; /* Tom mais escuro no hover */
}
</style>