<script lang="ts" setup>
import defaultMessage from "./defaultMessage.vue";
import { useMessageStore } from "@/app/stores/message";
import { computed } from "vue";

const messageStore = useMessageStore();

const getMessages = computed(() => messageStore.getMessages);
</script>

<template>
  <template v-for="(message, index) in getMessages">
    <default-message :id-message="index" :message="message"></default-message>
  </template>
</template>
