<script lang="ts" setup>
import type { Props } from "../props";
import { initComputed } from "./initComputed";
import { useCartStore } from "@/app/stores/cart";

const props = defineProps<Props>();
const cartStore = useCartStore();
const { getFlight } = initComputed();

const addFlightInCart = function () {
  const flightId = getFlight.value(props.itemId).id;
  cartStore.store.create(flightId);
};
</script>

<template>
  <td class="text-center">
    <v-fade-transition>
      <template v-if="isHovering">
        <div>
          <template v-if="getFlight(props.itemId).cart.length">
            <VIcon
              @click.stop="addFlightInCart"
              class="cursor-pointer"
              color="primary"
            >
              mdi-cart-check
            </VIcon>
          </template>
          <template v-else>
            <VIcon
              @click.stop="addFlightInCart"
              class="cursor-pointer"
              color="primary"
            >
              mdi-plus
            </VIcon>
          </template>
        </div>
      </template>
      <template v-else>
        <VResponsive width="21"></VResponsive>
      </template>
    </v-fade-transition>
  </td>
</template>
