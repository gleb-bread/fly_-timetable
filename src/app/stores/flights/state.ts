import { Helper } from "@/shared/helpers";
import * as Models from "@/entities/models";
import { ref } from "vue";
import * as Types from "@/shared/types";
import * as StoreTemplate from "./template";

export const initState = function () {
  const flights = ref<Types.Objects.NumberObject<Models.Flight>>({});
  const newFlight = ref(StoreTemplate.createNewFlight());

  return { flights, newFlight };
};
