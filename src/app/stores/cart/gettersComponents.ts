import { initStateComponents } from "./stateComponents";
import { Helper } from "@/shared/helpers";
import { computed } from "vue";

export const initGettersComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const getGenericList = computed(() => {
    return state.genericList.value;
  });

  const getCount = computed(() => {
    return state.genericList.value.length;
  });

  return { getGenericList, getCount };
};
