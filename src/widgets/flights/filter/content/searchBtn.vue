<script lang="ts" setup>
import { useSettingsStore } from "@/app/stores/settings";
import { computed } from "vue";
import { useFilterStore } from "@/app/stores/filter";

const settingsStore = useSettingsStore();
const filterStore = useFilterStore();

const isMobile = computed(() => settingsStore.isMobile);

const activeFilters = function () {
  filterStore.activeFilters();
};
</script>

<template>
  <div
    class="py-2"
    :class="{
      'px-6': !isMobile,
    }"
  >
    <VBtn
      @click.stop="activeFilters"
      :density="'compact'"
      class="w-100"
      text="Применить"
      color="primary"
    >
    </VBtn>
  </div>
</template>
