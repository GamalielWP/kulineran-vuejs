<template>
  <Navbar></Navbar>
  <div class="container">
      <div class="d-flex justify-content-center">
        <div class="text-center">
            <img src="../../public/assets/img/menu/menunggu.png" width="300">
            <h2><strong>Sukses!!</strong></h2>
            <h4>Pesanan Anda segera diproses <br>Selamat menunggu</h4>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    nama: `PesananSukses`,
    components: {
        Navbar
    }
}
</script>

<style>

</style>