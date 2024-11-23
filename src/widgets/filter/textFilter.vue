<script lang="ts" setup>
import { useFilterStore } from "@/app/stores/filter";
import type { TextFieldProps } from "./props";
import { initComputed } from "./computed";
import { computed } from "vue";

const props = defineProps<TextFieldProps>();
const { getFilters, getLabel } = initComputed();
const filterStore = useFilterStore();

const getModelValue = computed({
  get() {
    return String(getFilters.value[props.filterKey]);
  },

  set(value: string) {
    filterStore.setFilter({
      key: props.filterKey,
      value: value,
    });
  },
});
</script>

<template>
  <v-text-field
    variant="underlined"
    density="compact"
    :label="getLabel(filterKey)"
    v-model:model-value="getModelValue"
    no-resize
  >
  </v-text-field>
</template>

<style scoped lang="scss"></style>
