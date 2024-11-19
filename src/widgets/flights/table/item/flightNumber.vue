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
    <default-text>
      {{ getFlight(props.itemId).flight_number }}
    </default-text>
  </td>
</template>
