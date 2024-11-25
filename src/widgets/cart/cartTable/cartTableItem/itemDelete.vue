<script lang="ts" setup>
import { useCartStore } from "@/app/stores/cart";
import type { Props } from "../props";
import { initComputed } from "./computed";
import { computed } from "vue";

const cartStore = useCartStore();
const props = defineProps<Props>();
const { getCart } = initComputed();
const cart = computed(() => getCart.value(props.cartId));

const deleteCart = function () {
  cartStore.store.deleteCart(cart.value);
};

const hovering = computed(() => props.isHovering);
</script>

<template>
  <div>
    <v-fade-transition>
      <template v-if="hovering">
        <VIcon
          class="text-black cursor-pointer mt-2 ml-2"
          @click.stop="deleteCart"
        >
          mdi-close
        </VIcon>
      </template>
      <template v-else>
        <v-responsive width="29"></v-responsive>
      </template>
    </v-fade-transition>
  </div>
</template>
