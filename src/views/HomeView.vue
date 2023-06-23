<template>
  <div class="home">
    <Navbar/>
    <div class="container">
      <Hero/>
      <div class="d-flex justify-content-between mt-5">
        <h2>Best <strong>Foods</strong></h2>
        <router-link to="/foods" class="btn btn-success lh-lg">
          <i class="bi bi-eye-fill"></i> Lihat Semua
        </router-link>
      </div>
      <div class="row gy-3 my-3">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product"></CardProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Hero,
    CardProduct
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    setProduct(data) {
      this.products = data;
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  }
}
</script>
