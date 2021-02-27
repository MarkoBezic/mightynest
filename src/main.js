import Vue from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../src/css/app.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faAngleDown,
  faTruck,
  faTimes,
  faAngleUp,
  faCheckCircle,
  faCheck,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook,
  faPinterest,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUserSecret,
  faAngleDown,
  faTruck,
  faTimes,
  faAngleUp,
  faCheckCircle,
  faCheck,
  faFacebook,
  faPinterest,
  faInstagramSquare,
  faPlusCircle,
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
