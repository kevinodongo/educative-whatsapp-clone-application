<template>
  <div class="messageInput flex items-center justify-between">
    <a
      @click="openMenu"
      class="flex cursor-pointer space-x-4 items-center"
      v-if="selectedMessage"
    >
      <img
        v-if="selectedMessage.type == 'group'"
        class="inline-block h-10 w-10 rounded-full"
        :src="selectedMessage.groupIcon"
        alt=""
      />
      <img
        v-else
        class="inline-block h-10 w-10 rounded-full"
        :src="selectedMessage.image"
        alt=""
      />
      <div>
        <div
          v-if="selectedMessage.type == 'group'"
          v-text="selectedMessage.subject"
          class="text-md capitalize"
        ></div>
        <div v-else v-text="selectedMessage.username"></div>
        <div v-if="!selectedMessage.type" class="text-sm text-gray-500">
          {{ computedLastSeen }}
        </div>
      </div>
    </a>
    <div class="flex items-center space-x-6 text-gray-500">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </button>
      <div class="border-l border-gray-300 h-6"></div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="relative inline-block text-left">
        <div>
          <button
            @click="menu = !menu"
            type="button"
            class="
              bg-gray-100
              rounded-full
              flex
              items-center
              text-gray-400
              hover:text-gray-600
              focus:outline-none
            "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <span class="sr-only">Open options</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </button>
        </div>

        <div
          v-if="menu"
          class="
            origin-top-right
            absolute
            right-0
            z-20
            mt-2
            w-44
            rounded
            shadow-lg
            bg-white
            focus:outline-none
          "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <a
              @click="openMenu"
              class="
                text-gray-700
                cursor-pointer
                hover:bg-gray-100
                block
                px-4
                py-2
                text-sm
              "
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
              >Contact info</a
            >
            <a
              href="#"
              class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              >Select messages</a
            >
            <a
              href="#"
              class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >Mute notifications</a
            >
            <a
              href="#"
              class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
              >Clear messages</a
            >
            <a
              href="#"
              class="text-gray-700 hover:bg-gray-100 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
              >Delete chat</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formatDistanceToNow } from "date-fns";
import { onUpdateUser } from "../../../graphql/subscriptions";
import { API, graphqlOperation } from "aws-amplify";
export default {
  props: {
    openRightMenu: Function,
  },
  data() {
    return {
      menu: false,
      last_seen: new Date(),
      subscription: null,
    };
  },
  beforeDestroy() {
    this.subscription.unsubscribe();
  },
  computed: {
    ...mapState({
      selectedMessage: (state) => state.selectedMessage,
    }),
    computedLastSeen: function () {
      return formatDistanceToNow(new Date(this.last_seen), { addSuffix: true });
    },
  },
  mounted() {
    this.subscription = API.graphql(graphqlOperation(onUpdateUser)).subscribe({
      next: ({ value }) => {
        this.handleNewLastSeen(value.data.onUpdateUser);
      },
      error: (error) => {
        // handle error
        console.warn(error);
      },
    });
  },
  methods: {
    openMenu() {
      this.menu = false;
      this.$emit("openRightMenu");
    },
    handleNewLastSeen(event) {
      if (this.selectedMessage.userId == event.id) {
        this.last_seen = event.lastSeen;
      }
    },
  },
};
</script>