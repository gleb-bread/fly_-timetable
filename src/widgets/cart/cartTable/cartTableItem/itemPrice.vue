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
  <td
    class="text-end"
    :style="{
      maxWidth: $STYLE_VARIBLES.CART.ITEM_COUNT_WIDTH,
      minWidth: $STYLE_VARIBLES.CART.ITEM_COUNT_WIDTH,
    }"
  >
    <defaultText>
      {{
        $HELPER.FormaterAPI.convertMoneyTypeWithoutRuble(
          String(cart?.flight?.price ?? 0)
        )
      }}
    </defaultText>
  </td>
</template>
