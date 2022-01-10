<template>
  <div class="w-full flex items-center space-x-2">
    <button>
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
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
    <label
      for="file-upload"
      class="
        relative
        cursor-pointer
        rounded-md
        font-medium
        text-gray-600
        focus-within:outline-none
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
          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
        />
      </svg>
      <input
        @change="onUpload"
        id="file-upload"
        multiple
        name="file-upload"
        type="file"
        class="sr-only"
      />
    </label>
    <input
      type="text"
      name="message"
      id="message__input"
      v-model="content"
      class="
        focus:ring-indigo-500 focus:border-indigo-500
        block
        w-full
        sm:text-sm
        border-gray-100
        rounded-full
      "
      placeholder="Type a message"
    />
    <button @click="sendMessage" v-if="show" style="transform: rotate(90deg)">
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
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </button>
    <button v-else>
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
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import randomize from "randomatic";
export default {
  data() {
    return {
      show: false,
      content: "",
    };
  },
  computed: {
    ...mapState({
      logged: (state) => state.logged,
      inbox: (state) => state.inbox,
      selectedMessage: (state) => state.selectedMessage,
    }),
  },
  mounted() {
    const messageInput = document.getElementById("message__input");
    messageInput.addEventListener("keyup", this.handleChange);
  },
  methods: {
    handleChange(event) {
      if (event.target.value) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    sendMessage() {
      const newMessage = {
        id: randomize("Aa0", 16),
        source: this.logged.id,
        recipient: this.selectedMessage.id,
        content: this.content,
        type: "message",
        createdAt: new Date(),
      };
      const item = this.selectedMessage;
      item.messages.push(newMessage);
      this.$store.dispatch("SAVE_MESSAGE", item);
      this.content = "";
    },
    onUpload(event) {
      const items = [...event.target.files];
      const response = items.map((event) => {
        return URL.createObjectURL(event);
      });
      const newMessage = {
        id: randomize("Aa0", 16),
        source: this.logged.id,
        recipient: this.selectedMessage.id,
        type: "images",
        content: response,
        createdAt: new Date(),
      };
      const item = this.selectedMessage;
      item.messages.push(newMessage);
      this.$store.dispatch("SAVE_MESSAGE", item);
    },
  },
};
</script>