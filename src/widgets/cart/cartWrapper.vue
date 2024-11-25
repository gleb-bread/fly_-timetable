<script lang="ts" setup>
import { useSettingsStore } from "@/app/stores/settings";
import { computed } from "vue";

const settingsStore = useSettingsStore();

const height = computed(() => settingsStore.getMaxHeight);
</script>

<template>
  <VResponsive :height="height">
    <v-container><slot></slot></v-container>
  </VResponsive>
</template>
