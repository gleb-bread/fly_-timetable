import { Helper } from "@/shared/helpers";
import * as Models from "@/entities/models";
import { ref } from "vue";
import * as Types from "@/shared/types";
import * as StoreTypes from "./types";
import * as StoreTemplates from "./template";

export const initStateComponents = function () {
  const analyticType = ref<StoreTypes.AnalyticTypes>("Area");
  const analyticTypes = ref(StoreTemplates.getAnalyticTypes());

  const analyticTimes = ref(StoreTemplates.getAnalyticTimes());
  const analyticTime = ref<StoreTypes.AnalyticTimes>("Mounth");

  return { analyticType, analyticTypes, analyticTimes, analyticTime };
};
