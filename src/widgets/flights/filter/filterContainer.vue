<script lang="ts" setup>
import filterWrapper from "./content/filterWrapper.vue";
import filterContainer from "@/widgets/filter/filterContainer.vue";
import { useSettingsStore } from "@/app/stores/settings";
import searchField from "./content/searchField.vue";
import { computed } from "vue";
import searchBtn from "./content/searchBtn.vue";

import * as Types from "@/shared/types";

const settingsStore = useSettingsStore();

const isMobile = computed(() => settingsStore.isMobile);

const filters = computed<Types.FilterElement.FiltersList>(() => {
  if (isMobile.value) {
    return [
      [{ component: "text-field", filterKey: "q", variant: "outlined" }],
      [
        {
          component: "date-field",
          filterKey: "departure_time",
          variant: "outlined",
        },
        {
          component: "date-field",
          filterKey: "arrival_time",
          variant: "outlined",
        },
      ],
    ];
  } else {
    return [
      [
        {
          component: "date-field",
          filterKey: "departure_time",
          variant: "outlined",
        },
        {
          component: "date-field",
          filterKey: "arrival_time",
          variant: "outlined",
        },
      ],
    ];
  }
});
</script>

<template>
  <filterWrapper>
    <template v-if="!isMobile">
      <searchField />
    </template>

    <filterContainer :filters="filters"></filterContainer>

    <searchBtn></searchBtn>
  </filterWrapper>
</template>
