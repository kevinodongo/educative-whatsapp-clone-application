export default [
  {
    path: "/home",
    name: "home",
    component: () =>
      import("../../../pages/home/Home.vue"),
    meta: { requiresAuth: true }
  },
]