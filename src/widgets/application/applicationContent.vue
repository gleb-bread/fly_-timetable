<script lang="ts" setup>
import { computed } from "vue";
import applicationWrapper from "./applicationWrapper.vue";
import { useApplicationStore } from "@/app/stores/application";
import applicationItem from "./card/applicationItem.vue";

const applicationStore = useApplicationStore();

const getGenericList = computed(
  () => applicationStore.components.getGenericList
);
</script>

<template>
  <applicationWrapper>
    <template v-for="id in getGenericList">
      <applicationItem :id="id" />
    </template>
  </applicationWrapper>
</template>
