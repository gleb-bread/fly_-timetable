<script lang="ts" setup>
import type { Props } from "../props";
import { initComputed } from "./computed";
import { computed } from "vue";
import { useCartStore } from "@/app/stores/cart";

const props = defineProps<Props>();
const cartStore = useCartStore();
const { getCart } = initComputed();
const cart = computed(() => getCart.value(props.cartId));

const addCount = function () {
  cart.value.count++;
  cartStore.store.update(cart.value);
};

const minCount = function () {
  cart.value.count--;
  if (cart.value.count) {
    cartStore.store.update(cart.value);
  } else {
    cartStore.store.deleteCart(cart.value);
  }
};
</script>

<template>
  <td class="text-end pa-0">
    <div class="d-flex text-black w-100 justify-center">
      <div class="text-center w-100">
        <VIcon @click.stop="minCount" class="cursor-pointer"> mdi-minus </VIcon>
      </div>
      <div class="text-center w-100">{{ cart.count }}</div>
      <div class="w-100 text-center">
        <VIcon @click.stop="addCount" class="cursor-pointer">mdi-plus</VIcon>
      </div>
    </div>
  </td>
</template>
