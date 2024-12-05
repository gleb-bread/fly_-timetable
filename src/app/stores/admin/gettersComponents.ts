import { initStateComponents } from "./stateComponents";
import { Helper } from "@/shared/helpers";
import { computed } from "vue";

export const initGettersComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const getView = computed(() => {
    return state.view.value;
  });

  const getToolMenu = computed(() => {
    return state.toolMenu.value;
  });

  return { getView, getToolMenu };
};
