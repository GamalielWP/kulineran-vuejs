<template>
  <div class="card shadow rounded-4 card-product">
    <img :src="'assets/img/menu/' + product.gambar" class="card-img-top rounded-top-4">
  <div class="card-body">
    <h5 class="card-title">{{ product.nama }}</h5>
    <p class="card-text">Harga : Rp. {{ product.harga }}</p>
    <router-link :to="'/foods/' + product.id" class="btn btn-success">
      <i class="bi bi-cart-fill"></i>
      Pesan
    </router-link>
  </div>
</div>
</template>

<script>
export default {
    name: `CardProduct`,
    props: ['product']
}
</script>

<style>

</style>