<!-- <template>
  <div class="requests-list">
    <h2>Solicitudes</h2>
    <div v-for="request in requests" :key="request.id" class="request-card">
      <h3>{{ request.nombre }}</h3>
      <p>{{ request.fecha }}</p>
      <p>{{ request.tema }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const requests = ref([]);

onMounted(() => {
  fetch('http://localhost:8080/api/solicitud')
    .then(response => response.json())
    .then(data => {
      requests.value = data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    }); 
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
  color: #e2a8f9;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}
</style>

 -->


 <template>
  <div class="requests-list">
    <h2>Solicitudes</h2>
    <div v-if="requests.length">
      <div v-for="request in requests" :key="request.id" class="request-card">
        <h3>{{ request.nombre }}</h3>
        <p>{{ formatDate(request.fecha) }}</p>
        <p>{{ request.tema }}</p>
      </div>
    </div>
    <div v-else>
      <p>No hay solicitudes disponibles.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const requests = ref([]);

const fetchRequests = () => {
  fetch('http://localhost:8080/api/solicitud')
    .then(response => response.json())
    .then(data => {
      console.log('Datos recibidos:', data);
      requests.value = data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

onMounted(fetchRequests);

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
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
  color: #e2a8f9;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}
</style>
