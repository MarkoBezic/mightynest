import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
import "../src/css/app.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faAngleDown,
  faTruck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import UUID from "vue-uuid";

library.add(faUserSecret, faAngleDown, faTruck, faTimes);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(UUID);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
