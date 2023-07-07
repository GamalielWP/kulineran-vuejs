import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Foods from '../views/Foods.vue';
import FoodDetail from "../views/FoodDetail.vue";
import Keranjang from "../views/Keranjang.vue";
import PesananSukses from "../views/PesananSukses.vue";
import KitchenPesanan from "../views/Kitchen/Pesanan.vue";
import KitchenDapur from "../views/Kitchen/Dapur.vue";
import KitchenServed from "../views/Kitchen/Served.vue";
import KitchenDone from "../views/Kitchen/Done.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/foods/:id',
    name: 'FoodDetail',
    component: FoodDetail
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang
  },
  {
    path: '/pesanan-sukses',
    name: 'PesananSukses',
    component: PesananSukses
  },
  {
    path: '/kitchen-pesanan',
    name: 'KitchenPesanan',
    component: KitchenPesanan
  },
  {
    path: '/kitchen-dapur',
    name: 'KitchenDapur',
    component: KitchenDapur
  },
  {
    path: '/kitchen-served',
    name: 'KitchenServed',
    component: KitchenServed
  },
  {
    path: '/kitchen-done',
    name: 'KitchenDone',
    component: KitchenDone
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
