import { initStateComponents } from "./stateComponents";
import { Helper } from "@/shared/helpers";
import { computed } from "vue";

export const initGettersComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const getAnalyticType = computed(() => state.analyticType.value);

  const getAnalyticTypes = computed(() => {
    return state.analyticTypes.value;
  });

  const getAnalyticTimes = computed(() => {
    return state.analyticTimes.value;
  });

  const getAnalyticTime = computed(() => {
    return state.analyticTime.value;
  });

  return {
    getAnalyticType,
    getAnalyticTypes,
    getAnalyticTimes,
    getAnalyticTime,
  };
};
