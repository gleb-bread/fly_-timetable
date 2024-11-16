import { defineStore } from "pinia";
import { initState } from "./state";
import { initGetters } from "./getters";
import { initActions } from "./actions";
import { initStateComponents } from "./stateComponents";
import { initGettersComponents } from "./gettersComponents";
import { initActionsComponents } from "./actionsComponents";
import { STORES } from "../stores.name.enum";

export const useUserStore = defineStore(STORES.USER_STORE, () => {
  const state = initState();
  const stateComponents = initStateComponents();

  const Getters = initGetters(state);
  const GettersComponents = initGettersComponents(stateComponents);

  const Actions = initActions(state, stateComponents);
  const ActionsComponents = initActionsComponents(stateComponents);

  return {
    state: {
      ...Getters,
      ...Actions,
    },
    components: {
      ...GettersComponents,
      ...ActionsComponents.public,
    },
  };
});
