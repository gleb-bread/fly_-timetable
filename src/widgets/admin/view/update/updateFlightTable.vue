<script lang="ts" setup>
import { useFlightStore } from "@/app/stores/flights";
import { computed } from "vue";
import defaultTable from "@/widgets/tables/defaultTable/defaultTable.vue";
import flightTableItem from "./flightTableItem.vue";
import { useFlightTypeStore } from "@/app/stores/flighstType";

const flightStore = useFlightStore();
const flightTypeStore = useFlightTypeStore();

flightStore.store.__init__();
flightTypeStore.__init__();

const getGenericList = computed(() => flightStore.components.getGenericList);
</script>

<template>
  <default-table :scroll="false" :items="getGenericList">
    <template #item="{ item }">
      <v-hover>
        <template #default="{ props, isHovering }">
          <tr v-bind="props">
            <flight-table-item :is-hovering="isHovering" :item-id="item">
            </flight-table-item>
          </tr>
        </template>
      </v-hover>
    </template>
  </default-table>
</template>
