<script lang="ts" setup>
import { computed } from "vue";
import defaultTable from "../tables/defaultTable/defaultTable.vue";
import { useCartStore } from "@/app/stores/cart";

const cartStore = useCartStore();

const items = computed(() => cartStore.components.getGenericList);
</script>

<template>
  <defaultTable :items="items"> </defaultTable>
</template>
