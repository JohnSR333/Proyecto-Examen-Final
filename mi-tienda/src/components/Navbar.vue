<template>
  <nav class="navbar navbar-dark bg-dark px-3">
    <span class="navbar-brand">Mi Tienda</span>

    <div>
      <router-link class="btn btn-warning me-2" to="/productos">Productos</router-link>
      <router-link class="btn btn-info me-2" to="/usuarios">Usuarios</router-link>
      <button class="btn btn-danger" @click="cerrarSesion">Cerrar Sesión</button>
    </div>
  </nav>
</template>

<script>
import { logout } from "../services/authService";

export default {
  name: "AppNavbar",
  methods: {
    cerrarSesion() {
      logout();
      this.$router.push("/login");
    }
  }
};
</script>
