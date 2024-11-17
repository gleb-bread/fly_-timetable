<script lang="ts" setup>
import { computed, ref } from "vue";
import type { Props } from "./props";
import { useMessageStore } from "@/app/stores/message";

const props = defineProps<Props>();
const model = ref(true);
const messageStore = useMessageStore();

const getModel = computed({
  get() {
    return model.value;
  },

  set(v: boolean) {
    model.value = v;
    messageStore.removeMessage(props.idMessage);
  },
});
</script>

<template>
  <v-snackbar
    v-model="getModel"
    :color="message.result ? 'green' : 'red'"
    :location="'right top'"
    :timeout="3000"
  >
    {{ message.message }}
    <template #actions>
      <v-btn
        color="white"
        icon="mdi-close"
        variant="text"
        @click="getModel = false"
      >
      </v-btn>
    </template>
  </v-snackbar>
</template>
