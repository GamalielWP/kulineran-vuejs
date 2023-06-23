<template>
    <Navbar></Navbar>
    <div class="food-detail">
        <div class="container my-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/" class="text-dark">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/foods" class="text-dark">Foods</router-link>
                    </li>
                    <li class="breadcrumb-item active">Food Order</li>
                </ol>
            </nav>
            <h1 class="mt-3">Food <strong>Detail</strong></h1>
            <div class="row mt-2">
                <div class="col-md-6">
                    <img :src="'../assets/img/menu/' + product.gambar" class="img-fluid rounded-4 shadow">
                </div>
                <div class="col-md-6">
                    <h2><strong>{{ product.nama }}</strong></h2>
                    <hr>
                    <h4>Harga : <strong>Rp. {{ product.harga }}</strong></h4>
                    <form>
                        <div class="my-3">
                            <label for="jmlPesanan" class="form-label">Jumlah Pesan</label>
                            <input id="jmlPesanan" type="number" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="keterangan" class="form-label">Keterangan</label>
                            <textarea id="keterangan" class="form-control" placeholder="Nasinya setengah saja.."></textarea>
                        </div>
                        <button type="submit" class="btn btn-success">
                            <i class="bi bi-cart-fill"></i> Pesan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
    name: `FoodDetail`,
    components: {
        Navbar
    },
    data() {
        return {
            product: {}
        }
    },
    methods: {
        setProduct(data) {
            this.product = data;
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/products/" + this.$route.params.id)
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log(error));
    }
}
</script>

<style></style>