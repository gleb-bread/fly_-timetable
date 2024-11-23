<script lang="ts" setup>
import { ComputedAPI } from "@/shared/computed";
import { computed } from "vue";

const { getModelTextValue, setModelTextValue, getLabel } =
  ComputedAPI.Filter.initComputed();

const getModelValue = computed(() => getModelTextValue.value("q"));

const setModelValue = function (v: string) {
  setModelTextValue("q", v);
};
</script>

<template>
  <div class="px-6">
    <SearchFieldFlights
      :model-value="getModelValue"
      @update:model-value="setModelValue"
      :label="getLabel('q')"
    >
      <template #append-inner>
        <div class="cursor-pointer">
          <VIcon>mdi-magnify</VIcon>
        </div>
      </template>
    </SearchFieldFlights>
  </div>
</template>
