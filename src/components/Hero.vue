<template>
  <!-- Desktop -->
  <div class="d-none d-md-block">
    <div class="row">
      <div class="col-md-6 align-self-center">
        <h2><strong>Delicious Food Menu, </strong><br />in Your Gadget</h2>
        <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
        <router-link to="/" class="btn btn-lg btn-success"><i class="bi bi-arrow-right"></i> Pesan</router-link>
      </div>
      <div class="col-md-6">
        <img :src="'assets/img/svg/hero.svg'" class="img-fluid hero-img" />
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="d-sm-block d-md-none">
    <div class="row gy-4">
      <div class="col-md-6">
        <img :src="'assets/img/svg/hero.svg'" class="img-fluid hero-img" />
      </div>
      <div class="col-md-6 align-self-center">
        <h2><strong>Delicious Food Menu, </strong><br />in Your Gadget</h2>
        <p>Ayo segera pilih dan pesan makanan favorit Anda</p>
        <router-link to="/" class="btn btn-lg btn-success"><i class="bi bi-arrow-right"></i> Pesan</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `Hero`,
};
</script>

<style></style>
