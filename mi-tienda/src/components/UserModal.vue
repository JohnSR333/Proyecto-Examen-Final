<template>
  <div class="bg-dark text-white p-3" style="width: 220px; min-height: 100vh;">
    <h4 class="mb-4">Mi Tienda</h4>
    <ul class="nav flex-column">
      <li class="nav-item mb-2">
        <router-link to="/dashboard/productos" class="nav-link text-white">Productos</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav-link:hover {
  background-color: #ff6b6b;
  border-radius: 5px;
}
</style>

