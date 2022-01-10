<template>
  <div class="archieved__messages flex flex-col items-center h-full justify-center">
    <img :src="archieved" class="h-36" alt="Archieved messages">
    <div class="text-xs text-gray-400">No archived chats</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      archieved: require("../../../assets/archieved.png")
    };
  },
};
</script>