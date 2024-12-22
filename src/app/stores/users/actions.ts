import { initState } from "./state";
import { initStateComponents } from "./stateComponents";
import type { Languages } from "@/shared/system/lang/type";
import * as UserTemplatesStore from "./template";
import { Helper } from "@/shared/helpers";
import * as Services from "@/entities/services";
import { useRouter } from "vue-router";
import { useMessageStore } from "../message";
import * as Models from "@/entities/models";
import * as Errors from "@/shared/error";
import { Lang } from "@/app/lang";

export const initActions = function (
  state: ReturnType<typeof initState>,
  stateComponents: ReturnType<typeof initStateComponents>
) {
  const __init__ = async function () {
    const service = new Services.Users();

    const response = await service.getAll();

    if (response.result) {
      state.users.value = response.data.entities;
      stateComponents.genericList.value = response.data.genericList;
    } else {
      new Errors.RequestError(response);
    }
  };

  return {
    __init__,
  };
};
