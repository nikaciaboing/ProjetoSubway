<script setup>
import { onMounted } from 'vue'

function atualizarTaxa() {
  const bairroSelect = document.getElementById("bairro");
  const bairroSelecionado = bairroSelect.options[bairroSelect.selectedIndex];
  const taxa = bairroSelecionado.getAttribute("data-valor");
  if (taxa) {
    document.getElementById("taxa").value = `R$ ${parseFloat(taxa).toFixed(2)}`;
  } else {
    document.getElementById("taxa").value = '';
  }
}
</script>

<template>
  <section class="pg8">
    <div class="form-container">
      <h1>Endereço para Entrega</h1>
      <form>
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required />

        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" placeholder="Rua, número, complemento" required />

        <label for="referencia">Ponto de referência:</label>
        <input type="text" id="referencia" name="referencia" placeholder="Digite um ponto de referência" required />

        <label for="bairro">Bairro:</label>
        <select id="bairro" name="bairro" @change="atualizarTaxa" required>
          <option value="" disabled selected>Selecione o bairro</option>
          <option value="Centro" data-valor="10.00">Centro</option>
          <option value="Porto grande" data-valor="8.00">Porto Grande</option>
          <option value="Ponto Alto" data-valor="12.00">Ponto Alto</option>
          <option value="Itinga" data-valor="1.00">Itinga</option>
          <option value="Colegio Agricola" data-valor="5.00">Colégio Agrícola</option>
        </select>

        <label for="taxa">Taxa de entrega:</label>
        <input type="text" id="taxa" readonly />

        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" placeholder="Digite o CEP" required pattern="\d{5}-?\d{3}" />

       <router-link to="/pagamento"><button type="submit">Enviar</button></router-link> 
      </form>
    </div>
  </section>
</template>

<style scoped>
.pg8 {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 16px;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
}

.pg8 h1 {
  color: #28a745;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.pg8 label {
  display: block;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 4px;
  color: #444;
}

.pg8 input,
.pg8 select {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.pg8 input:focus,
.pg8 select:focus {
  border-color: #28a745;
  outline: none;
}

.pg8 button[type="submit"] {
  background-color: #28a745;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  transition: background-color 0.3s ease;
}

.pg8 button[type="submit"]:hover {
  background-color: #218838;
}

.pg8 h2 {
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
  color: #555;
}</style>