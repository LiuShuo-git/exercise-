import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
import axios from 'axios';
axios.defaults.baseURL= 'http://127.0.0.1:9999/api/v1';
Vue.prototype.$http = axios



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
