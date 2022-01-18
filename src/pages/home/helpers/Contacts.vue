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
      <div
        class="mt-2 border-b border-gray-300 focus-within:border-tealGreen-600"
      >
        <input
          type="text"
          name="search"
          id="search"
          class="
            block
            w-full
            border-0 border-b border-transparent
            bg-white
            focus:border-tealGreen-600 focus:ring-0
            sm:text-sm
            placeholder:italic
          "
          placeholder="Type contact name"
        />
      </div>
    </div>
    <div class="flex flex-col space-y-2 pt-2 px-4">
      <div v-for="(item, index) in sortedContacts" :key="index">
        <div class="text-xl uppercase text-tealGreen ml-3 py-4">
          {{ item.letter }}
        </div>
        <a
          @click="newChat(user)"
          v-for="(user, index) in item.contacts"
          :key="user.id ? user.id : index"
          class="flex items-center cursor-pointer space-x-2 py-2"
        >
          <div>
            <img
              class="inline-block h-12 w-12 rounded-full"
              :src="user.image"
              alt=""
            />
          </div>
          <div>
            <div class="capitalize">{{ user.username }}</div>
            <div class="text-sm text-gray-600">Hello How are</div>
          </div>
        </a>
      </div>
    </div>
    <div
      v-if="groupMembers && sideBarState == 'ADD GROUP PARTICIPANTS'"
      :style="{ width: `${rightMenu ? '25%' : '30%'}` }"
      class="
        fixed
        bottom-0
        flex
        items-center
        justify-center
        h-28
        z-10
        bg-gray-200
        inset-x-0
      "
    >
      <button
        @click="$store.dispatch('SAVE_SIDEBARSTATE', 'NEW GROUP')"
        type="button"
        class="
          inline-flex
          items-center
          p-2
          border border-transparent
          rounded-full
          shadow-sm
          text-white
          bg-lightGreen
          hover:bg-lightGreen
        "
      >
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
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import randomize from "randomatic";
import _ from "lodash";
import { API } from "aws-amplify";
import { createConversation } from "../../../graphql/mutations";
export default {
  props: {
    rightMenu: Boolean,
  },
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState({
      sideBarState: (state) => state.sideBarState,
      logged: (state) => state.logged,
      contacts: (state) => state.contacts,
      groupMembers: (state) => state.groupMembers,
      inbox: (state) => state.inbox,
    }),
    sortedContacts: function () {
      return _(this.contacts)
        .groupBy((contact) => contact.username[0].toUpperCase())
        .map((contacts, letter) => ({ letter, contacts }))
        .value();
    },
  },
  async mounted() {
    if (!this.logged) return;
    await this.$store.dispatch("FETCH_USER_CONTACT", this.logged.id);
  },
  methods: {
    async newChat(user) {
      if (this.sideBarState == "ADD GROUP PARTICIPANTS") {
        // create a new group
        const newMember = {
          id: randomize("Aa0", 16),
          userId: this.getContactId(user.id),
          subject: "",
          type: "group",
          username: user.username,
          image: user.image,
          groupIcon: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
          conversationId: "",
          createdAt: new Date(),
        };
        this.$store.dispatch("SAVE_GROUPMEMBER", [
          ...this.groupMembers,
          newMember,
        ]);
      } else {
        // create new conversation
        const newChat = {
          id: randomize("Aa0", 16),
          userId: this.logged.id,
          username: user.username,
          image: user.image,
          conversationId: this.logged.id + "=" + this.getContactId(user.id),
          createdAt: new Date(),
        };
        await this.createNewChat(newChat);
        await this.createNewChat({
          id: randomize("Aa0", 16),
          userId: this.getContactId(user.id),
          username: this.logged.username,
          image: this.logged.image,
          conversationId: this.getContactId(user.id) + "=" + this.logged.id,
          createdAt: new Date(),
        });
        this.$store.dispatch("SAVE_NEW_CHAT", newChat);
      }
    },
    getContactId(id) {
      return id.split("=")[1];
    },
    async createNewChat(value) {
      await API.graphql({
        query: createConversation,
        variables: {
          input: value,
        },
      });
    },
  },
};
</script>