<script lang="ts" setup>
import type { Props } from "../props";
import defaultText from "@/widgets/text/defaultText.vue";
import defaultTextWithLabel from "@/widgets/text/defaultTextWithLabel.vue";
import { initComputed } from "./initComputed";

const props = defineProps<Props>();
const { getFlight } = initComputed();
</script>

<template>
  <td>
    <defaultTextWithLabel>
      <template #label> {{ $WORDS.FLIGHTS.FROM }}: </template>
      {{ getFlight(props.itemId).departure_from }}
    </defaultTextWithLabel>
    <br />
    <default-text>
      {{ getFlight(props.itemId).departure_time }}
    </default-text>
  </td>
</template>
