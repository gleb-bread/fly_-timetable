import { Helper } from "@/shared/helpers";
import * as Models from "@/entities/models";
import { ref } from "vue";
import * as Types from "@/shared/types";

export const initState = function () {
  const flights = ref<Types.Objects.NumberObject<Models.Flight>>({});

  return { flights };
};
