<template>
  <div class="nueva-solicitud">
    <h2>Nueva Solicitud</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nombre">Nombre del Solicitante</label>
        <input type="text" id="nombre" v-model="nombre" required>
      </div>
      <div class="form-group">
        <label for="fecha">Fecha de la Solicitud</label>
        <input type="date" id="fecha" v-model="fecha">
      </div>
      <div class="form-group">
        <label for="tema">Tema de la Consulta</label>
        <input type="text" id="tema" v-model="tema" required>
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción de la Consulta</label>
        <textarea id="descripcion" v-model="descripcion" required></textarea>
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
import axios from 'axios';
import { API_BASE_URL } from '../config/config';

const router = useRouter();

const nombre = ref('');
const fecha = ref('');
const tema = ref('');
const descripcion = ref('');

const submitForm = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/solicitud`, {
      nombre: nombre.value,
      fecha: fecha.value,
      tema: tema.value,
      descripcion: descripcion.value,
    });

    if (response.status === 200) {
      alert('Solicitud enviada con éxito');
      router.push({ name: 'solicitudes' }); 
    }
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
    alert('Hubo un problema al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.');
  }
};

const resetForm = () => {
  nombre.value = '';
  fecha.value = '';
  tema.value = '';
  descripcion.value = '';
};

const cancel = () => {
  router.push({ name: 'login' }); 
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
  background-color: #e2a8f9;
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


