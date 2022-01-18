<template>
  <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" :src="logo" alt="Logo" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Reset password
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="newPassword">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
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
            <label for="code" class="block text-sm font-medium text-gray-700">
              Code
            </label>
            <div class="mt-1">
              <input
                id="code"
                name="code"
                v-model="code"
                type="text"
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
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                v-model="password"
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
              Reset password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { resetPassword } from '../../lib/auth';
export default {
  data() {
    return {
      logo: require("../../assets/whatsapp.png"),
      email: "",
      password: "",
      code: "",
      error: null
    };
  },
  methods: {
    async newPassword() {
      try {
        await resetPassword(this.email);
        this.$router.push("/login");
      } catch (err) {
        // You can render and display error to user as an alert
        this.error = err.message;
      }
    },
  },
};
</script>