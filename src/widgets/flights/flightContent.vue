<script lang="ts" setup>
import flightTable from "./table/flightTable.vue";
import filterContainer from "./filter/filterContainer.vue";
import { useSettingsStore } from "@/app/stores/settings";

const settingsStore = useSettingsStore();
const height = settingsStore.getMaxHeight;
</script>

<template>
  <VResponsive class="overflow-auto" :height="height">
    <filterContainer></filterContainer>
    <flight-table></flight-table>
  </VResponsive>
</template>
