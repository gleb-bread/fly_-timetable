<script lang="ts" setup>
import { useFlightStore } from "@/app/stores/flights";
import { computed } from "vue";
import defaultTable from "@/widgets/tables/defaultTable/defaultTable.vue";
import flightTableItem from "./flightTableItem.vue";

const flightStore = useFlightStore();

const getGenericList = computed(() => flightStore.components.getGenericList);
</script>

<template>
  <default-table :scroll="false" :items="getGenericList">
    <template #item="{ item }">
      <flightTableItem :item-id="item" />
    </template>
  </default-table>
</template>
