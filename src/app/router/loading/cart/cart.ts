import { useCartStore } from "@/app/stores/cart";

export const __init__ = async function () {
  const cartStore = useCartStore();

  await cartStore.store.__init__();
};
