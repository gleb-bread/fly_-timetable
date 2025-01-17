import { defineStore } from "pinia";
import { initState } from "./state";
import { STORES } from "../stores.name.enum";
import { initGetters } from "./getters";
import { initGettersComponents } from "./gettersComponents";
import { initActionsComponents } from "./actionsComponents";
import { initActions } from "./actions";
import { initStateComponents } from "./stateComponents";

export const useCartStore = defineStore(STORES.CART_STORE, () => {
  const state = initState();
  const stateComponents = initStateComponents();

  const Getters = initGetters(state);
  const GettersComponents = initGettersComponents(stateComponents);
  const Actions = initActions(state, stateComponents);
  const ActionsComponents = initActionsComponents(stateComponents);

  return {
    store: {
      ...Actions,
      ...Getters,
    },
    components: {
      ...GettersComponents,
      ...ActionsComponents,
    },
  };
});
