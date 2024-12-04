import { ref } from "vue";
import type { Languages } from "@/shared/system/lang/type";
import * as Models from "@/entities/models";
import * as UserTemplatesStore from "./template";
import * as Types from "@/shared/types";

export const initState = function () {
  const authToken = ref<string>("");
  const langToken = ref<Languages>("ru");
  const userInfo = ref<Models.User>({} as Models.User);
  const newUser = ref<Models.UserReg>(UserTemplatesStore.newUser());
  const userLogin = ref<Models.UserLogin>(UserTemplatesStore.UserLogin());
  const permissions = ref(
    {} as Types.Objects.DefinitedStringObject<
      Types.Entity.EntityKeys,
      Models.Permission
    >
  );
  const isStuff = ref(false);

  return {
    authToken,
    langToken,
    userInfo,
    newUser,
    userLogin,
    permissions,
    isStuff,
  };
};
