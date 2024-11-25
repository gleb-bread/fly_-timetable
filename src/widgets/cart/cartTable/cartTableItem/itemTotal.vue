<script lang="ts" setup>
import type { Props } from "../props";
import { initComputed } from "./computed";
import { computed } from "vue";
import defaultText from "@/widgets/text/defaultText.vue";

const props = defineProps<Props>();
const { getCart } = initComputed();

const cart = computed(() => getCart.value(props.cartId));

const getTotal = computed(() =>
  String((cart.value.count ?? 0) * (cart.value.flight.price ?? 0))
);
</script>

<template>
  <td class="text-end">
    <defaultText>
      {{ $HELPER.FormaterAPI.convertMoneyTypeWithoutRuble(getTotal) }}
    </defaultText>
  </td>
</template>
