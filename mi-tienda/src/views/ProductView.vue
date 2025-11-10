<template>
  <div class="container mt-4">
    <h2 class="text-primary mb-4 text-center">Gestión de Productos Electrónicos</h2>

    <!-- Formulario para agregar producto -->
    <div class="card p-4 mb-5 shadow-sm">
      <h5 class="mb-3">Agregar nuevo producto</h5>
      <div class="row g-3">
        <div class="col-md-4">
          <input
            v-model="newProduct.title"
            type="text"
            placeholder="Nombre del producto"
            class="form-control"
          />
        </div>
        <div class="col-md-3">
          <input
            v-model.number="newProduct.price"
            type="number"
            placeholder="Precio"
            class="form-control"
          />
        </div>
        <div class="col-md-5">
          <input
            v-model="newProduct.image"
            type="text"
            placeholder="URL de la imagen"
            class="form-control"
          />
        </div>
        <div class="col-12 text-end">
          <button @click="addNewProduct" class="btn btn-success mt-2">
            Agregar producto
          </button>
        </div>
      </div>
    </div>

    <!-- Listado de productos -->
    <div class="row">
      <div
        v-for="product in products"
        :key="product.id"
        class="col-md-4 mb-4 d-flex align-items-stretch"
      >
        <div class="card shadow-sm w-100">
          <img
            :src="product.image"
            class="card-img-top"
            alt="Imagen del producto"
            style="height: 250px; object-fit: contain"
          />
          <div class="card-body text-center">
            <h6 class="card-title">{{ product.title }}</h6>
            <p class="text-success fw-bold">
              ${{ product.price.toLocaleString('es-CO') }}
            </p>
            <div class="d-flex justify-content-center gap-2">
              <button @click="editProduct(product)" class="btn btn-primary btn-sm">
                Editar
              </button>
              <button @click="deleteProduct(product)" class="btn btn-danger btn-sm">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts, addProduct } from '../services/productService'

export default {
  name: 'ProductView',
  data() {
    return {
      products: [],
      newProduct: {
        title: '',
        price: '',
        image: ''
      }
    }
  },
  async created() {
    try {
      const res = await getProducts()
      // Filtrar directamente en la carga inicial (sin filtros visibles en el código)
      this.products = res.data.filter(
        p =>
          !p.title.toLowerCase().includes('fjallraven') && // Eliminar el bolso
          !p.category.toLowerCase().includes('clothing') &&
          !p.category.toLowerCase().includes('jewelery')
      )
    } catch (error) {
      console.error('Error al cargar productos:', error)
    }
  },
  methods: {
    async addNewProduct() {
      if (!this.newProduct.title || !this.newProduct.price || !this.newProduct.image) {
        alert('Por favor completa todos los campos.')
        return
      }

      try {
        const res = await addProduct(this.newProduct)
        const nuevo = { ...res.data, id: Date.now() }
        this.products.push(nuevo)
        alert(`Producto agregado (simulación): ${nuevo.title}`)
        this.newProduct = { title: '', price: '', image: '' }
      } catch (error) {
        console.error('Error al agregar producto:', error)
      }
    },
    editProduct(product) {
      alert(`Simulación de edición del producto: ${product.title}`)
    },
    deleteProduct(product) {
      if (confirm(`¿Seguro que deseas eliminar "${product.title}"?`)) {
        this.products = this.products.filter(p => p.id !== product.id)
        alert(`Producto eliminado (simulación): ${product.title}`)
      }
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 10px;
}
.card img {
  transition: transform 0.2s ease;
}
.card img:hover {
  transform: scale(1.05);
}
</style>



