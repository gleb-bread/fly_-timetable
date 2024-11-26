<script lang="ts" setup>
import { useCartStore } from "@/app/stores/cart";
import { computed } from "vue";

const cartStore = useCartStore();

const hasCount = computed(() => !!cartStore.components.getCount);
</script>

<template>
  <v-badge :model-value="hasCount" color="error" dot>
    <v-icon @click="$HELPER.RouterAPI.redirect('CART')" class="cursor-pointer">
      mdi-cart
    </v-icon>
  </v-badge>
</template>
