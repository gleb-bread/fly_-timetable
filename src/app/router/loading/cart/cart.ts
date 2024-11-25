import { useCartStore } from "@/app/stores/cart";
import { useFlightTypeStore } from "@/app/stores/flighstType";

export const __init__ = async function () {
  const cartStore = useCartStore();
  const flightTypeStore = useFlightTypeStore();

  await cartStore.store.__init__();
  await flightTypeStore.__init__();
};
