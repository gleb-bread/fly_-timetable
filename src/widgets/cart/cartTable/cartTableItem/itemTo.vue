<script lang="ts" setup>
import type { Props } from "../props";
import { initComputed } from "./computed";
import { computed } from "vue";
import defaultText from "@/widgets/text/defaultText.vue";

const props = defineProps<Props>();
const { getCart } = initComputed();
const cart = computed(() => getCart.value(props.cartId));
</script>

<template>
  <td>
    <defaultText>
      {{ cart.flight.destination }}
    </defaultText>
  </td>
</template>
