


<template>
  <div class="solicitud-handler">
    <h2>Buscar y Editar Solicitud</h2>
    <div class="search-bar">
      <input type="text" v-model="searchTerm" placeholder="Buscar por ID o Nombre">
      <button @click="search">Buscar</button>
    </div>
    
    <ul v-if="results.length">
      <li v-for="solicitud in results" :key="solicitud.id">
        <p><strong>ID:</strong> {{ solicitud.id }}</p>
        <p><strong>Nombre:</strong> {{ solicitud.nombre }}</p>
        <button @click="selectSolicitud(solicitud)">Editar</button>
      </li>
    </ul>
    <p v-else>No se encontraron resultados</p>

    <div v-if="selectedSolicitud">
      <h3>Editar Solicitud</h3>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="nombre">Nombre del Solicitante</label>
          <input type="text" id="nombre" v-model="selectedSolicitud.nombre" required>
        </div>
        <div class="form-group">
          <label for="fecha">Fecha de la Solicitud</label>
          <input type="date" id="fecha" v-model="selectedSolicitud.fecha" required>
        </div>
        <div class="form-group">
          <label for="tema">Tema de la Consulta</label>
          <input type="text" id="tema" v-model="selectedSolicitud.tema" required>
        </div>
        <div class="form-group">
          <label for="descripcion">Descripción de la Consulta</label>
          <textarea id="descripcion" v-model="selectedSolicitud.descripcion" required></textarea>
        </div>
        <button type="submit">Guardar Cambios</button>
        <button type="button" @click="deselectSolicitud">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchTerm = ref('');
const results = ref([]);
const selectedSolicitud = ref(null);

const search = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/solicitud?nombre=${searchTerm.value}`);
    if (!response.ok) throw new Error('Error en la respuesta de la red');
    results.value = await response.json();
  } catch (error) {
    console.error('Error al buscar solicitudes:', error);
    results.value = [];
  }
};

const selectSolicitud = (solicitud) => {
  selectedSolicitud.value = { ...solicitud };
};

const submitForm = async () => {
  try {
    const response = await fetch(`http://localhost:8080/api/solicitud/${selectedSolicitud.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedSolicitud.value)
    });

    if (!response.ok) throw new Error('Error en la respuesta de la red');
    alert('Solicitud actualizada con éxito');
    selectedSolicitud.value = null; // Limpiar selección después de guardar
    search(); // Volver a buscar para actualizar la lista
  } catch (error) {
    console.error('Error al actualizar la solicitud:', error);
  }
};

const deselectSolicitud = () => {
  selectedSolicitud.value = null;
};
</script>

<style scoped>
.solicitud-handler {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: #f5f5f5;
}

.search-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-bar input {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #333;
  color: #f5f5f5;
}

.search-bar button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ffa726;
  color: #121212;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

li p {
  margin: 5px 0;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: #f5f5f5;
  margin-right: 5px;
}

button:hover {
  opacity: 0.9;
}
</style>
