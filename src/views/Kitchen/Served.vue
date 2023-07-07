<template>
    <KitchenNavMenu :updatedPesanan="pesanans"/>
    <div class="container mt-5">
        <div v-for="pesanan in pesanansByServed" :key="pesanan.id" class="mb-4">
            <CardMenu
            :pesanan="pesanan"
            @delete-menu="deleteMenu"
            @done-menu="doneMenu"></CardMenu>
        </div>
    </div>
</template>

<script>
import KitchenNavMenu from '@/components/KitchenNavMenu.vue';
import CardMenu from "@/components/CardMenu.vue";
import axios from "axios";
import { useToast } from 'vue-toast-notification';

const $toast = useToast();

export default {
    components: {
        KitchenNavMenu,
        CardMenu
    },
    name: `KitchenServed`,
    data() {
        return {
            pesanans: [],
            pesanansByServed: [],
            pesananById: {}
        }
    },
    methods: {
        setPesanan(data) {
            this.pesanans = data;
            this.pesanansByServed = data.filter(d => d.station === 'served');
        },
        setPesananById(data) {
            this.pesananById = data;
        },

        deleteMenu(id) {
            axios
                .delete("http://localhost:3000/pesanans/" + id)
                .then(() => {
                    $toast.success('Sukses hapus menu!', {
                        type: 'success',
                        position: 'top-right',
                        duration: 3000,
                        dismissible: true
                    });
                    this.getPesanan();
                })
                .catch((error) => console.log(error));
        },
        doneMenu(id) {
            axios
                .get("http://localhost:3000/pesanans/" + id)
                .then((response) => this.setPesananById(response.data))
                .then(() => this.updatedMenuStation(id))
                .catch((error) => console.log(error));
        },

        getPesanan() {
            axios
                .get("http://localhost:3000/pesanans")
                .then((response) => this.setPesanan(response.data))
                .catch((error) => console.log(error));
        },
        updatedMenuStation(id) {
            this.pesananById.station = "done";
            axios
                .put(`http://localhost:3000/pesanans/${id}`, this.pesananById)
                .then(() => {
                    $toast.success('Sukses update menu!', {
                        type: 'success',
                        position: 'top-right',
                        duration: 3000,
                        dismissible: true
                    });
                    this.pesananById = {};
                    this.getPesanan();
                })
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