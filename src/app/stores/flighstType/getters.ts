import { initState } from "./state";
import { computed } from "vue";

export const initGetters = function (state: ReturnType<typeof initState>) {
  const getFlightTypes = computed(() => state.flightTypes.value);

  return { getFlightTypes };
};
