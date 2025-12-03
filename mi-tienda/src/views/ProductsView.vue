<template>
  <Navbar />

  <div class="container mt-4">
    <h2 class="text-center mb-4 text-primary">Gestión de Productos Electrónicos</h2>

    <div class="card p-3 mb-4 shadow-sm">
      <div class="row g-3">
        <div class="col-md-3">
          <input v-model="newProduct.name" class="form-control" placeholder="Nombre del producto">
        </div>
        <div class="col-md-2">
          <input v-model="newProduct.price" class="form-control" placeholder="Precio">
        </div>
        <div class="col-md-3">
          <input v-model="newProduct.image" class="form-control" placeholder="URL imagen">
        </div>
        <div class="col-md-2">
          <input v-model="newProduct.category" class="form-control" placeholder="Categoría">
        </div>
        <div class="col-md-2">
          <button class="btn btn-success w-100" @click="crear">Agregar</button>
        </div>
      </div>
      <textarea v-model="newProduct.description" class="form-control mt-3" placeholder="Descripción"></textarea>
    </div>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="p in products" :key="p.id">
        <div class="card shadow-sm">
          <img :src="p.image" class="card-img-top" height="200" style="object-fit: contain">
          <div class="card-body">
            <h5 class="card-title">{{ p.name }}</h5>
            <p class="text-success fw-bold">${{ p.price }}</p>

            <button class="btn btn-primary me-2" @click="editar(p)"><i class="bi bi-pencil"></i></button>
            <button class="btn btn-danger" @click="eliminar(p)"><i class="bi bi-trash"></i></button>
          </div>
        </div>
      </div>
    </div>

    <ProductModal ref="modal" @save="guardarEdicion" />
    <DeleteModal ref="deleteModal" @confirm="confirmarEliminacion" />

  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ProductModal from "../components/ProductModal.vue";
import DeleteModal from "../components/DeleteModal.vue";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../services/productService";

export default {
  components: { Navbar, ProductModal, DeleteModal },
  data() {
    return {
      products: [],
      selected: null,
      newProduct: { name:"",price:"",image:"",category:"",description:"" }
    };
  },
  async created() { this.load(); },
  methods: {
    async load() {
      this.products = (await getProducts()).data;
    },
    async crear() {
      await createProduct(this.newProduct);
      this.newProduct = { name:"", price:"", image:"", category:"", description:"" };
      this.load();
    },
    editar(prod) {
      this.selected = prod;
      this.$refs.modal.open(prod);
    },
    async guardarEdicion(data) {
      await updateProduct(this.selected.id, data);
      this.load();
    },
    eliminar(prod) {
      this.selected = prod;
      this.$refs.deleteModal.open();
    },
    async confirmarEliminacion() {
      await deleteProduct(this.selected.id);
      this.load();
    }
  }
};
</script>



