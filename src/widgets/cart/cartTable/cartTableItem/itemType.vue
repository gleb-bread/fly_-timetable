<script lang="ts" setup>
import type { Props } from "../props";
import { initComputed } from "./computed";
import defaultText from "@/widgets/text/defaultText.vue";
import { computed } from "vue";

const props = defineProps<Props>();
const { getCart, getFlightTitleById } = initComputed();

const cart = computed(() => getCart.value(props.cartId));
</script>

<template>
  <td>
    <defaultText>
      {{ getFlightTitleById(cart?.flight?.flight_type_id ?? 0) }}
    </defaultText>
  </td>
</template>
