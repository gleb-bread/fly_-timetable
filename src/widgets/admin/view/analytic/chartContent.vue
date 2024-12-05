<script lang="ts" setup>
import { useAnalyticStore } from "@/app/stores/analytic";
import { computed } from "vue";
import areaChart from "./chart/areaChart.vue";

const analyticStore = useAnalyticStore();

const getAnalyticType = computed(
  () => analyticStore.components.getAnalyticType
);
</script>

<template>
  <div class="d-flex justify-center">
    <template v-if="getAnalyticType === 'Area'">
      <areaChart />
    </template>
  </div>
</template>
