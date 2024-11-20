<script lang="ts" setup>
import type { Props } from "../props";
import defaultText from "@/widgets/text/defaultText.vue";
import { useFlightTypeStore } from "@/app/stores/flighstType";
import { initComputed } from "./initComputed";
import { computed } from "vue";

const props = defineProps<Props>();
const flightTypeStore = useFlightTypeStore();
const { getFlight } = initComputed();

const getTitle = computed(
  () =>
    flightTypeStore.getFlightTypes[getFlight.value(props.itemId).flight_type_id]
      ?.type
);
</script>

<template>
  <td>
    <default-text>
      {{ getTitle }}
    </default-text>
  </td>
</template>
