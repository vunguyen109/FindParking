import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Axios from "axios";
import api from "@/utils/axios";

Vue.prototype.$axios = Axios;

Vue.prototype.$api = api;
Vue.use(BootstrapVue)
import ConstPlugin from './components/util/const_plugin'

Vue.config.productionTip = false

// ------------- 多言語対応 --------------
import VueI18n from 'vue-i18n';
import messages from '@/config/languages/message';
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ja',
  fallbackLocale: 'ja',
  messages,
});
Vue.i18n = i18n;
export default i18n;
// ----------------------------------------


new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: { App },
  VueLocalStorage,
  render: h => h(App),
}).$mount('#app')


