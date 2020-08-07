import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { auth } from "./firebase";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

auth.onAuthStateChanged((user) => {
  if (user) {
    const usuarioDetectado = {
      email: user.email,
      uid: user.uid,
    };
    store.dispatch("detectarUsuario", usuarioDetectado);
  } else {
    store.dispatch("detectarUsuario", user);
  }
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
