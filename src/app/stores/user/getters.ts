import { computed } from "vue";
import { initState } from "./state";
import * as Types from "@/shared/types";

export const initGetters = function (state: ReturnType<typeof initState>) {
  const getAuthToken = computed(() => state.authToken.value);
  const getLangToken = computed(() => state.langToken.value);
  const getUserInfo = computed(() => state.userInfo.value);
  const getNewUser = computed(() => state.newUser.value);
  const getUserLogin = computed(() => state.userLogin.value);

  const getPermissions = computed(() => state.permissions.value);

  const getPermissionByKey = computed(() => (key: Types.Entity.EntityKeys) => {
    return state.permissions.value[key].actions;
  });

  const hasPermissionByKeyAndAction = computed(
    () => (key: Types.Entity.EntityKeys, action: Types.Actions.ActionKeys) => {
      return !!state.permissions.value[key]?.actions?.includes(action);
    }
  );

  const getIsStuff = computed(() => state.isStuff.value);

  return {
    getAuthToken,
    getLangToken,
    getUserInfo,
    getNewUser,
    getUserLogin,
    getPermissions,
    getPermissionByKey,
    hasPermissionByKeyAndAction,
    getIsStuff,
  };
};
