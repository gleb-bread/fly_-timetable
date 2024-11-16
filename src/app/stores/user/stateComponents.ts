import { ref } from "vue";
import * as Models from "@/entities/models";
import * as Types from "@/shared/types";

export const initStateComponents = function () {
  const errors = ref<Types.Error.Component<Models.UserReg>>({});

  return { errors };
};
