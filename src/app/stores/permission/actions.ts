import * as Services from "@/entities/services";
import { initState } from "./state";
import { useFilterStore } from "../filter";
import * as Models from "@/entities/models";

export const initActions = function (state: ReturnType<typeof initState>) {
  const __init__ = async function () {
    await getPermissions();
  };

  const getPermissions = async function () {
    const service = new Services.Permission();

    const response = await service.getAll();

    if (response.result) {
      state.permissions.value = response.data;
    }
  };

  return { __init__, getPermissions };
};
