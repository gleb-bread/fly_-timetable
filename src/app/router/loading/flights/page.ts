import { useFlightStore } from "@/app/stores/flights";

export const __init__ = async function () {
  const flightStore = useFlightStore();
  await flightStore.store.__init__();
};
