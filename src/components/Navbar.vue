<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">Kulineran</a>
            <div v-if="isNotKitchenPage">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/foods">Foods</router-link>
                        </li>
                    </ul>

                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/keranjang">
                                Keranjang
                                <i class="bi bi-handbag me-1"></i>
                                <span class="badge bg-success">{{ updatedCart ? updatedCart.length : jumlah_pesanan.length
                                }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-else>
                <h5 class="fw-bold text-success">Kitchen</h5>
            </div>
        </div>
    </nav>
</template>

<script>
import axios from "axios";

export default {
    name: `Navbar`,
    props: ['updatedCart'],
    data() {
        return {
            jumlah_pesanan: []
        }
    },
    methods: {
        setJumlah(data) {
            this.jumlah_pesanan = data;
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setJumlah(response.data))
            .catch((error) => console.log(error));
    },
    computed: {
        isNotKitchenPage() {
            return !this.$route.name.includes('Kitchen');
        }
    }
}
</script>

<style></style>