import * as SystemAuthAPI from "@/shared/system/auth";
import * as SystemLangAPI from "@/shared/system/lang";
import { useUserStore } from "@/app/stores/user";
import { useFilterStore } from "@/app/stores/filter";
import { useCartStore } from "@/app/stores/cart";

export const __start__ = async function () {
  const userStore = useUserStore();
  const filterStore = useFilterStore();
  const cartStore = useCartStore();

  filterStore.setFiltersFromURL();
  await SystemAuthAPI.checkAuth();
  SystemLangAPI.getLang();
  await cartStore.store.__init__();

  if (userStore.state.getAuthToken) {
    await userStore.state.setUserInfo();
  }
};
