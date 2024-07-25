<template>
  <div class="editar-solicitud">
    <h2>Editar Solicitud</h2>
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
      <button type="submit">Guardar Cambios</button>
      <button type="button" @click="cancel">Cancelar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const name = ref('');
const date = ref('');
const topic = ref('');
const description = ref('');

onMounted(() => {
  // Cargar datos de la solicitud existente
  const requestId = route.params.id;
  // Aquí se podría hacer una llamada a la API para obtener los datos de la solicitud
  
  fetchSolicitud(requestId).then(data => {
    name.value = data.name;
    date.value = data.date;
    topic.value = data.topic;
    description.value = data.description;
  });
});

const submitForm = () => {
  // Lógica para actualizar los datos en el backend
  console.log(`Nombre: ${name.value}, Fecha: ${date.value}, Tema: ${topic.value}, Descripción: ${description.value}`);
  // Aquí podrías realizar una llamada a la API para actualizar la solicitud
  // Una vez actualizado, redirigir a la lista de solicitudes
  router.push({ name: 'solicitudes' });
};

const cancel = () => {
  router.push({ name: 'solicitudes' });
};
</script>

<style scoped>
.editar-solicitud {
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
