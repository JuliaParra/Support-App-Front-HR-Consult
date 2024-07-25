<template>
  <div class="login-view">
    <Login  />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Login from '../components/login.vue';

const router = useRouter();

const handleLogin = (username, password) => {
 
  if (username === 'user' && password === 'password') {
    router.push({ name: 'Home' });
  } else {
    console.log('Credenciales incorrectas');
    
  }
};
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
</style>

