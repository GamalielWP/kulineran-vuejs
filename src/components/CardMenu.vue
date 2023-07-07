<template>
    <div class="card shadow">
        <div class="card-body">
            <div class="accordion accordion-flush" id="accordion-menu">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#flush-table-' + pesanan.id" aria-expanded="false"
                            :aria-controls="'flush-table-' + pesanan.id">
                            Meja Nomor {{ pesanan.meja }}
                        </button>
                    </h2>
                    <div :id="'flush-table-' + pesanan.id" class="accordion-collapse collapse"
                        data-bs-parent="#accordion-menu">
                        <div class="accordion-body ">
                            <ul v-for="menu in pesanan.cart" :key="menu.id">
                                <li>{{ menu.product.nama }} <strong>({{ menu.jumlah }}x)</strong> - {{ menu.keterangan ?
                                    menu.keterangan : "(not set)" }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="this.$route.name != 'KitchenDone'" class="float-end btn-group-sm">
                <button @click="this.$emit('delete-menu', pesanan.id)" class="btn btn-danger me-2">
                    <i class="bi bi-trash3-fill text-white"></i> Hapus
                </button>
                <button v-if="this.$route.name == 'KitchenPesanan'" @click="this.$emit('cook-menu', pesanan.id)" class="btn btn-success">
                    <i class="bi bi-egg-fried"></i> Masak
                </button>
                <button v-if="this.$route.name == 'KitchenDapur'" @click="this.$emit('serve-menu', pesanan.id)" class="btn btn-success">
                    <i class="bi bi-egg-fried"></i> Sajikan
                </button>
                <button v-if="this.$route.name == 'KitchenServed'" @click="this.$emit('done-menu', pesanan.id)" class="btn btn-success">
                    <i class="bi bi-egg-fried"></i> Pembayaran Selesai
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pesanan'],
    name: `CardMenu`,
    methods: {

    }
}
</script>

<style>
    .accordion-button:focus {
        box-shadow: none;
    }

    .accordion-button:not(.collapsed) {
        font-weight: bolder;
        background-color: rgba(24, 177, 100, .5);
        border-radius: 5px !important;
    }
</style>