import * as Services from "@/entities/services";
import { initState } from "./state";

export const initActions = function (state: ReturnType<typeof initState>) {
  const __init__ = async function () {
    const service = new Services.FlightType();

    const response = await service.getAll();

    if (response.result) {
      state.flightTypes.value = response.data.entities;
    }
  };

  return {
    __init__,
  };
};
