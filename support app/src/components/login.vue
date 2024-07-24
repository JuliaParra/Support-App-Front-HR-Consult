<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <label for="username">Username</label>
        <input type="text" v-model="username" required />
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>


<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 2em;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}
.form-group {
  margin-bottom: 1em;
}
input {
  width: 100%;
  padding: 0.5em;
  margin-top: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn {
  padding: 0.5em 2em;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>