<template>
  <div class="settings">
    <a
      @click="$store.dispatch('SAVE_SIDEBARSTATE', 'PROFILE')"
      class="flex items-center cursor-pointer p-4 space-x-3"
    >
      <img
        class="inline-block h-12 w-12 rounded-full"
        :src="logged.image"
        alt="user image"
      />
      <div>
        <div v-text="logged.username"></div>
        <div class="text-sm text-gray-400">Hey there! I am using WhatsApp</div>
      </div>
    </a>

    <div class="mt-4">
      <a
        @click="$store.dispatch('SAVE_SIDEBARSTATE', 'ADD GROUP PARTICIPANTS')"
        class="flex items-center cursor-pointer py-2 px-4 space-x-3"
      >
        <div class="inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
            />
          </svg>
        </div>
        <div class="py-2 border-b border-gray-200 w-full">Notifications</div>
      </a>
      <a
        @click="$store.dispatch('SAVE_SIDEBARSTATE', 'ADD GROUP PARTICIPANTS')"
        class="flex items-center cursor-pointer py-2 px-4 space-x-3"
      >
        <div class="inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="py-2 border-b border-gray-200 w-full">Privacy</div>
      </a>
      <a
        @click="$store.dispatch('SAVE_SIDEBARSTATE', 'ADD GROUP PARTICIPANTS')"
        class="flex items-center cursor-pointer py-2 px-4 space-x-3"
      >
        <div class="inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="py-2 border-b border-gray-200 w-full">Security</div>
      </a>
      <a
        @click="$store.dispatch('SAVE_SIDEBARSTATE', 'ADD GROUP PARTICIPANTS')"
        class="flex items-center cursor-pointer py-2 px-4 space-x-3"
      >
        <div class="inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
            />
          </svg>
        </div>
        <div class="py-2 border-b border-gray-200 w-full">Theme</div>
      </a>
      <a
        @click="$store.dispatch('SAVE_SIDEBARSTATE', 'ADD GROUP PARTICIPANTS')"
        class="flex items-center cursor-pointer py-2 px-4 space-x-3"
      >
        <div class="inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="py-2 border-b border-gray-200 w-full">Chat wallpaper</div>
      </a>
      <a
        @click="$store.dispatch('SAVE_SIDEBARSTATE', 'ADD GROUP PARTICIPANTS')"
        class="flex items-center cursor-pointer py-2 px-4 space-x-3"
      >
        <div class="inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="py-2 border-b border-gray-200 w-full">Desktop settings</div>
      </a>
      <a
        @click="$store.dispatch('SAVE_SIDEBARSTATE', 'ADD GROUP PARTICIPANTS')"
        class="flex items-center cursor-pointer py-2 px-4 space-x-3"
      >
        <div class="inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
          >
            <path
              d="M21 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 2h2v2h-2V7zm0 4h2v2h-2v-2zM9 7h2v2H9V7zm0 4h2v2H9v-2zM5 7h2v2H5V7zm0 4h2v2H5v-2zm12 6H7v-2h10v2zm2-4h-2v-2h2v2zm0-4h-2V7h2v2z"
            ></path>
          </svg>
        </div>
        <div class="py-2 border-b border-gray-200 w-full">
          Keyboard shortcuts
        </div>
      </a>
      <a
        @click="$store.dispatch('SAVE_SIDEBARSTATE', 'ADD GROUP PARTICIPANTS')"
        class="flex items-center cursor-pointer py-2 px-4 space-x-3"
      >
        <div class="inline-flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="py-2 border-b border-gray-200 w-full">Help</div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      logged: (state) => state.logged,
    }),
  },
};
</script>