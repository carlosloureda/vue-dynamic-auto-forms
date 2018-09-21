import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes";
import BootstrapVue from "bootstrap-vue";
import VueFormGenerator from "vue-form-generator";

import customField1 from "./components/elements/customField-1";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

// Register custom field
Vue.component("fieldCustom1", customField1);
Vue.use(VueFormGenerator);

const router = new VueRouter({
  routes: Routes,
  mode: "history"
});
new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
