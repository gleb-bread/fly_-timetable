import { ObserverRequest } from "./core";
import { computed } from "vue";
import type { UnwrapRef } from "vue";

export const initDefaultLoadings = function (
  observer: UnwrapRef<ObserverRequest>
) {
  const getLoading = computed(() => observer.getLoadingByKey("loading"));
  const getUpdate = computed(() => observer.getLoadingByKey("update"));
  const getError = computed(() => observer.getErrorByKey("error"));
  const getErrorUpdate = computed(() => observer.getErrorByKey("errorUpdate"));

  return { getLoading, getUpdate, getError, getErrorUpdate };
};
