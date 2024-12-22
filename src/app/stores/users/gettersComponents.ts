import { computed } from "vue";
import { initStateComponents } from "./stateComponents";

export const initGettersComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const getGenericList = computed(() => state.genericList.value);

  return { getGenericList };
};
