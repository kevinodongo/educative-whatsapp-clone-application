<template>
  <div class="inbox flex flex-col">
    <a
      @click="$store.dispatch('SAVE_SELECTEDMESSAGE', item)"
      v-for="(item, index) in inbox"
      :key="item.id"
      class="
        grid grid-cols-12
        -space-x-1
        cursor-pointer
        px-4
        hover:bg-gray-100
        items-center
      "
    >
      <div class="col-span-2">
        <img
          v-if="item.type == 'group'"
          :src="item.groupIcon"
          class="rounded-full inline-block h-12 w-12"
          alt="user profile image"
        />
        <img
          v-else
          :src="item.image"
          class="rounded-full inline-block h-12 w-12"
          alt="user profile image"
        />
      </div>
      <div
        class="col-span-10 flex w-full py-3 flex-col border-b border-gray-200"
      >
        <div class="flex flex-shrink items-center justify-between">
          <div
            v-if="item.type"
            v-text="item.subject"
            class="text-md capitalize"
          ></div>
          <div v-else v-text="item.username" class="text-md capitalize"></div>
          <div class="text-xs text-gray-400" v-if="item.messages.length > 0">
            yesterday
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div
            class="italic text-lightGreen font-medium"
            v-if="typingIndex.includes(index)"
          >
            Typing....
          </div>
          <div v-else>
            <div
              class="truncate text-sm w-80 text-gray-400"
              v-if="item.messages.length > 0"
            >
              <div
                v-if="item.messages[0].convoMessages[0].type == 'images'"
                class="flex items-center space-x-1"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    style="fill: #a3a3a3; transform: ; msfilter: "
                  >
                    <path
                      d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"
                    ></path>
                    <path
                      d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"
                    ></path>
                  </svg>
                </div>
                <div>Photo</div>
              </div>
              <div v-else>{{ item.messages[0].convoMessages[0].content }}</div>
            </div>
            <div v-else></div>
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
import { checkUserStatus } from "../../../lib/auth";
import {
  onCreateConversation,
  onUpdateUser,
} from "../../../graphql/subscriptions";
import { API, graphqlOperation } from "aws-amplify";
export default {
  data() {
    return {
      showIndex: null,
      conversationSubscription: null,
      typingSubscription: null,
      typingIndex: [],
    };
  },
  beforeDestroy() {
    this.typingSubscription.unsubscribe();
  },
  computed: {
    ...mapState({
      inbox: (state) => state.inbox,
      logged: (state) => state.logged,
    }),
  },
  async mounted() {
    const userResponse = await checkUserStatus();
    await this.$store.dispatch(
      "FETCH_USER_CONVERSATION",
      userResponse.attributes.sub
    );
    this.conversationSubscription = API.graphql(
      graphqlOperation(onCreateConversation)
    ).subscribe({
      next: ({ value }) => {
        this.handleNewConversation(value.data.onCreateConversation);
      },
      error: (error) => {
        // handle error
        console.warn(error);
      },
    });

    this.typingSubscription = API.graphql(
      graphqlOperation(onUpdateUser)
    ).subscribe({
      next: ({ value }) => {
        this.handleNewTyping(value.data.onUpdateUser);
      },
      error: (error) => {
        // handle error
        console.warn(error);
      },
    });
  },
  methods: {
    handleNewConversation(event) {
      if (this.logged.id == event.userId) {
        event.messages = [];
        this.$store.dispatch("SAVE_INBOX", [...this.inbox, event]);
      }
    },
    handleNewTyping(event) {
      if (event.userTyping) {
        this.inbox.forEach((element, index) => {
          if (element.id == event.id) {
            this.typingIndex.push(index);
          }
        });
      } else {
        this.inbox.forEach((element, index) => {
          if (element.id == event.id) {
            this.typingIndex.splice(index, 1);
          }
        });
      }
    },
  },
};
</script>