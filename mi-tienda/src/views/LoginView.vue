<template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="login-card p-4 shadow">

      <h3 class="text-center mb-4 text-white">Iniciar Sesión</h3>

      <input v-model="email" type="email" class="form-control mb-3" placeholder="Correo electrónico">
      <input v-model="password" type="password" class="form-control mb-3" placeholder="Contraseña">

      <button class="btn btn-dark w-100" @click="ingresar">Ingresar</button>

      <div v-if="error" class="alert alert-danger mt-3 text-center">
        Usuario o contraseña incorrectos
      </div>

    </div>
  </div>
</template>

<script>
import { login } from "../services/authService";

export default {
  data() {
    return { email: "", password: "", error: false };
  },
  methods: {
    async ingresar() {
      const user = await login(this.email, this.password);

      if (!user) {
        this.error = true;
        return;
      }

      this.$router.push("/productos");
    }
  }
};
</script>

<style scoped>
.login-container { background: #f5f5f5; }
.login-card {
  width: 400px;
  border-radius: 15px;
  background: linear-gradient(to bottom right, #ff6a6a, #fcd34d);
}
</style>
