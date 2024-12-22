import { computed } from "vue";
import { initStateComponents } from "./stateComponents";

export const initGettersComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const getGenericList = computed(() => state.genericList.value);

  const getSelectUser = computed(() => state.selectUser.value);

  return { getGenericList, getSelectUser };
};
