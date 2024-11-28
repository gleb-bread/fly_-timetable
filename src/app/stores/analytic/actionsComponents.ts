import * as Services from "@/entities/services";
import { initStateComponents } from "./stateComponents";
import * as StoreTypes from "./types";

export const initActionsComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const setAnalyticType = function (type: StoreTypes.AnalyticTypes) {
    state.analyticType.value = type;
  };

  const setAnalyticTime = function (time: StoreTypes.AnalyticTimes) {
    state.analyticTime.value = time;
  };

  return { setAnalyticType, setAnalyticTime };
};
