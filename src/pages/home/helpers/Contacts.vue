<template>
  <div class="contacts h-full">
    <a
      v-if="sideBarState == 'NEW CHAT'"
      @click="$store.dispatch('SAVE_SIDEBARSTATE', 'ADD GROUP PARTICIPANTS')"
      class="
        flex
        items-center
        cursor-pointer
        border-b border-gray-200
        py-2
        px-4
        space-x-3
      "
    >
      <div
        class="
          inline-flex
          items-center
          justify-center
          p-2
          text-white
          rounded-full
          bg-tealGreen
        "
      >
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
      <div>New group</div>
    </a>
    <div v-if="sideBarState == 'ADD GROUP PARTICIPANTS'" class="px-10">
      <div class="mt-2 border-b border-gray-300 focus-within:border-indigo-600">
        <input
          type="text"
          name="search"
          id="search"
          class="
            block
            w-full
            border-0 border-b border-transparent
            bg-white
            focus:border-indigo-600 focus:ring-0
            sm:text-sm
            placeholder:italic
          "
          placeholder="Type contact name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState({
      sideBarState: (state) => state.sideBarState,
    }),
  },
};
</script>