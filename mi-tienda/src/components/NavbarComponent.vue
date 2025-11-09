<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning shadow">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Mi Tienda - Electrónica</span>
      <button class="btn btn-danger ms-auto" @click="logout">Cerrar Sesión</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      // Redirige al login
      this.$router.push('/login')
      // Opcional: limpiar variables locales o estado
    }
  }
}
</script>

<style scoped>
.btn-danger {
  font-weight: bold;
}
</style>