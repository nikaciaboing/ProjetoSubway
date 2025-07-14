<script setup>
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useProdutosStore = defineStore('produtos', () => {
    const produtos = ref([
        {
            id: 1,
            title: 'Água sem gás',
            price: 4.00,
            brand: 'agua_crystal',
            cover: 'src/imagens/agua_crystal.png',
        },
        {
            id: 2,
            title: 'Água com gás',
            price: 5.00,
            brand: 'agua_com_gas',
            cover: 'src/imagens/agua_com_gas.png',
        },
        {
            id: 3,
            title: 'Suco de laranja',
            price: 7.00,
            brand: 'suco_prats',
            cover: 'src/imagens/suco_prats.webp',
        },
        {
            id: 4,
            title: 'Suco de uva',
            price: 6.00,
            brand: 'suco_de_uva_del_valle',
            cover: 'src/imagens/suco_de_uva_del_valle.webp',
        },
        {
            id: 5,
            title: 'Red Bull',
            price: 11.00,
            brand: 'Red_Bull',
            cover: 'src/imagens/Red_Bull.png',
        },
        {
            id: 6,
            title: 'Energético Monster',
            price: 9.00,
            brand: 'monster',
            cover: 'src/imagens/monster.png',
        },
        {
            id: 7,
            title: 'Coca cola lata',
            price: 5.50,
            brand: 'coca',
            cover: 'src/imagens/coca.png',
        },
        {
            id: 8,
            title: 'Coca cola zero lata',
            price: 5.50,
            brand: 'coca_zero',
            cover: 'src/imagens/coca_zero.png',
        },
        {
            id: 9,
            title: 'Guaraná lata',
            price: 5.50,
            brand: 'guarana',
            cover: 'src/imagens/guarana.webp',
        },
        {
            id: 10,
            title: 'Sprite lata',
            price: 5.50,
            brand: 'sprite',
            cover: 'src/imagens/sprite.png',
        },
        {
            id: 11,
            title: 'Fanta laranja lata',
            price: 5.50,
            brand: 'fanta_laranja',
            cover: 'src/imagens/fanta laranja.png',
        },
        {
            id: 12,
            title: 'Fanta uva lata',
            price: 5.50,
            brand: 'fanta_uva',
            cover: 'src/imagens/fata_uva.webp',
        },
    ]);

    return { produtos };
});
</script>

<template>
    <section id="pg5">
        <h1>Bebidas</h1>
        <div class="container">
            <div class="produto" data-nome="agua_crystal">
                <img src="/subway/public/images/agua_crystal.png" alt="Agua">
                <p>Água sem gás</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 4,00</p>
            </div>

            <div class="produto" data-nome="agua_com_gas">
                <img src="/subway/public/imagens/agua_com_gas.png" alt="Agua com Gas">
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
                <img src="/subway/public/images/suco_de_uva_del_valle.webp" alt="suco de uva">
                <p>Suco de uva</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 6,00</p>
            </div>

            <div class="produto" data-nome="Red_Bull">
                <img src="/subway/public/imagens/Red_Bull.png" alt="Red Bull">
                <p>Red Bull</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 11,00</p>
            </div>

            <div class="produto" data-nome="monster">
                <img src="/subway/public/imagens/monster.png" alt="Monster">
                <p>Energético monster</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 9,00</p>
            </div>
            <div class="produto" data-nome="coca">
                <img src="/subway/public/imagens/coca.png" alt="Coca Cola">
                <p>Coca cola lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="coca_zero">
                <img src="/subway/public/imagens/coca_zero.png" alt="Coca Zero">
                <p>Coca cola zero lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="guarana">
                <img src="/subway/public/imagens/guarana.webp" alt="Guarana">
                <p>Guaraná lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="sprite">
                <img src="/subway/public/imagens/sprite.png" alt="Sprite">
                <p>Sprite lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="fanta_laranja">
                <img src="/subway/public/imagens/fanta laranja.png" alt="Fanta Laranja">
                <p>Fanta laranja lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="produto" data-nome="fanta_uva">
                <img src="/subway/public/imagens/fata_uva.webp" alt="Fanta Uva">
                <p>Fanta uva lata</p>
                <div class="controle-quantidade">
                    <button class="menos">−</button>
                    <span class="quantidade">0</span>
                    <button class="mais">+</button>
                </div>
                <p>R$ 5,50</p>
            </div>
            <div class="botoes-navegacao">
                <button id="btn-voltar">Voltar</button>
                <button id="btn-proximo">Próximo</button>
            </div>
        </div>
    </section>    
</template>