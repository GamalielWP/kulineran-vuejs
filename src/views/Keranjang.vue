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

      <div class="row justify-content-end">
        <div class="col-md-4">
          <form v-on:submit.prevent>
            <!-- .prevent digunakan untuk mencegah reload page (perilaku default) -->
            <div class="my-3">
              <label for="namaPembeli" class="form-label">Nama Pembeli</label>
              <input v-model="pesanan.nama" id="namaPembeli" type="text" class="form-control">
            </div>
            <div class="my-3">
              <label for="nomorMeja" class="form-label">Nomor Meja</label>
              <input v-model="pesanan.meja" id="nomorMeja" type="number" class="form-control">
            </div>
            <button @click="checkout" type="submit" class="btn btn-success float-end">
              <i class="bi bi-cart-fill"></i> Checkout
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
  name: `Keranjang`,
  components: {
    Navbar
  },
  data() {
    return {
      carts: [],
      pesanan: {}
    }
  },
  methods: {
    setCarts(data) {
      this.carts = data;
    },
    getCarts() {
      axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => {
          this.setCarts(response.data);
        })
        .catch((error) => console.log(error));
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
    checkout() {
      if (this.pesanan.nama && this.pesanan.meja) {
        this.pesanan.cart = this.carts;
        axios
          .post("http://localhost:3000/pesanans", this.pesanan)
          .then(() => {
            this.$router.push({ path: '/pesanan-sukses' });
            $toast.success('Sukses dipesan!', {
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            });
            this.carts.map((cart) => {
              axios
                .delete("http://localhost:3000/keranjangs/" + cart.id)
                .catch((error) => console.log(error));
            });
          })
          .catch((error) => console.log(error));
      } else {
        $toast.error('Nama & nomor meja harus diisi!', {
          type: 'error',
          position: 'top-right',
          duration: 3000,
          dismissible: true
        });
      }
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