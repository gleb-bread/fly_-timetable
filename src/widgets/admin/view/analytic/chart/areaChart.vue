<script lang="ts" setup>
import { Chart, Grid, Line } from "vue3-charts";
import { computed, ref } from "vue";
import { useAnalyticStore } from "@/app/stores/analytic";

const analyticStore = useAnalyticStore();

const data = computed(() => {
  return analyticStore.store.getAnalytic ?? [];
});

const direction = ref<"horizontal">("horizontal");
const margin = ref({
  left: 0,
  top: 20,
  right: 20,
  bottom: 0,
});
</script>

<template>
  <Chart
    :size="{ width: 1200, height: 420 }"
    :data="data"
    :margin="margin"
    :direction="direction"
  >
    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line
        :dataKeys="['title', 'total']"
        type="monotone"
        :lineStyle="{
          stroke: '#9f7aea',
        }"
      />
    </template>
  </Chart>
</template>
