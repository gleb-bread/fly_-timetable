import * as Models from "@/entities/models";
import { ref } from "vue";
import * as Types from "@/shared/types";

export const initState = function () {
  const flightTypes = ref<Types.Objects.NumberObject<Models.FlightType>>({});

  return { flightTypes };
};
