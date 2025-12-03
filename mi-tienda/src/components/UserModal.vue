<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Editar Usuario</h5>
          <button class="btn-close" @click="close"></button>
        </div>

        <div class="modal-body">
          <input v-model="form.nombre" class="form-control mb-2" placeholder="Nombre">
          <input v-model="form.email" class="form-control mb-2" placeholder="Email">
          <input v-model="form.password" class="form-control mb-2" placeholder="Contraseña">
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="close">Cancelar</button>
          <button class="btn btn-primary" @click="save">Guardar</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  data() {
    return {
      form: {},
      modalObj: null
    };
  },
  methods: {
    open(user) {
      this.form = { ...user };
      this.modalObj = new Modal(this.$refs.modal);
      this.modalObj.show();
    },
    close() {
      this.modalObj.hide();
    },
    save() {
      this.$emit("save", this.form);
      this.close();
    }
  }
};
</script>

