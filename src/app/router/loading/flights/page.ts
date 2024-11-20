import { useFlightStore } from "@/app/stores/flights";
import { useFlightTypeStore } from "@/app/stores/flighstType";

export const __init__ = async function () {
  //TODO нужно что то тут сделать
  const flightStore = useFlightStore();
  const flightTypeStore = useFlightTypeStore();

  await flightTypeStore.__init__();
  await flightStore.store.__init__();
};
