<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card p-4 shadow" style="width: 400px; border-radius: 15px; background: linear-gradient(135deg, #FF6B6B, #FFD93D);">
      <h3 class="text-center text-white mb-4">Iniciar Sesión</h3>
      <input v-model="usuario" type="text" class="form-control mb-3" placeholder="Usuario">
      <input v-model="clave" type="password" class="form-control mb-3" placeholder="Contraseña">
      <button @click="login" class="btn btn-dark w-100">Ingresar</button>
      <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import usuarios from '../assets/usuarios.json'

export default {
  data() {
    return {
      usuario: '',
      clave: '',
      error: ''
    }
  },
  methods: {
    login() {
      const user = usuarios.find(u => u.usuario === this.usuario && u.clave === this.clave)
      if(user) {
        this.$router.push('/dashboard/productos')
      } else {
        this.error = 'Usuario o contraseña incorrectos'
      }
    }
  }
}
</script>