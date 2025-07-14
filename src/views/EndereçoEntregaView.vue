<template>
    <section class="pg8">
      <div class="form-container">
      <h1>Endereço para Entrega</h1>
      <form action="/submit" method="POST">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required>

        <label for="endereco">Endereço:</label>
        <input type="text" id="endereco" name="endereco" placeholder="Rua, número, complemento" required>

        <label for="referencia">Ponto de referência:</label>
        <input type="text" id="referencia" name="referencia" placeholder="Digite um ponto de referência" required>

        <label for="bairro">Bairro:</label>
        <select id="bairro" name="bairro" onchange="atualizarTaxa()" required>
          <option value="" disabled selected>Selecione o bairro</option>
          <option value="Centro" data-valor="10.00">Centro</option>
          <option value="Porto grande" data-valor="8.00">Porto Grande</option>
          <option value="Ponto Alto" data-valor="12.00">Ponto Alto</option>
          <option value="Itinga" data-valor="1.00">Itinga</option>
          <option value="Colegio Agricola" data-valor="5.00">Colégio Agrícola</option>
        </select>

        <label for="taxa">Taxa de entrega:</label>
        <input type="text" id="taxa" readonly>

        <label for="cep">CEP:</label>
        <input type="text" id="cep" name="cep" placeholder="Digite o CEP" required pattern="\d{5}-?\d{3}">

        <button type="submit">Enviar</button>
      </form>
      </div>
    </section>
</template>