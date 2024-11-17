import { computed } from "vue";
import { initState } from "./state";

export const initGetters = function (state: ReturnType<typeof initState>) {
  const getMessages = computed(() => state.messages.value);

  return { getMessages };
};
