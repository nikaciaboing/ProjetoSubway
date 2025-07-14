<template>
  <section id="inicio">
    <div class="conteudo">
      <div class="banner">
        <img src="/images/Subway_logo_editado.svg" alt="Logo Subway" />
        <h2 class="mensagem">BEM-VINDO!</h2>
        <router-link to="/cadastro">
          <button class="botao">CONTINUAR</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>

.conteudo {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.banner {
  text-align: center;
}

.mensagem {
  font-size: 32px;
  margin: 30px 0;
}

.botao {
  background-color: #e6bc00;
  color: #006633;
  padding: 15px 40px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.botao:hover {
  background-color: #ffd633;
}
</style>
