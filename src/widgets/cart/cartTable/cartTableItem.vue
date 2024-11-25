<script lang="ts" setup>
import type { Props } from "./props";
import itemType from "./cartTableItem/itemType.vue";
import itemTotal from "./cartTableItem/itemTotal.vue";
import itemTo from "./cartTableItem/itemTo.vue";
import itemPrice from "./cartTableItem/itemPrice.vue";
import itemFrom from "./cartTableItem/itemFrom.vue";
import itemDepartureDate from "./cartTableItem/itemDepartureDate.vue";
import itemCount from "./cartTableItem/itemCount.vue";
import itemDelete from "./cartTableItem/itemDelete.vue";

const props = defineProps<Props>();
</script>

<template>
  <tr>
    <itemType v-bind="props" />
    <itemFrom v-bind="props" />
    <itemTo v-bind="props" />
    <itemDepartureDate v-bind="props" />
    <itemPrice v-bind="props" />
    <itemCount v-bind="props" />
    <itemTotal v-bind="props" />
    <itemDelete v-bind="props" />
  </tr>
</template>
