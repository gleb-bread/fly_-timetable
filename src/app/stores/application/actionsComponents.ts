import * as Services from "@/entities/services";
import { initStateComponents } from "./stateComponents";

export const initActionsComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const setGenericList = function (genericList: number[]) {
    state.genericList.value = genericList;
  };

  const pushInGenericList = function (id: number) {
    state.genericList.value.push(id);
  };

  return { setGenericList, pushInGenericList };
};
