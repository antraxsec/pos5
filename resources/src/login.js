import store from "./store";
import Vue from "vue";
import router from "./router";
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import * as rules from "vee-validate/dist/rules";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
Vue.use(BootstrapVue);
import "./assets/styles/sass/themes/lite-purple.scss";

Vue.component(
  "large-sidebar",
  // The `import` function returns a Promise.
  () => import(/* webpackChunkName: "largeSidebar" */ "./containers/layouts/largeSidebar")
);

Vue.component(
  "customizer",
  // The `import` function returns a Promise.
  () => import(/* webpackChunkName: "customizer" */ "./components/common/customizer.vue")
);
Vue.component("vue-perfect-scrollbar", () =>
  import(/* webpackChunkName: "vue-perfect-scrollbar" */ "vue-perfect-scrollbar")
);
import Meta from "vue-meta";

Vue.use(Meta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true
});

localize({
  en: {
    messages: {
      required: 'Este campo es obligatorio',
      required_if: 'Este campo es obligatorio',
      regex: 'Este campo debe tener un formato válido',
      mimes: 'Este campo debe tener un tipo de archivo válido',
      size: (_, { size }) => `El tamaño de este campo debe ser menor a ${size}`,
      min: (_, { length }) => `Este campo debe tener al menos ${length} caracteres`,
      max: (_, { length }) => `Este campo no debe tener más de ${length} caracteres`
    }
  },
  es: {
    messages: {
      required: 'Este campo es obligatorio',
      required_if: 'Este campo es obligatorio',
      regex: 'Este campo debe tener un formato válido',
      mimes: 'Este campo debe tener un tipo de archivo válido',
      size: (_, { size }) => `El tamaño de este campo debe ser menor a ${size}`,
      min: (_, { length }) => `Este campo debe tener al menos ${length} caracteres`,
      max: (_, { length }) => `Este campo no debe tener más de ${length} caracteres`
    }
  },
});
// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// Register it globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

window.axios = require('axios');
window.axios.defaults.baseURL = '';

window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use((response) => {

  return response;
}, (error) => {
  if (error.response && error.response.data) {
    if (error.response.status === 401) {
      window.location.href='/login';
    }

    if (error.response.status === 404) {
      router.push({ name: 'NotFound' });
    }
    if (error.response.status === 403) {
      router.push({ name: 'not_authorize' });
    }

    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});

window.Fire = new Vue();

import { i18n } from "./plugins/i18n";

Vue.component('login-component', require('./views/app/sessions/signIn.vue').default);
Vue.component('forgot-component', require('./views/app/sessions/forgot.vue').default);
Vue.component('reset-component', require('./views/app/sessions/reset.vue').default);

Vue.config.productionTip = true;
Vue.config.silent = true;
Vue.config.devtools = false;

var login = new Vue({
   
  el: '#login',
  store,
  i18n,
  router:router,  
});

