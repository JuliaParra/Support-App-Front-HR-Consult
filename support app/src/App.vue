<template>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <h1>HR CONSULT</h1>
        <nav class="nav-bar">
          <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/solicitudes">Solicitudes</router-link></li>
            <li><router-link to="/nueva-solicitud">Nueva Solicitud</router-link></li>
            <li><router-link to="/editar-solicitud">Editar Solicitud</router-link></li>
           
          </ul>
        </nav>
      </div>
    </header>
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export const App = {
  name: 'App'
};
</script>

<style scoped>
.app-header {
  background-color: #1e1e1e;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  color: #f5f5f5;
}

.app-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-bar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-bar li {
  margin: 0 10px;
}

.nav-bar a {
  color: #e2a8f9;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;
  transition: background-color 0.3s;
}

.nav-bar a:hover {
  background-color: #e2a8f9;
}

.main-content {
  padding: 20px;
}
</style>
