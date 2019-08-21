import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuelidate from 'vuelidate'
import store from './store/store'
import { authService } from '@/services/authServices';

import AxiosPlugin from '@/plugins/axiosPlugin'

import {
  routes
} from '@/routes';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(AxiosPlugin);

// This mixin appends the isAuthenticated computed property across all components.
Vue.mixin(authService);

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')