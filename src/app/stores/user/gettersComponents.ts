import { computed } from "vue";
import { initStateComponents } from "./stateComponents";

export const initGettersComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const getErrorsReg = computed(() => state.errorsReg.value);
  const getErrorsLogin = computed(() => state.errorsLogin.value);

  return { getErrorsReg, getErrorsLogin };
};
