import { useFlightStore } from "@/app/stores/flights";
import { computed } from "vue";

export const initComputed = function () {
  const flightStore = useFlightStore();

  const getFlight = computed(() => (id: number) => {
    return flightStore.store.getFlights[id];
  });

  return { getFlight };
};
