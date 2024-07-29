import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/', 
    name: 'login', 
    component: () => import('../views/LoginView.vue') 
  },
  { 
    path: '/solicitudes', 
    name: 'solicitudes', 
    component: () => import('../views/SolicitudesView.vue') 
  },
  { 
    path: '/nueva-solicitud', 
    name: 'nuevaSolicitud', 
    component: () => import('../views/NuevaSolicitudView.vue') 
  },
  { 
    path: '/editar-solicitud', 
    name: 'editarSolicitud', 
    component: () => import('../views/EditarSolicitudView.vue'),
    props: true 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
