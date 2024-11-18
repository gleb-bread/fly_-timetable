import { ref } from "vue";
import * as Models from "@/entities/models";
import * as Types from "@/shared/types";

export const initStateComponents = function () {
  const errorsReg = ref<Types.Error.Component<Models.UserReg>>({});
  const errorsLogin = ref<Types.Error.Component<Models.UserLogin>>({});

  return { errorsReg, errorsLogin };
};
