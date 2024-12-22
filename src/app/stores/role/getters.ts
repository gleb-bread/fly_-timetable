import { computed } from "vue";
import { initState } from "./state";
import * as Types from "@/shared/types";
import { Enums } from "@/shared/enum";

export const initGetters = function (state: ReturnType<typeof initState>) {
  const getRoles = computed(() => state.roles.value);

  return { getRoles };
};
