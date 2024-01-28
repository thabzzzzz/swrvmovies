import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createPinia } from 'pinia';

import 'vue-toast-notification/dist/theme-default.css'; // Import the styles
import VueToast from 'vue-toast-notification';

import piniaPluginPersistedState from "pinia-plugin-persistedstate"



const app = createApp(App); 
app.use(VueToast);

const pinia = createPinia();
app.use(pinia);

pinia.use(piniaPluginPersistedState);

app.use(router).mount('#app');
