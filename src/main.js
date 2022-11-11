import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faRocket,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const faIcons = [
  faRocket,
  faLaptopCode
];
library.add(faIcons);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Create vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
