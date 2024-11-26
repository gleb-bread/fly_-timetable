import * as Models from "@/entities/models";
import { ref } from "vue";
import * as Types from "@/shared/types";

export const initState = function () {
  const applications = ref<Types.Objects.NumberObject<Models.Application[]>>(
    {}
  );

  return { applications };
};