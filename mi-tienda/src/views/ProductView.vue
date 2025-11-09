<template>
  <div>
    <h2 class="mb-4 text-primary">Productos Electrónicos</h2>
    <div class="row">
      <ProductCardComponent
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCardComponent from '../components/ProductCardComponent.vue'
import { getProducts } from '../services/productService'

export default {
  components: { ProductCardComponent },
  data() {
    return {
      products: []
    }
  },
  async created() {
    try {
      const res = await getProducts()
      this.products = res.data.filter(p => p.category.includes('electronics'))
    } catch(err) {
      console.error(err)
    }
  }
}
</script>