<template>
  <div class="inbox flex flex-col">
    <a
      @click="$store.dispatch('SAVE_SELECTEDMESSAGE', item)"
      v-for="(item, index) in inbox"
      :key="item.id"
      class="flex cursor-pointer px-4 hover:bg-gray-100 items-center space-x-3"
    >
      <div>
        <img
          :src="item.image"
          class="rounded-full inline-block h-12 w-14"
          alt="user profile image"
        />
      </div>
      <div class="flex w-full py-3 flex-col border-b border-gray-200">
        <div class="flex items-center justify-between">
          <div v-text="item.username" class="text-lg"></div>
          <div class="text-xs text-gray-400" v-if="item.messages.length > 0">
            yesterday
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div
            class="truncate text-sm w-80 text-gray-400"
            v-if="item.messages.length > 0"
          >
            {{ item.messages[0].content }}
          </div>
          <div class="relative inline-block text-left">
            <div>
              <button
                v-if="showIndex !== null"
                @click="showIndex = null"
                type="button"
                class="
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
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                v-else
                @click="showIndex = index"
                type="button"
                class="
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
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              v-if="showIndex == index"
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
                  href="#"
                  class="
                    text-gray-700
                    hover:bg-gray-100
                    block
                    px-4
                    py-2
                    text-sm
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >Archive Chat</a
                >
                <a
                  href="#"
                  class="
                    text-gray-700
                    hover:bg-gray-100
                    block
                    px-4
                    py-2
                    text-sm
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Mute Notifications</a
                >
                <a
                  href="#"
                  class="
                    text-gray-700
                    hover:bg-gray-100
                    block
                    px-4
                    py-2
                    text-sm
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >Delete Chat</a
                >
                <a
                  href="#"
                  class="
                    text-gray-700
                    hover:bg-gray-100
                    block
                    px-4
                    py-2
                    text-sm
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Settings</a
                >
                <a
                  href="#"
                  class="
                    text-gray-700
                    hover:bg-gray-100
                    block
                    px-4
                    py-2
                    text-sm
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >Pin Chat</a
                >
                <a
                  href="#"
                  class="
                    text-gray-700
                    hover:bg-gray-100
                    block
                    px-4
                    py-2
                    text-sm
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >Mark as unread</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showIndex: null,
    };
  },
  computed: {
    ...mapState({
      inbox: (state) => state.inbox,
    }),
  },
};
</script>