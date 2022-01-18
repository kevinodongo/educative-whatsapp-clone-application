<template>
  <div class="home relative h-screen overflow-hidden">
    <!--Navbar-->
    <div class="sticky z-20 w-full inset-x-0 top-0">
      <div
        class="
          navbar
          bg-tealGreen
          text-white
          px-4
          py-1
          flex
          items-center
          justify-between
        "
      >
        <div class="text-sm font-thin">WhatsApp</div>
        <div class="flex items-center space-x-6">
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
              d="M18 12H6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: white; transform: ; msfilter: "
          >
            <path
              d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z"
            ></path>
          </svg>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
    <!--Left Side bar-->
    <div
      :style="{ width: `${rightMenu ? '25%' : '30%'}` }"
      class="absolute pt-6 inset-y-0 border-r border-gray-300 h-full"
    >
      <div class="bg-tealGreen p-4" v-if="sideBarState !== 'INBOX'">
        <div class="flex items-center text-white pt-12 space-x-4">
          <button @click="$store.dispatch('SAVE_SIDEBARSTATE', 'INBOX')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </button>
          <div class="inbox__title">
            {{ sideBarState }}
          </div>
        </div>
      </div>
      <div
        v-if="sideBarState == 'INBOX'"
        class="flex items-center justify-between shadow bg-gray-100 px-4 py-3"
      >
        <div class="flex items-center space-x-6">
          <img
            v-if="logged"
            class="inline-block h-10 w-10 rounded-full"
            :src="logged.image"
            alt=""
          />
          <div class="uppercase text-xs font-bold">Beta</div>
        </div>
        <div class="flex items-center text-gray-600 space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #4b5563; transform: ; msfilter: "
          >
            <path
              d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"
            ></path>
          </svg>
          <button @click="$store.dispatch('SAVE_SIDEBARSTATE', 'NEW CHAT')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
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
                  @click="
                    menu = false;
                    $store.dispatch(
                      'SAVE_SIDEBARSTATE',
                      'ADD GROUP PARTICIPANTS'
                    );
                  "
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
                  >New group</a
                >
                <a
                  @click="
                    menu = false;
                    $store.dispatch('SAVE_SIDEBARSTATE', 'ARCHIVED CHATS');
                  "
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
                  id="menu-item-1"
                  >Archived</a
                >
                <a
                  @click="
                    menu = false;
                    $store.dispatch('SAVE_SIDEBARSTATE', 'STARRED MESSAGES');
                  "
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
                  id="menu-item-2"
                  >Starred messages</a
                >
                <a
                  @click="
                    menu = false;
                    $store.dispatch('SAVE_SIDEBARSTATE', 'SETTINGS');
                  "
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
                  id="menu-item-1"
                  >Settings</a
                >
                <a
                  @click="logOut"
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
                  >Log out</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-8 flex flex-col pt-3 space-y-1"
        v-if="sortedGroupMembers.length > 0 && sideBarState !== 'NEW GROUP'"
      >
        <div
          class="flex"
          v-for="(item, index) in sortedGroupMembers"
          :key="item.id ? item.id : index"
        >
          <div
            class="
              inline-flex
              rounded-full
              items-center
              py-0.5
              pl-2.5
              pr-1
              text-sm
              font-medium
              bg-gray-200
              text-gray-700
            "
          >
            <div class="flex items-center space-x-2">
              <div>
                <img
                  class="inline-block h6 w-6 rounded-full"
                  :src="item.image"
                  alt=""
                />
              </div>
              <div class="capitalize text-xs">{{ item.username }}</div>
            </div>
            <button
              @click="removeMember(index)"
              type="button"
              class="
                flex-shrink-0
                ml-0.5
                h-4
                w-4
                rounded-full
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:bg-indigo-200 hover:text-indigo-500
                focus:outline-none focus:bg-indigo-500 focus:text-white
              "
            >
              <span class="sr-only">Remove large option</span>
              <svg
                class="h-2 w-2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 8 8"
              >
                <path
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M1 1l6 6m0-6L1 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 py-2 px-4" v-if="sideBarState == 'INBOX'">
        <div class="relative rounded-md">
          <div
            class="
              absolute
              inset-y-0
              left-0
              pl-3
              flex
              items-center
              text-gray-500
              pointer-events-none
            "
          >
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
          </div>
          <input
            type="text"
            name="search"
            id="search"
            class="
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              pl-10
              sm:text-sm
              border-gray-100
              rounded-full
            "
            placeholder="Search or start a new chat"
          />
        </div>
      </div>
      <div class="bg-gray-50 py-2 px-4" v-if="sideBarState == 'NEW CHAT'">
        <div class="relative rounded-md">
          <div
            class="
              absolute
              inset-y-0
              left-0
              pl-3
              flex
              items-center
              text-gray-500
              pointer-events-none
            "
          >
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
          </div>
          <input
            type="text"
            name="search"
            id="search"
            class="
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              pl-10
              sm:text-sm
              border-gray-100
              rounded-full
            "
            placeholder="Search contacts"
          />
        </div>
      </div>
      <div class="overflow-y-auto inbox__area relative custom__scroll pb-16">
        <div v-if="sideBarState == 'INBOX'">
          <MessageInbox />
        </div>
        <div
          v-if="
            (sideBarState == 'NEW CHAT') |
              (sideBarState == 'ADD GROUP PARTICIPANTS')
          "
        >
          <Contacts :rightMenu="rightMenu" />
        </div>
        <div
          v-if="sideBarState == 'ARCHIVED CHATS'"
          class="absolute w-full inset-y-0 h-full"
        >
          <ArchievedMessages />
        </div>
        <div
          v-if="sideBarState == 'STARRED MESSAGES'"
          class="absolute w-full inset-y-0 h-full"
        >
          <StarredMessages />
        </div>
        <div
          v-if="sideBarState == 'SETTINGS'"
          class="absolute w-full inset-y-0 h-full"
        >
          <Settings />
        </div>
        <div
          v-if="sideBarState == 'NEW GROUP'"
          class="absolute w-full inset-y-0 h-full"
        >
          <CreateGroup />
        </div>
      </div>
    </div>

    <!--Message Thread-->
    <div
      :style="{
        left: `${rightMenu ? '25%' : '30%'}`,
        right: `${rightMenu ? '25%' : '0%'}`,
      }"
      class="pt-8 absolute inset-0 h-full"
    >
      <div v-if="selectedMessage" class="h-full">
        <div class="py-2 px-4 z-20 inset-x-0 w-full bg-gray-100 absolute top-7">
          <MessageToolbar @openRightMenu="openRightMenu" />
        </div>
        <div
          class="
            inset-0
            px-4
            absolute
            w-full
            custom__scroll
            message__thread
            overflow-y-auto
          "
        >
          <MessageThread />
        </div>
        <div
          class="
            py-2
            px-4
            flex
            items-center
            inset-x-0
            w-full
            bg-gray-100
            absolute
            bottom-0
          "
        >
          <MessageInput />
        </div>
      </div>
      <div
        v-else
        class="
          flex flex-col
          bg-gray-100
          items-center
          border-b-8 border-lightGreen
          justify-center
          h-full
        "
      >
        <img class="h-60" :src="noMessages" alt="No Messages Image" />
        <div class="mb-4 flex items-center space-x-3 py-2">
          <div class="text-4xl font-thin text-gray-700">
            WhatsApp for Desktop
          </div>
          <div
            class="
              uppercase
              mt-2
              text-xs
              font-semibold
              px-2
              bg-gray-200
              rounded-full
              p-1
            "
          >
            Beta
          </div>
        </div>
        <div class="text-gray-500 font-thin">
          Make calls and send messages without connecting your phone.
        </div>
        <div class="text-gray-500 font-thin">
          Use WhatsApp on up to 4 devices at the same time.
        </div>
        <div class="flex space-x-1 absolute bottom-10 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="text-sm font-thin">End to end encrypted</div>
        </div>
      </div>
    </div>

    <div
      v-if="rightMenu"
      style="width: 25%"
      class="
        absolute
        pt-6
        right-0
        inset-y-0
        border-l
        bg-gray-100
        border-gray-300
        h-full
      "
    >
      <div class="p-4 bg-gray-100 flex items-center space-x-4">
        <button @click="rightMenu = false" class="text-gray-600">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div>Contact Info</div>
      </div>
      <div class="overflow-y-auto custom__scroll h-full pb-16">
        <ContactInfo />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Contacts from "./helpers/Contacts.vue";
import ContactInfo from "./helpers/ContactInfo.vue";
import Settings from "./helpers/Settings.vue";
import MessageInbox from "./helpers/MessageInbox.vue";
import MessageInput from "./helpers/MessageInput.vue";
import MessageToolbar from "./helpers/MessageToolbar.vue";
import MessageThread from "./helpers/MessageThread.vue";
import ArchievedMessages from "./helpers/ArchievedMessages.vue";
import StarredMessages from "./helpers/StarredMessages.vue";
import { checkUserStatus, signOut } from "../../lib/auth";
import CreateGroup from "./helpers/CreateGroup.vue";
import { API } from "aws-amplify";
import { updateUser } from "../../graphql/mutations";
import _ from "lodash";
export default {
  components: {
    MessageInbox,
    MessageInput,
    MessageToolbar,
    MessageThread,
    Contacts,
    Settings,
    CreateGroup,
    ArchievedMessages,
    StarredMessages,
    ContactInfo,
  },
  data() {
    return {
      menu: false,
      rightMenu: false,
      noMessages: require("../../assets/no-message.png"),
      error: null,
      interval: null,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: {
    ...mapState({
      selectedMessage: (state) => state.selectedMessage,
      sideBarState: (state) => state.sideBarState,
      logged: (state) => state.logged,
      groupMembers: (state) => state.groupMembers,
    }),
    sortedGroupMembers: function () {
      return _.uniqBy(this.groupMembers, "username");
    },
  },
  async mounted() {
    const userResponse = await checkUserStatus();
    await this.$store.dispatch(
      "FETCH_USER_INFORMATION",
      userResponse.attributes.sub
    );
   this.interval = setInterval(async () => {
      await this.updateLastSeen({
        id: this.logged.id,
        lastSeen: new Date(),
      });
    }, 10000);
  },
  methods: {
    openRightMenu() {
      this.rightMenu = true;
    },
    async logOut() {
      try {
        await signOut();
        this.$store.commit("RESET_STATE");
        this.$router.push("/");
      } catch (err) {
        this.error = err.message;
      }
    },
    removeMember(index) {
      try {
        this.$store.disptach(
          "SAVE_GROUPMEMBER",
          this.groupMembers.splice(index, 1)
        );
      } catch (error) {
        // handle error
      }
    },
    async updateLastSeen(value) {
      await API.graphql({
        query: updateUser,
        variables: {
          input: value,
        },
      });
    },
  },
};
</script>

<style lang="css">
.inbox__area {
  max-height: 90%;
  min-height: 90%;
}

.inbox__title {
  text-transform: lowercase;
}

.inbox__title:first-letter {
  text-transform: capitalize;
}

.custom__scroll::-webkit-scrollbar {
  width: 8px;
}

.custom__scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.custom__scroll::-webkit-scrollbar-thumb {
  background: #a1a1aa;
}

.custom__scroll::-webkit-scrollbar-thumb:hover {
  background: #71717a;
}
.message__thread {
  background: url("../../assets/thread.png");
}
</style>