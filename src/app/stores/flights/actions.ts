import * as Services from "@/entities/services";
import { initActionsComponents } from "./actionsComponents";
import { initStateComponents } from "./stateComponents";
import { initState } from "./state";
import { useFilterStore } from "../filter";
import * as Models from "@/entities/models";

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

  return {
    __init__,
    addCartInFlight,
  };
};
