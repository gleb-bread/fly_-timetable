<script lang="ts" setup>
import { useAnalyticStore } from "@/app/stores/analytic";
import * as AnalyticStoreTypes from "@/app/stores/analytic/types";
import { computed } from "vue";
import { Lang } from "@/app/lang";

const analyticStore = useAnalyticStore();
const WORDS = new Lang().WORDS;

const analticTimes = computed(() => analyticStore.components.getAnalyticTimes);

const getAnalyticTime = computed({
  get() {
    return analyticStore.components.getAnalyticTime;
  },

  set(v: AnalyticStoreTypes.AnalyticTimes) {
    analyticStore.components.setAnalyticTime(v);
  },
});

const getDayAnalytic = function () {
  analyticStore.store.getDayAnalytic();
};

const getMounthAnalytic = function () {
  analyticStore.store.getMonthAnalytic();
};

const getYearAnalytic = function () {
  analyticStore.store.getYearAnalytic();
};

const loadAnalyticByTime = function (v: AnalyticStoreTypes.AnalyticTimes) {
  switch (v) {
    case "Day": {
      getDayAnalytic();
      break;
    }

    case "Mounth": {
      getMounthAnalytic();
      break;
    }

    case "Year": {
      getYearAnalytic();
      break;
    }
  }
};

const getLabelByTypeKey = function (v: AnalyticStoreTypes.AnalyticTimes) {
  switch (v) {
    case "Day": {
      return WORDS.ANALYTIC.DAY;
    }

    case "Mounth": {
      return WORDS.ANALYTIC.MOUNTH;
    }

    case "Year": {
      return WORDS.ANALYTIC.YEAR;
    }

    default: {
      return WORDS.ANALYTIC.MOUNTH;
    }
  }
};

const getColorByKey = computed(() => (v: AnalyticStoreTypes.AnalyticTimes) => {
  return getAnalyticTime.value === v ? "error" : "primary";
});

const setSelectTime = function (time: AnalyticStoreTypes.AnalyticTimes) {
  loadAnalyticByTime(time);
  getAnalyticTime.value = time;
};
</script>

<template>
  <div class="w-100 d-flex justify-center">
    <div class="w-25 d-flex justify-space-between">
      <template v-for="time in analticTimes">
        <VChip
          class="cursor-pointer"
          @click.stop="setSelectTime(time)"
          :color="getColorByKey(time)"
        >
          {{ getLabelByTypeKey(time) }}
        </VChip>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.w-25 {
  width: 25%;
}
</style>
