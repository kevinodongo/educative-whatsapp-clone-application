<template>
  <div class="right__profile flex flex-col space-y-2">
    <div
      class="
        shadow
        bg-white
        space-y-2
        flex flex-col
        justify-center
        items-center
        p-6
      "
    >
      <img
        v-if="selectedMessage"
        class="inline-block h-44 w-44 rounded-full"
        :src="selectedMessage.image"
        alt=""
      />
      <div class="text-2xl">{{ selectedMessage.username }}</div>
      <div class="text-gray-400">{{ selectedMessage.phone }}</div>
      <div class="flex items-center pt-4 space-x-4">
        <button class="flex flex-col space-y-4 items-center text-tealGreen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
            />
          </svg>
          <div>Audio</div>
        </button>
        <button class="flex items-center flex-col space-y-4 text-tealGreen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
            />
          </svg>
          <div>Video</div>
        </button>
      </div>
    </div>
    <div class="shadow bg-white p-6 space-y-2">
      <div class="text-sm text-gray-400">About</div>
      <div>Urgents calls only</div>
    </div>
    <div class="shadow bg-white p-6">
      <div class="flex items-center justify-between space-x-4">
        <div class="text-sm text-gray-400">Media links and docs</div>
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
    <div class="shadow bg-white p-6">
      <div class="flex items-center justify-between space-x-4">
        <div class="flex space-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <div>Starred messages</div>
        </div>
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
    <div class="shadow bg-white p-6 space-y-6">
      <div class="flex items-center text-gray-500 justify-between space-x-4">
        <div class="flex space-x-2 items-center">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg>
          <div>Mute notifications</div>
        </div>
        <button
          type="button"
          class="
            bg-gray-200
            relative
            inline-flex
            flex-shrink-0
            h-6
            w-11
            border-2 border-transparent
            rounded-full
            cursor-pointer
            transition-colors
            ease-in-out
            duration-200
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
          role="switch"
          aria-checked="false"
        >
          <span class="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            class="
              translate-x-0
              pointer-events-none
              inline-block
              h-5
              w-5
              rounded-full
              bg-white
              shadow
              transform
              ring-0
              transition
              ease-in-out
              duration-200
            "
          ></span>
        </button>
      </div>
      <div class="flex items-center text-gray-500 justify-between space-x-4">
        <div class="flex space-x-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
</svg>
          <div>Disapearing messages</div>
        </div>
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
      <div class="flex flex-col text-gray-500">
        <div class="flex space-x-2 items-center">
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
          <div>Encryption</div>
        </div>
        <div class="text-gray-400 text-sm">Messages and calls are end-to-end encrypted.</div>
        <div class="text-gray-400 text-sm">Click to verify</div>
      </div>
    </div>
    <div class="shadow bg-white px-4 py-2 space-y-3">
      <div class="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #ef4444; transform: ; msfilter: "
        >
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-1.846.634-3.542 1.688-4.897l11.209 11.209A7.946 7.946 0 0 1 12 20c-4.411 0-8-3.589-8-8zm14.312 4.897L7.103 5.688A7.948 7.948 0 0 1 12 4c4.411 0 8 3.589 8 8a7.954 7.954 0 0 1-1.688 4.897z"
          ></path>
        </svg>
        <div class="text-red-500">Block Michael</div>
      </div>
      <div class="flex items-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #ef4444; transform: ; msfilter: "
        >
          <path
            d="M16.278 2.231a1.001 1.001 0 0 0-.64-.231H5a2 2 0 0 0-2 2v7.21a2 2 0 0 0 1.779 1.987L12 14v6a2 2 0 0 0 4 0V8l3.03 1.212a2.001 2.001 0 0 0 2.641-1.225l.113-.34a.998.998 0 0 0-.309-1.084l-5.197-4.332z"
          ></path>
        </svg>
        <div class="text-red-500">Report Michael</div>
      </div>
    </div>
    <div class="shadow bg-white px-4 py-2">
      <div class="flex items-center space-x-4 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <div>Delete chat</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapState({
      selectedMessage: (state) => state.selectedMessage
    })
  }
};
</script>