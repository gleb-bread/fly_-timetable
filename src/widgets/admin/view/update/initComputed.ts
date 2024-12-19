import { useFlightStore } from "@/app/stores/flights";
import { computed } from "vue";
import { useFlightTypeStore } from "@/app/stores/flighstType";

export const initComputed = function () {
  const flightStore = useFlightStore();
  const flightTypeStore = useFlightTypeStore();

  const getFlight = computed(() => (id: number) => {
    return flightStore.store.getFlights[id];
  });

  const getFlightTypes = computed(() =>
    Object.values(flightTypeStore.getFlightTypes)
  );

  return { getFlight, getFlightTypes };
};
