<template>
  <Navbar :updatedCart="carts"></Navbar>
  <div class="keranjang">
    <div class="container my-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-dark">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/foods" class="text-dark">Foods</router-link>
          </li>
          <li class="breadcrumb-item active">Keranjang</li>
        </ol>
      </nav>

      <h2 class="my-4">Keranjang <strong>Saya</strong></h2>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Foto</th>
              <th scope="col">Makanan</th>
              <th scope="col">Keterangan</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Total Harga</th>
              <th scope="col">Hapus</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="(cart, index) in carts" :key="cart.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>
                <img :src="'../assets/img/menu/' + cart.product.gambar" class="img-fluid rounded-4 shadow" width="250">
              </td>
              <td><strong>{{ cart.product.nama }}</strong></td>
              <td>
                {{ cart.keterangan ? cart.keterangan : '-' }}
              </td>
              <td>{{ cart.jumlah }}</td>
              <td>Rp. {{ cart.product.harga }}</td>
              <td><strong>Rp. {{ cart.product.harga * cart.jumlah }}</strong></td>
              <td align="center">
                <i @click="hapusCart(cart.id)" class="bi bi-trash3-fill text-danger cursor-pointer"></i>
              </td>
            </tr>
            <tr>
              <td colspan="6" align="right">
                <strong>Total Harga :</strong>
              </td>
              <td align="right">
                <strong>{{ `Rp. ${totalHarga}` }}</strong>
              </td>
            </tr>
          </tbody>
        </table>
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
  name: `Keranjang`,
  components: {
    Navbar
  },
  data() {
    return {
      carts: []
    }
  },
  methods: {
    setCarts(data) {
      this.carts = data;
    },
    hapusCart(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          $toast.success('Sukses hapus menu!', {
            type: 'success',
            position: 'top-right',
            duration: 3000,
            dismissible: true
          });
          this.getCarts();
        })
        .catch((error) => console.log(error));
    },
    getCarts() {
      axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => {
          this.setCarts(response.data);
        })
        .catch((error) => console.log(error));
    }
  },
  mounted() {
    this.getCarts();
  },
  computed: {
    totalHarga() {
      return this.carts.reduce((prevValue, cart) => {
        return prevValue + (cart.product.harga * cart.jumlah);
      }, 0);
    }
  }
}
</script>

<style></style>