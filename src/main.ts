import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import './assets/scss/style.scss';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');
