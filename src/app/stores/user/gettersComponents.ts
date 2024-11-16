import { computed } from "vue";
import { initStateComponents } from "./stateComponents";

export const initGettersComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const getErrors = computed(() => state.errors.value);

  return { getErrors };
};
