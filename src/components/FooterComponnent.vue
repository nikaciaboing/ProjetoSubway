<script setup>
</script>

<template>
     <footer class="rodape">
        <div class="redes">
          <a href="https://www.facebook.com/subwaybrasil/?locale=pt_BR"><span class="fab fa-facebook-f"></span></a>
          <a href="https://www.instagram.com/subwaybrasil/"><span class="fab fa-instagram"></span></a>
          <a href="https://x.com/subwaybrasil"><span class="fab fa-x-twitter"></span></a>
        </div>
        <div class="contato">
          <span>FALE CONOSCO</span>
          <div class="caixa">contato@subway.com<br>0800-000-000</div>
        </div>
      </footer>
</template>
<style>
/* Rodapé */

.rodape {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #006633;
  font-size: 18px;
}

.redes span {
  margin-right: 15px;
  cursor: pointer;
  color: white;
}

.contato {
  position: relative;
  cursor: pointer;
}

.caixa {
  display: none;
  position: absolute;
  right: 0;
  background-color: white;
  color: #009639;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  top: -70px;
  width: 200px;
  text-align: left;
}

.contato:hover .caixa {
  display: block;
}
</style>
