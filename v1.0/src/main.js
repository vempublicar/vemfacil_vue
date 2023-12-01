import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from "vue3-apexcharts";
import './assets/bootstrap/css/bootstrap.min.css';
import 'bootstrap';
import store from './store';

const app = createApp(App);

// Registra o VueApexCharts
app.use(VueApexCharts);

//Registra o Vuex
app.use(store); // Use a store com sua aplicação Vue

// Registrar o componente com um nome multi-palavras
app.component('CustomApexChart', VueApexCharts);

// Usa o Vue Router
app.use(router);

// Monta a aplicação
app.mount('#app');
