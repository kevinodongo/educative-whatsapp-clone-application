<template>
  <div class="create-group flex flex-col space-y-2 bg-gray-200 h-full">
    <div
      class="
        bg-white
        px-6
        py-8
        space-y-3
        flex flex-col
        items-center
        justify-center
      "
    >
      <div class="mt-1 sm:mt-0 sm:col-span-2">
        <div
          class="
            w-40
            h-40
            flex
            justify-center
            items-center
            p-6
            bg-gray-400
            rounded-full
          "
        >
          <div class="space-y-1 text-center">
            <div class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: white; transform: ; msfilter: "
              >
                <path
                  d="M12 8c-2.168 0-4 1.832-4 4s1.832 4 4 4 4-1.832 4-4-1.832-4-4-4zm0 6c-1.065 0-2-.935-2-2s.935-2 2-2 2 .935 2 2-.935 2-2 2z"
                ></path>
                <path
                  d="M20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.996.996 0 0 0-.707.293L6.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 18V7h3c.266 0 .52-.105.707-.293L10.414 4h3.172l2.707 2.707A.996.996 0 0 0 17 7h3l.002 11H4z"
                ></path>
              </svg>
            </div>
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="
                  relative
                  cursor-pointer
                  bg-gray-400
                  rounded-md
                  text-white
                  hover:text-indigo-500
                  focus-within:outline-none
                  focus-within:ring-0
                  focus-within:ring-offset-0
                  uppercase
                "
              >
                <span>Add Group </span>
                <div>Icon</div>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          mt-1
          w-full
          border-b-2 border-lightGreen
          focus-within:border-indigo-600
        "
      >
        <input
          type="text"
          name="name"
          id="name"
          v-model="groupSubject"
          class="
            block
            w-full
            border-0 border-b border-transparent
            bg-white
            focus:border-lightGreen focus:ring-0
            sm:text-sm
          "
          placeholder="Group Subject"
        />
      </div>
    </div>
    <div class="flex items-center justify-between p-6 bg-white shadow-sm">
      <div>
        <div>Disapearing messages</div>
        <div class="text-gray-400">OFF</div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>

    <div class="flex items-center justify-center pt-8" v-if="groupSubject">
      <button
        @click="createGroupMembers"
        type="button"
        class="
          inline-flex
          items-center
          p-3
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
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import { mapState } from "vuex";
import randomize from "randomatic";
import { API } from "aws-amplify";
import { createConversation } from "../../../graphql/mutations";
export default {
  data() {
    return {
      groupSubject: "",
    };
  },
  computed: {
    ...mapState({
      groupMembers: (state) => state.groupMembers,
      logged: (state) => state.logged,
      inbox: (state) => state.inbox
    }),
  },
  methods: {
    async createGroupMembers() {
      const newGroup = [...this.groupMembers];
      const id = randomize("Aa0", 16);

      // create logged in user record
      const member = {
        id: randomize("Aa0", 16),
        userId: this.logged.id,
        subject: "",
        type: "group",
        username: this.logged.username,
        image: this.logged.image,
        groupIcon: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        conversationId: "",
        createdAt: new Date(),
      };
      // add to the array
      newGroup.push(member)

      // process
      const response = await newGroup.map(async (user) => {
        user.conversationId = id;
        user.subject = this.groupSubject;
        return await API.graphql({
          query: createConversation,
          variables: {
            input: user,
          },
        });
      });
      await Promise.all(response);

      // clear group members
      this.$store.dispatch("SAVE_GROUPMEMBER", []);

      // set empty array for group messages
      member.messages = []
      this.$store.dispatch("SAVE_INBOX", [...this.inbox, member])
      this.$store.dispatch("SAVE_SELECTEDMESSAGE", member);

      // set the inbox view
      this.$store.dispatch('SAVE_SIDEBARSTATE', 'INBOX')
    },
  },
};
</script>