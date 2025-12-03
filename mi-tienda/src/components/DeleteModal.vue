<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Confirmar</h5>
          <button class="btn-close" @click="close"></button>
        </div>

        <div class="modal-body">
          <p>¿Seguro que deseas eliminar este registro?</p>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" @click="close">Cancelar</button>
          <button class="btn btn-danger" @click="confirm">Eliminar</button>
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
      modalObj: null
    };
  },
  methods: {
    open() {
      this.modalObj = new Modal(this.$refs.modal);
      this.modalObj.show();
    },
    close() {
      this.modalObj.hide();
    },
    confirm() {
      this.$emit("confirm");
      this.close();
    }
  }
};
</script>



