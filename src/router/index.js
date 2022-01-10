import Vue from "vue";
import VueRouter from "vue-router";

import auth from "./routes/auth"
import home from "./routes/home"
import error404 from "./routes/error404"

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' },
  ...auth,
  ...home,
  ...error404,
  {
    path: '*',
    redirect: 'error-404',
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
});

export default router;
