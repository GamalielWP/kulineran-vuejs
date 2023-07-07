<template>
    <KitchenNavMenu :updatedPesanan="pesanans"/>
    <div class="container mt-5">
        <div v-for="pesanan in pesanansByServed" :key="pesanan.id" class="mb-4">
            <CardMenu :pesanan="pesanan"></CardMenu>
        </div>
    </div>
</template>

<script>
import KitchenNavMenu from '@/components/KitchenNavMenu.vue';
import CardMenu from "@/components/CardMenu.vue";
import axios from "axios";

export default {
    components: {
        KitchenNavMenu,
        CardMenu
    },
    name: `KitchenServed`,
    data() {
        return {
            pesanans: [],
            pesanansByServed: []
        }
    },
    methods: {
        setPesanan(data) {
            this.pesanans = data;
            this.pesanansByServed = data.filter(d => d.station === 'done');
        },

        getPesanan() {
            axios
                .get("http://localhost:3000/pesanans")
                .then((response) => this.setPesanan(response.data))
                .catch((error) => console.log(error));
        }
    },
    mounted() {
        this.getPesanan();
    },
    computed: {

    }
}
</script>

<style></style>