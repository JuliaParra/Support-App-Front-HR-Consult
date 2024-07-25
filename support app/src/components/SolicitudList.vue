<template>
  <div class="requests-list">
    <h2>Solicitudes</h2>
    <div v-for="request in requests" :key="request.id" class="request-card">
      <h3>{{ request.name }}</h3>
      <p>{{ request.date }}</p>
      <p>{{ request.topic }}</p>
      <router-link :to="{ name: 'editarSolicitud', params: { id: request.id } }">Editar</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const requests = ref([]);

onMounted(() => {

  fetch('url/to/api/solicitudes')
    .then(response => response.json())
    .then(data => {
      requests.value = data;
    });

 
  requests.value = [
    { id: 1, name: 'Juan Pérez', date: '2024-07-25', topic: 'Consulta General' },
    { id: 2, name: 'Ana Gómez', date: '2024-07-24', topic: 'Soporte Técnico' },
    { id: 3, name: 'Luis Martínez', date: '2024-07-23', topic: 'Consulta Legal' }
  ];
});
</script>

<style scoped>
.requests-list {
  padding: 20px;
  background-color: #1e1e1e;
  color: #f5f5f5;
}

.request-card {
  background-color: #2e2e2e;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.request-card h3 {
  margin: 0;
}

.request-card p {
  margin: 5px 0;
}

.router-link {
  color: #ffa726;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}
</style>
