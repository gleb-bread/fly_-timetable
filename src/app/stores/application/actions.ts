import * as Services from "@/entities/services";
import { initActionsComponents } from "./actionsComponents";
import { initStateComponents } from "./stateComponents";
import { initState } from "./state";
import { useFilterStore } from "../filter";
import { useUserStore } from "../user";
import { useFlightStore } from "../flights";
import * as Models from "@/entities/models";
import { Helper } from "@/shared/helpers";
import { Lang } from "@/app/lang";
import { useCartStore } from "../cart";

export const initActions = function (
  state: ReturnType<typeof initState>,
  stateComponents: ReturnType<typeof initStateComponents>
) {
  const actionsComponents = initActionsComponents(stateComponents);

  const __init__ = async function () {
    const service = new Services.Application();
    const filterStore = useFilterStore();
    const filters = filterStore.getFilters;

    const response = await service.getAll();

    if (response.result) {
      state.applications.value = response.data.entities;
      actionsComponents.setGenericList(response.data.genericList);
    }
  };

  const create = async function () {
    const WORDS = new Lang().WORDS;

    const cartStore = useCartStore();

    const service = new Services.Application();

    const response = await service.create();

    if (response.result) {
      state.applications.value[response.data.id] = response.data;
      actionsComponents.pushInGenericList(response.data.id);
      cartStore.store.setCarts([]);
      cartStore.components.setGenericList([]);
    } else {
      Helper.MessageAPI.addMessage({
        result: false,
        message: WORDS.ERRORS_MESSAGES.UNKNOWN,
      });
    }
  };

  const update = async function (application: Models.Application) {
    const WORDS = new Lang().WORDS;

    const service = new Services.Application();

    const response = await service.update(application);

    if (!response.result) {
      Helper.MessageAPI.addMessage({
        result: false,
        message: WORDS.ERRORS_MESSAGES.UNKNOWN,
      });
    }
  };

  return {
    __init__,
    create,
    update,
  };
};
