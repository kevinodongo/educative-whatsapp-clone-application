<template>
  <div class="min-h-screen flex">
    <div
      class="
        flex-1 flex flex-col
        justify-center
        py-12
        px-4
        sm:px-6
        lg:flex-none lg:px-20
        xl:px-24
      "
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-12 w-auto" :src="logo" alt="Logo" />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Create an account
          </h2>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form
              id="registerForm"
              class="space-y-6"
              @submit.prevent="registerUser"
            >
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    v-model="email"
                    autocomplete="email"
                    required=""
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-lightGreen-500
                      focus:border-lightGreen-500
                      sm:text-sm
                    "
                  />
                </div>
              </div>

              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700"
                >
                  Phone number
                </label>
                <div class="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    v-model="phoneNumber"
                    type="string"
                    autocomplete="phone"
                    required=""
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-lightGreen-500
                      focus:border-lightGreen-500
                      sm:text-sm
                    "
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    v-model="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="
                      appearance-none
                      block
                      w-full
                      px-3
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-lightGreen-500
                      focus:border-lightGreen-500
                      sm:text-sm
                    "
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="
                    w-full
                    flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    rounded-md
                    shadow-sm
                    text-sm
                    font-medium
                    text-white
                    bg-lightGreen
                    focus:outline-none
                  "
                >
                  Create an account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :src="sideImage"
        alt="Side Image"
      />
    </div>
  </div>
</template>

<script>
import { signUp } from "../../lib/auth";
export default {
  data() {
    return {
      logo: require("../../assets/whatsapp.png"),
      sideImage: require("../../assets/register.jpg"),
      email: "",
      phoneNumber: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async registerUser() {
      try {
        await signUp(this.email, this.phoneNumber, this.password);
        // on successfull signup send user to login
        this.$router.push("/login");
      } catch (err) {
        // You can render and display error to user as an alert
        this.error = err.message;
      }
    },
  },
};
</script>