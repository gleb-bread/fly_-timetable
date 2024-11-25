import { useFlightTypeStore } from "@/app/stores/flighstType";
import { useCartStore } from "@/app/stores/cart";
import { computed } from "vue";

export const initComputed = function () {
  const flightTypeStore = useFlightTypeStore();
  const cartStore = useCartStore();

  const getCart = computed(() => (id: number) => {
    return cartStore.store.getCarts[id];
  });

  const getFlightTitleById = computed(() => (id: number) => {
    return flightTypeStore.getFlightTypes[id]?.type;
  });

  return { getFlightTitleById, getCart };
};
