<template>
  <div class="messageThread max-w-4xl mx-auto py-28 space-y-3">
    <!--Encryption Alert-->
    <div class="flex items-center justify-center">
      <div
        class="
          bg-amber-200 bg-opacity-50
          rounded-md
          py-2
          text-xs
          space-x-1
          px-2
          flex
        "
      >
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
        <span
          >Messages and calls are end-to-end encrypted. No one outside of thgis
          chat, not even WhatsApp, can read or listen to them. Tap to learn
          more.</span
        >
      </div>
    </div>

    <!--Messages-->
    <div v-if="isLoading" class="absolute top-36 inset-x-0 pt-4 w-full z-20">
      <div class="flex items-center justify-center">
        <div class="bg-white shadow rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="animate-spin"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: #128c7e; transform: ; msfilter: "
          >
            <path
              d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div v-if="selectedMessage" class="flex flex-col space-y-3">
      <div v-for="(item, index) in selectedMessage.messages" :key="index" class="flex flex-col space-y-3">
        <div class="flex items-center justify-center">
          <div style="background-color: #bae6fd" class="p-2 text-sm rounded-md shadow">{{ item.date }}</div>
        </div>
        <div class="flex flex-col space-y-3">
          <div
            :class="[
              `flex flex-col ${
                logged.id == message.userId ? 'items-start' : 'items-end'
              } `,
            ]"
            v-for="(message, index) in item.convoMessages"
            :key="message.id ? message.id : index"
          >
            <div
              :class="[
                `px-2 py-1 ${
                  logged.id == message.userId ? 'bg-white' : 'bg-teaGreen'
                } rounded-md message__content`,
              ]"
            >
              <div
                class="flex items-start justify-between"
                v-if="message.type == 'message'"
              >
                <div class="text-sm" v-text="message.content"></div>

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
                        >Reply</a
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
                        >Forward message</a
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
                        >Star Message</a
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
                        >Delete message</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="message.type == 'images'"
                :class="[
                  `grid gap-1 ${
                    JSON.parse(message.content).length > 1
                      ? 'grid-cols-2'
                      : 'grid-cols-1'
                  }`,
                ]"
              >
                <div
                  v-for="(image, index) in JSON.parse(message.content)"
                  :key="index"
                >
                  <img
                    :src="[
                      `https://educativewhatsappe149de7d85fb4ff88f8302858c46c793605-dev.s3.amazonaws.com/public/${image.key}`,
                    ]"
                    class="w-40 h-40 object-center object-cover"
                    alt="images sent"
                  />
                </div>
              </div>

              <div class="text-right font-thin text-xs text-gray-400">
                {{ formatedDate(message.createdAt) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formatDistanceToNow } from "date-fns";
import { onCreateMessage } from "../../../graphql/subscriptions";
import { API, graphqlOperation } from "aws-amplify";
export default {
  data() {
    return {
      showIndex: null,
      isLoading: true,
      processing: true,
      subscription: null,
    };
  },
  computed: {
    ...mapState({
      selectedMessage: (state) => state.selectedMessage,
      logged: (state) => state.logged,
    }),
  },
  mounted() {
    this.isLoading = false;
    this.subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: ({ value }) => {
        this.handleNewMessage(value.data.onCreateMessage);
      },
      error: (error) => {
        // handle error
        console.warn(error);
      },
    });
  },
  methods: {
    formatedDate(item) {
      return formatDistanceToNow(new Date(item), { addSuffix: true });
    },
    handleNewMessage(event) {
      if (this.selectedMessage.conversationId !== event.conversationId) return;
      this.$store.dispatch("SAVE_MESSAGE", event);
    },
  },
};
</script>

<style lang="css">
.message__content {
  max-width: 75%;
}
</style>