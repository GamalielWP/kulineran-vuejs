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
                    <form v-on:submit.prevent>
                        <!-- .prevent digunakan untuk mencegah reload page (perilaku default) -->
                        <div class="my-3">
                            <label for="jmlPesanan" class="form-label">Jumlah Pesan</label>
                            <input v-model="pesanan.jumlah" id="jmlPesanan" type="number" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="keterangan" class="form-label">Keterangan</label>
                            <textarea v-model="pesanan.keterangan" id="keterangan" class="form-control"
                                placeholder="Nasinya setengah saja.."></textarea>
                        </div>
                        <button @click="pesan" type="submit" class="btn btn-success">
                            <i class="bi bi-cart-fill"></i> Keranjang
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
import { useToast } from 'vue-toast-notification';

const $toast = useToast();

export default {
    name: `FoodDetail`,
    components: {
        Navbar
    },
    data() {
        return {
            product: {},
            pesanan: {}
        }
    },
    methods: {
        setProduct(data) {
            this.product = data;
        },
        pesan() {
            if (this.pesanan.jumlah) {
                this.pesanan.product = this.product;
                axios
                    .post("http://localhost:3000/keranjangs", this.pesanan)
                    .then(() => {
                        this.$router.push({ path: '/keranjang' });
                        $toast.success('Sukses masuk keranjang!', {
                            type: 'success',
                            position: 'top-right',
                            duration: 3000,
                            dismissible: true
                        });
                    })
                    .catch((error) => console.log(error));
            } else {
                $toast.error('Jumlah pesanan harus diisi!', {
                    type: 'error',
                    position: 'top-right',
                    duration: 3000,
                    dismissible: true
                });
            }
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