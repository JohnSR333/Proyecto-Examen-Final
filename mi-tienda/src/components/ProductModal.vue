<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Editar Producto</h5>
          <button class="btn-close" @click="close"></button>
        </div>

        <div class="modal-body">
          <input v-model="form.name" class="form-control mb-2" placeholder="Nombre">
          <input v-model="form.price" class="form-control mb-2" placeholder="Precio">
          <input v-model="form.image" class="form-control mb-2" placeholder="URL Imagen">
          <input v-model="form.category" class="form-control mb-2" placeholder="Categoría">
          <textarea v-model="form.description" class="form-control" placeholder="Descripción"></textarea>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="close">Cancelar</button>
          <button class="btn btn-primary" @click="save">Guardar</button>
        </div>

      </div>
    </div>
  </div>
</template>

// ProductModal.vue
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
    open(prod) {
      this.form = { ...prod };
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



