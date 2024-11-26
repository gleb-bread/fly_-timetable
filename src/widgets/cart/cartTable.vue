<script lang="ts" setup>
import { computed } from "vue";
import defaultTable from "../tables/defaultTable/defaultTable.vue";
import { useCartStore } from "@/app/stores/cart";
import cartTableItem from "./cartTable/cartTableItem.vue";
import defaultText from "../text/defaultText.vue";
import { Lang } from "@/app/lang";
import cartTableTotal from "./cartTable/cartTableTotal.vue";
import cartCreateApplication from "./cartTable/cartCreateApplication.vue";

const WORDS = new Lang().WORDS;

const headers = [
  WORDS.CART.TITLE.TYPE,
  WORDS.CART.TITLE.FROM,
  WORDS.CART.TITLE.TO,
  WORDS.CART.TITLE.DEPARTURE_TIME,
  WORDS.CART.TITLE.PRICE,
  WORDS.CART.TITLE.COUNT,
  WORDS.CART.TITLE.TOTAL,
];

const UntypOptions = {
  [WORDS.CART.TITLE.PRICE]: {
    WIDTH: "100px",
    TEXT_ALIGN: "text-end",
  },
  [WORDS.CART.TITLE.TOTAL]: {
    WIDTH: "100px",
    TEXT_ALIGN: "text-end",
  },
  [WORDS.CART.TITLE.COUNT]: {
    WIDTH: "100px",
    TEXT_ALIGN: "text-center",
  },
};

const cartStore = useCartStore();

const items = computed(() => cartStore.components.getGenericList);
</script>

<template>
  <defaultTable
    :header-items="headers"
    :bg-color="'transparent'"
    :items="items"
  >
    <template #headerItem="{ item }">
      <td
        :style="{ width: UntypOptions[item]?.WIDTH }"
        :class="UntypOptions[item]?.TEXT_ALIGN"
      >
        <defaultText class="">{{ item }}</defaultText>
      </td>
    </template>

    <template #item="{ item }">
      <v-hover>
        <template #default="{ props, isHovering }">
          <cartTableItem
            :is-hovering="isHovering"
            v-bind="props"
            :cart-id="item"
          />
        </template>
      </v-hover>
    </template>

    <cartTableTotal />
    <cartCreateApplication />
  </defaultTable>
</template>
