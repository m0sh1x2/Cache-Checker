import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuelidate from 'vuelidate'

import {
  routes
} from '@/routes';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')