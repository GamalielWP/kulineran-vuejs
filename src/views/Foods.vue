<template>
    <Navbar />
    <div class="container mt-4">
        <h2>Daftar <strong>Makanan</strong></h2>
        <div class="input-group mt-3">
            <input v-model="search" @keyup="searchFood" type="text" class="form-control" placeholder="Cari Makanan..">
            <span class="input-group-text" id="search">
                <i class="bi bi-search"></i>
            </span>
        </div>
        <div class="row g-4 my-3">
            <div class="col-md-4" v-for="product in products" :key="product.id">
                <CardProduct :product="product"></CardProduct>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
    name: `Foods`,
    components: {
        Navbar,
        CardProduct
    },
    data() {
        return {
            products: [],
            search: ''
        }
    },
    methods: {
        setProduct(data) {
            this.products = data;
        },
        searchFood() {
            axios
                .get("http://localhost:3000/products?q=" + this.search)
                .then((response) => this.setProduct(response.data))
                .catch((error) => console.log(error));
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/products")
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log(error));
    }
};
</script>

<style></style>
