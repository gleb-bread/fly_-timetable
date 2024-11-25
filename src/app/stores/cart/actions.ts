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

export const initActions = function (
  state: ReturnType<typeof initState>,
  stateComponents: ReturnType<typeof initStateComponents>
) {
  const actionsComponents = initActionsComponents(stateComponents);

  const __init__ = async function () {
    const service = new Services.Cart();
    const filterStore = useFilterStore();
    const filters = filterStore.getFilters;

    const response = await service.getAll();

    if (response.result) {
      state.carts.value = response.data.entities;
      actionsComponents.setGenericList(response.data.genericList);
    }
  };

  const create = async function (flightId: number) {
    const userStore = useUserStore();
    const userId = userStore.state.getUserInfo.id;
    const service = new Services.Cart();
    const flightStore = useFlightStore();

    state.newCart.value.user_id = userId;
    state.newCart.value.flight_id = flightId;
    state.newCart.value.count = 1;

    const response = await service.create(state.newCart.value);

    if (response.result) {
      state.carts.value[response.data.id] = response.data;
      actionsComponents.pushInGenericList(response.data.id);
      flightStore.store.addCartInFlight(response.data);
    }
  };

  const update = async function (cart: Models.Cart) {
    const WORDS = new Lang().WORDS;

    const service = new Services.Cart();

    const response = await service.update(cart);

    if (!response.result) {
      Helper.MessageAPI.addMessage({
        result: false,
        message: WORDS.ERRORS_MESSAGES.UNKNOWN,
      });
    }
  };

  const deleteCart = async function (cart: Models.Cart) {
    const WORDS = new Lang().WORDS;

    const service = new Services.Cart();

    const response = await service.delete(cart);

    if (response.result) {
      delete state.carts.value[cart.id];
      stateComponents.genericList.value =
        stateComponents.genericList.value.filter((id) => id != cart.id);
    } else {
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
    deleteCart,
  };
};
