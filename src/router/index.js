import Vue from "vue";
import VueRouter from "vue-router";

import auth from "./routes/auth"
import home from "./routes/home"
import error404 from "./routes/error404"
import { checkUserStatus } from "../lib/auth"

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

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = await checkUserStatus()
    if (!isAuthenticated) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
