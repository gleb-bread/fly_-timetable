import { initStateComponents } from "./stateComponents";
import * as Models from "@/entities/models";
import * as Types from "@/shared/types";

export const initActionsComponents = function (
  state: ReturnType<typeof initStateComponents>
) {
  const setErrors = function (errors: Types.Error.Component<Models.UserReg>) {
    state.errors.value = errors;
  };

  return { private: { setErrors }, public: {} };
};
