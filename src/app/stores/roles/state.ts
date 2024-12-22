import { ref } from "vue";
import type { Languages } from "@/shared/system/lang/type";
import * as Models from "@/entities/models";
import * as UserTemplatesStore from "./template";
import * as Types from "@/shared/types";
import * as StoreTemplate from "./template";

export const initState = function () {
  const roles = ref<Types.Objects.NumberObject<Models.UserRole>>({});

  return {
    roles,
  };
};
