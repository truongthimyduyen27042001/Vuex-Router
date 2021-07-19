import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import JwPagination from "jw-vue-pagination";

Vue.config.productionTip = false;

Vue.component("jw-pagination", JwPagination);
Vue.use(BootstrapVue);
Vue.use(require("vue-faker"));
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
