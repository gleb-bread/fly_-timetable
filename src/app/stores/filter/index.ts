import { defineStore } from "pinia";
import { initState } from "./state";
import { STORES } from "../stores.name.enum";
import { initGetters } from "./getters";
import { initActions } from "./actions";

export const useFilterStore = defineStore(STORES.FILTER_STORE, () => {
  const state = initState();

  const Getters = initGetters(state);
  const Actions = initActions(state);

  return {
    ...Getters,
    ...Actions,
    ...state,
  };
});
