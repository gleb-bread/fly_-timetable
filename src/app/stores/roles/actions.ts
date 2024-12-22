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
import * as Types from "@/shared/types";
import type { UnwrapRef } from "vue";

export const initActions = function (
  state: ReturnType<typeof initState>,
  stateComponents: ReturnType<typeof initStateComponents>
) {
  const __init__ = async function () {
    const service = new Services.Roles();

    const response = await service.getAll();

    if (response.result) {
      state.roles.value = response.data.entities;
      stateComponents.genericList.value = response.data.genericList;
    } else {
      new Errors.RequestError(response);
    }
  };

  const create = async function (data: Types.Roles.Entity.CreateData) {
    const service = new Services.Roles();

    const response = await service.create(data);

    if (response.result) {
      state.roles.value[response.data.id] = response.data;
      stateComponents.genericList.value.unshift(response.data.id);
    } else {
      new Errors.RequestError(response);
    }
  };

  const Delete = async function (
    role: Models.UserRole | UnwrapRef<Models.UserRole>
  ) {
    const service = new Services.Roles();

    const WORDS = new Lang().WORDS;

    const response = await service.delete(role);

    if (response.result) {
      if (response.data) {
        delete state.roles.value[role.id];

        const index = stateComponents.genericList.value.findIndex(
          (id) => id === role.id
        );

        if (index !== -1) stateComponents.genericList.value.splice(index, 1);

        Helper.MessageAPI.addMessage({
          message: WORDS.MESSAGE.SUCCESS,
          result: true,
        });
      } else {
        Helper.MessageAPI.addMessage({
          message: WORDS.MESSAGE.ERROR,
          result: false,
        });
      }
    } else {
      new Errors.RequestError(response);
    }
  };

  return {
    __init__,
    Delete,
    create,
  };
};
