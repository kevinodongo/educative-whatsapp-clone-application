export default [
  {
    path: "/error-404",
    name: "error-404",
    component: () =>
      import("../../../pages/home/Error404.vue")
  },
]