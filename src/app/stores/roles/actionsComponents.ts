import { initStateComponents } from "./stateComponents";
import * as Models from "@/entities/models";
import * as Types from "@/shared/types";

export const initActionsComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const setSelectUser = function (id: number) {
    state.selectUser.value = id;
  };

  return { setSelectUser };
};
