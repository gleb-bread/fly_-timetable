<script lang="ts" setup>
import { useSettingsStore } from "@/app/stores/settings";
import { computed } from "vue";

const settingsStore = useSettingsStore();

const isMobile = computed(() => settingsStore.isMobile);
</script>

<template>
  <div
    class="py-2"
    :class="{
      'px-6': !isMobile,
    }"
  >
    <VBtn :density="'compact'" class="w-100" text="Применить" color="primary">
    </VBtn>
  </div>
</template>
