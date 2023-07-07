<template>
    <Navbar></Navbar>
    <div class="container mt-5">
        <h2>Kitchen <strong>Base</strong></h2>
        <ul class="nav nav-underline">
            <li class="nav-item">
                <router-link class="nav-link" to="/kitchen-pesanan">Pesanan ({{ table ? table.length : station.tableLength }})</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/kitchen-dapur">Dapur ({{ kitchen ? kitchen.length : station.kitchenLength }})</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/kitchen-served">Disajikan ({{ served ? served.length : station.servedLength }})</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/kitchen-done">Selesai ({{ done ? done.length : station.doneLength }})</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
    props: ['updatedPesanan'],
    components: { Navbar },
    name: `KitchenNavMenu`,
    data() {
        return {
            station: {},
        }
    },
    methods: {
        setJumlah(data) {
            this.station.tableLength = data.filter(d => d.station === 'table').length;
            this.station.kitchenLength = data.filter(d => d.station === 'kitchen').length;
            this.station.servedLength = data.filter(d => d.station === 'served').length;
            this.station.doneLength = data.filter(d => d.station === 'done').length;
        },
        getPesanan() {
            axios
                .get("http://localhost:3000/pesanans")
                .then((response) => this.setJumlah(response.data))
                .catch((error) => console.log(error));
        }
    },
    mounted() {
        this.getPesanan();
    },
    computed: {
        table() {
            return this.updatedPesanan.filter(d => d.station === 'table');
        },
        kitchen() {
            return this.updatedPesanan.filter(d => d.station === 'kitchen');
        },
        served() {
            return this.updatedPesanan.filter(d => d.station === 'served');
        },
        done() {
            return this.updatedPesanan.filter(d => d.station === 'done');
        }
    }
}
</script>

<style>
    .nav-link {
        color: slategray;
    }

    .nav-link:hover {
        color: #18b164;
    }

    .router-link-exact-active{
        color: #4eb883;
        border-bottom: var(--bs-nav-underline-border-width) solid #4eb883 !important;
    }
</style>