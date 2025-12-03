<template>
  <Navbar />

  <div class="container mt-4">
    <h2 class="text-center mb-4 text-primary">Gestión de Usuarios</h2>

    <div class="card p-3 mb-4 shadow-sm">
      <div class="row g-3">
        <div class="col-md-4">
          <input v-model="newUser.nombre" class="form-control" placeholder="Nombre">
        </div>
        <div class="col-md-4">
          <input v-model="newUser.email" class="form-control" placeholder="Email">
        </div>
        <div class="col-md-3">
          <input v-model="newUser.password" class="form-control" placeholder="Contraseña">
        </div>
        <div class="col-md-1">
          <button class="btn btn-success w-100" @click="crear">
            <i class="bi bi-plus"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="u in users" :key="u.id">
        <div class="card shadow-sm p-3">
          <h5>{{ u.nombre }}</h5>
          <p class="text-muted">{{ u.email }}</p>

          <button class="btn btn-primary me-2" @click="editar(u)">
            <i class="bi bi-pencil"></i>
          </button>

          <button class="btn btn-danger" @click="eliminar(u)">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>

    <UserModal ref="modal" @save="guardarEdicion" />
    <DeleteModal ref="deleteModal" @confirm="confirmarEliminacion" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserModal from "../components/UserModal.vue";
import DeleteModal from "../components/DeleteModal.vue";
import { getUsers, createUser, updateUser, deleteUser } from "../services/userService";

export default {
  components: { Navbar, UserModal, DeleteModal },
  data() {
    return {
      users: [],
      selected: null,
      newUser: { nombre: "", email: "", password: "" }
    };
  },
  async created() {
    this.load();
  },
  methods: {
    async load() {
      this.users = (await getUsers()).data;
    },
    async crear() {
      await createUser(this.newUser);
      this.newUser = { nombre: "", email: "", password: "" };
      this.load();
    },
    editar(user) {
      this.selected = user;
      this.$refs.modal.open(user);
    },
    async guardarEdicion(data) {
      await updateUser(this.selected.id, data);
      this.load();
    },
    eliminar(user) {
      this.selected = user;
      this.$refs.deleteModal.open();
    },
    async confirmarEliminacion() {
      await deleteUser(this.selected.id);
      this.load();
    }
  }
};
</script>
