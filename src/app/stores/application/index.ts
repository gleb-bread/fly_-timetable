import { defineStore } from "pinia";
import { initState } from "./state";
import { STORES } from "../stores.name.enum";
import { initGetters } from "./getters";
import { initGettersComponents } from "./gettersComponents";
import { initActions } from "./actions";
import { initStateComponents } from "./stateComponents";

export const useApplicationStore = defineStore(STORES.APPLICATION_STORE, () => {
  const state = initState();
  const stateComponents = initStateComponents();

  const Getters = initGetters(state);
  const GettersComponents = initGettersComponents(stateComponents);
  const Actions = initActions(state, stateComponents);

  return {
    store: {
      ...Actions,
      ...Getters,
    },
    components: {
      ...GettersComponents,
    },
  };
});
