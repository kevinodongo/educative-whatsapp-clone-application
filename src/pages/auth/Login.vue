<template>
  <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" :src="logo" alt="Logo" />
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ " " }}
        <a href="#" class="font-medium text-tealGreen">
          start your 14-day free trial
        </a>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="login">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                v-model="email"
                type="email"
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

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="
                  h-4
                  w-4
                  text-lightGreen-600
                  focus:ring-lightGreen-500
                  border-gray-300
                  rounded
                "
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="/password-help" class="font-medium text-tealGreen">
                Forgot your password?
              </a>
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
              <div v-if="isLoading">Processing...</div>
              <div v-else>Sign in</div>
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a
                href="#"
                class="
                  w-full
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  bg-white
                  text-sm
                  font-medium
                  text-gray-500
                  hover:bg-gray-50
                "
              >
                <span class="sr-only">Sign in with Facebook</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="
                  w-full
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  bg-white
                  text-sm
                  font-medium
                  text-gray-500
                  hover:bg-gray-50
                "
              >
                <span class="sr-only">Sign in with Twitter</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API } from "aws-amplify";
import { createUser } from "../../graphql/mutations";
import { signIn } from "../../lib/auth";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      logo: require("../../assets/whatsapp.png"),
      email: "",
      password: "",
      error: "",
      isLoading: false,
    };
  },
  computed: {
    ...mapState({
      logged: (state) => state.logged
    })
  },
  methods: {
    // login user
    async login() {
      try {
        this.isLoading = true;
        const userResponse = await signIn(this.email, this.password);
        // get user information from dynamodb
        await this.$store.dispatch("FETCH_USER_INFORMATION",
          userResponse.attributes.sub
        );

        if (this.logged) {
          this.isLoading = false;
          this.$router.push("/home");
        } else {
          // create user record
          await this.createNewUser(userResponse.attributes);
          this.isLoading = false;
          this.$router.push("/home");
        }
      } catch (err) {
        // You can render and display error to user as an alert
        this.error = err.message;
        this.isLoading = false;
      }
    },
    // create new user information
    async createNewUser(user) {
      try {
        const newUser = {
          id: user.sub,
          email: user.email,
          phone: user["custom:phoneNumber"],
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          username: "",
          createdAt: new Date(),
        };
        console.log("[[NEW USER]]", newUser);
        await API.graphql({
          query: createUser,
          variables: {
            input: newUser,
          },
        });
        this.$store.dispatch("SAVE_LOGGED", newUser);
      } catch (error) {
        console.log("[[ERROR]]", error);
        // handle error
        throw new Error(error);
      }
    },
  },
};
</script>