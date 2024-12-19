import * as Services from "@/entities/services";
import { initActionsComponents } from "./actionsComponents";
import { initStateComponents } from "./stateComponents";
import { initState } from "./state";
import { useFilterStore } from "../filter";
import { Helper } from "@/shared/helpers";
import * as Models from "@/entities/models";
import { Lang } from "@/app/lang";
import * as StoreTemplates from "./template";
import * as Errors from "@/shared/error";

export const initActions = function (
  state: ReturnType<typeof initState>,
  stateComponents: ReturnType<typeof initStateComponents>
) {
  const actionsComponents = initActionsComponents(stateComponents);

  const __init__ = async function () {
    const service = new Services.Flight();
    const filterStore = useFilterStore();
    const filters = filterStore.getFilters;

    const response = await service.getFlights(filters);

    if (response.result) {
      state.flights.value = response.data.entities;
      actionsComponents.setGenericList(response.data.genericList);
    }
  };

  const addCartInFlight = function (cart: Models.Cart) {
    const flightId = cart.flight_id;

    if (!state.flights.value[flightId]) return;

    state.flights.value[flightId].cart.push(cart);
  };

  const create = async function () {
    const service = new Services.Flight();
    const flight = state.newFlight.value;
    const WORDS = new Lang().WORDS;

    const response = await service.create(flight);

    if (response.result) {
      const newFlight = response.data;
      state.flights.value[newFlight.id] = newFlight;
      stateComponents.genericList.value.unshift(newFlight.id);
      state.newFlight.value = StoreTemplates.createNewFlight();
      Helper.MessageAPI.addMessage({
        message: WORDS.MESSAGE.SUCCESS,
        result: true,
      });
    } else {
      new Errors.RequestError(response).message();
    }
  };

  const update = async function (id: number) {
    const service = new Services.Flight();
    const flight = state.flights.value[id];

    const response = await service.update(flight);

    if (!response.result) {
      new Errors.RequestError(response).message();
    }
  };

  const Delete = async function (id: number) {
    const service = new Services.Flight();
    const flight = state.flights.value[id];
    const WORDS = new Lang().WORDS;

    const response = await service.delete(flight);

    if (response.result) {
      if (response.data) {
        delete state.flights.value[flight.id];

        const index = stateComponents.genericList.value.findIndex(
          (item) => item === flight.id
        );

        stateComponents.genericList.value.splice(index, 1);

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
      new Errors.RequestError(response).message();
    }
  };

  return {
    __init__,
    addCartInFlight,
    create,
    update,
    Delete,
  };
};
