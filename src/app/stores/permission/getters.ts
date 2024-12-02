import { initState } from "./state";
import { Helper } from "@/shared/helpers";
import { computed } from "vue";
import * as Types from "@/shared/types";

export const initGetters = function (state: ReturnType<typeof initState>) {
  const getPermissions = computed(() => state.permissions.value);

  const getPermissionByKey = computed(() => (key: Types.Entity.EntityKeys) => {
    return state.permissions.value[key].actions;
  });

  const hasPermissionByKeyAndAction = computed(
    () => (key: Types.Entity.EntityKeys, action: Types.Actions.ActionKeys) => {
      return !!state.permissions.value[key]?.actions?.includes(action);
    }
  );

  return { getPermissions, getPermissionByKey, hasPermissionByKeyAndAction };
};
