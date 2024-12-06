import { initState } from "./state";
import { Helper } from "@/shared/helpers";
import { computed } from "vue";

export const initGetters = function (state: ReturnType<typeof initState>) {
  const getFlights = computed(() => state.flights.value);

  const getNewFlight = computed(() => state.newFlight.value);

  return { getFlights, getNewFlight };
};
