import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/index.css'

Vue.config.productionTip = false;

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
