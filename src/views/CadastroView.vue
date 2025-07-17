<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Campos do formulário
const nome = ref('')
const telefone = ref('')

// Função chamada no envio do formulário
function enviarCadastro() {
  if (nome.value && telefone.value) {
    
    console.log('Cadastro enviado:', nome.value, telefone.value)

    // Redireciona para a página de lanches
    router.push({ name: 'lanches' })
  } else {
    alert('Preencha todos os campos obrigatórios.')
  }
}
</script>
<template>
  <section cadastro>
    <h2>Cadastro para Pedido</h2>
    <form @submit.prevent="enviarCadastro">
      <p>
        <label for="nome">Nome (Obrigatório)</label>
        <input placeholder="nome completo" required id="nome" type="text" v-model="nome" />
      </p>
      <p>
        <label for="tel">Número de Telefone (obrigatório)</label>
        <input placeholder="(xx) XXXX-XXXX" id="tel" required type="tel" v-model="telefone" />
      </p>
      <button type="submit">Enviar Cadastro</button>
    </form>
  </section>
</template>

<style scoped>
section[cadastro] {
  background-color: #f8f8f8;
  padding: 30px;
  max-width: 500px;
  margin: 40px auto;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
}

section[cadastro] h2 {
  text-align: center;
  color: #009639;
  margin-bottom: 20px;
  font-size: 24px;
}

section[cadastro] form {
  display: flex;
  flex-direction: column;
}

section[cadastro] p {
  margin-bottom: 20px;
}

section[cadastro] label {
  display: block;
  margin-bottom: 8px;
  color: #003a23;
  font-weight: bold;
  font-size: 14px;
}

section[cadastro] input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

section[cadastro] button {
  background-color: #009639;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}

section[cadastro] button:hover {
  background-color: #007a30;
}
</style>
