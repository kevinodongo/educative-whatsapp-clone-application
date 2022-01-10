export default [
  {
    path: "/login",
    name: "auth-login",
    component: () =>
      import("../../../pages/auth/Login")
  },
  {
    path: "/signup",
    name: "auth-signup",
    component: () =>
      import("../../../pages/auth/Signup")
  },
  {
    path: "/password-help",
    name: "auth-password-help",
    component: () =>
      import("../../../pages/auth/PasswordHelp")
  },
  {
    path: "/reset-password",
    name: "auth-reset-password",
    component: () =>
      import("../../../pages/auth/ResetPassword")
  },
]