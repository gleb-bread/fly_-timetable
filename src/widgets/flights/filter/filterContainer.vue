<script lang="ts" setup>
import filterWrapper from "./content/filterWrapper.vue";
import filterContainer from "@/widgets/filter/filterContainer.vue";

import * as Types from "@/shared/types";

const filters: Types.FilterElement.FiltersList = [
  [{ component: "text-field", filterKey: "q" }],
  [
    { component: "date-field", filterKey: "departure_time" },
    { component: "date-field", filterKey: "arrival_time" },
  ],
];
</script>

<template>
  <filterWrapper>
    <filterContainer :filters="filters"></filterContainer>
  </filterWrapper>
</template>
