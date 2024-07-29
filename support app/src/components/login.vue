

<template>
  <div class="login-container">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

function login() {
  if (username.value && password.value) {
    console.log(`Username: ${username.value}, Password: ${password.value}`);
    router.push({ name: 'SolicitudesView' });
  } else {
    alert('Credenciales inválidas. Por favor, inténtelo de nuevo.');
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  color: #f5f5f5;
  text-align: center;
}
.form-group {
  margin-bottom: 15px;
}
input {
  width: calc(100% - 22px);
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #333;
  color: #f5f5f5;
}
button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #e2a8f9;
  color: #121212;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background-color:#e2a8f9;
}
</style>

