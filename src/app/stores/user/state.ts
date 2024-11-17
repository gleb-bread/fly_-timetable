import { ref } from "vue";
import type { Languages } from "@/shared/system/lang/type";
import * as Models from "@/entities/models";
import * as UserTemplatesStore from "./template";

export const initState = function () {
  const authToken = ref<string>("");
  const langToken = ref<Languages>("ru");
  const userInfo = ref<Models.User>({} as Models.User);
  const newUser = ref<Models.UserReg>(UserTemplatesStore.newUser());
  const userLogin = ref<Models.UserLogin>(UserTemplatesStore.UserLogin());

  return { authToken, langToken, userInfo, newUser, userLogin };
};
