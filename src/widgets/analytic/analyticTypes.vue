<script lang="ts" setup>
import { useAnalyticStore } from "@/app/stores/analytic";
import { computed } from "vue";
import * as AnalyticStoreTypes from "@/app/stores/analytic/types";
import { Lang } from "@/app/lang";

const analyticStore = useAnalyticStore();
const analyticTypes = computed(() => {
  return analyticStore.components.getAnalyticTypes;
});
const WORDS = new Lang().WORDS;

const getSelectType = computed({
  get() {
    return analyticStore.components.getAnalyticType;
  },

  set(v: AnalyticStoreTypes.AnalyticTypes) {
    analyticStore.components.setAnalyticType(v);
  },
});

const getLabelByTypeKey = function (v: AnalyticStoreTypes.AnalyticTypes) {
  switch (v) {
    case "Area": {
      return WORDS.ANALYTIC.AREA;
    }

    case "Pie": {
      return WORDS.ANALYTIC.CHAR;
    }

    default: {
      return WORDS.ANALYTIC.AREA;
    }
  }
};
</script>

<template>
  <v-radio-group v-model="getSelectType" inline>
    <div class="w-100 d-flex justify-center">
      <template v-for="type in analyticTypes">
        <div class="bg-white rounded-pill mr-2 pr-3 pt-1">
          <v-radio :label="getLabelByTypeKey(type)" :value="type"> </v-radio>
        </div>
      </template>
    </div>
  </v-radio-group>
</template>
