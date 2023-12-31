import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./assets/css/main.css"
import 'vue-toast-notification/dist/theme-sugar.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
