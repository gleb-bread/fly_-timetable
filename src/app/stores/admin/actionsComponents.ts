import * as Services from "@/entities/services";
import { initStateComponents } from "./stateComponents";
import * as StoreTypes from "./types";

export const initActionsComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const setView = function (view: StoreTypes.ViewTypes) {
    state.view.value = view;
  };

  return { setView };
};
