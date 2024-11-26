import { useApplicationStore } from "@/app/stores/application";
import { useFlightTypeStore } from "@/app/stores/flighstType";

export const __init__ = async function () {
  const applicationStore = useApplicationStore();
  const flightTypeStore = useFlightTypeStore();

  await applicationStore.store.__init__();
  await flightTypeStore.__init__();
};
