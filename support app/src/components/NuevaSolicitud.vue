<template>
  <div class="nueva-solicitud">
    <h2>Nueva Solicitud</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nombre del Solicitante</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="date">Fecha de la Solicitud</label>
        <input type="date" id="date" v-model="date" required>
      </div>
      <div class="form-group">
        <label for="topic">Tema de la Consulta</label>
        <input type="text" id="topic" v-model="topic" required>
      </div>
      <div class="form-group">
        <label for="description">Descripción de la Consulta</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <button type="submit">Enviar</button>
      <button type="button" @click="resetForm">Resetear</button>
      <button type="button" @click="cancel">Cancelar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const date = ref('');
const topic = ref('');
const description = ref('');

const submitForm = () => {
  // Lógica para enviar los datos al backend
  console.log(`Nombre: ${name.value}, Fecha: ${date.value}, Tema: ${topic.value}, Descripción: ${description.value}`);
  //  enviar los datos al backend,  llamada a una API.
};

const resetForm = () => {
  name.value = '';
  date.value = '';
  topic.value = '';
  description.value = '';
};

const cancel = () => {
  router.push({ name: 'solicitudes' });
};
</script>

<style scoped>
.nueva-solicitud {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: #f5f5f5;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, textarea {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #333;
  color: #f5f5f5;
}
button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
}
button[type="submit"] {
  background-color: #ffa726;
  color: #121212;
}
button[type="button"] {
  background-color: #555;
  color: #f5f5f5;
}
button:hover {
  opacity: 0.9;
}
</style>
