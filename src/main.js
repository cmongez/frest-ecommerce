import 'bootstrap/dist/css/bootstrap.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// Vue.config.errorHandler = (msg, vm, info) => {
//   alert(info);
// };
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
