<template>
  <div class="col-md-4 mb-4">
    <div class="card h-100 shadow-sm">
      <img :src="product.image" class="card-img-top p-3" style="height: 200px; object-fit: contain;" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text text-success fw-bold">${{ product.price }}</p>
        <button class="btn btn-primary w-100">Detalles</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

