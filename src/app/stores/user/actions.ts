import { initState } from "./state";
import { initStateComponents } from "./stateComponents";
import type { Languages } from "@/shared/system/lang/type";
import * as UserTemplatesStore from "./template";
import { Helper } from "@/shared/helpers";
import * as Services from "@/entities/services";
import { useRouter } from "vue-router";
import { router as Router } from "@/app/router/router";

export const initActions = function (
  state: ReturnType<typeof initState>,
  stateComponents: ReturnType<typeof initStateComponents>
) {
  const setAuthToken = function (token: string) {
    state.authToken.value = token;
  };

  const setLangToken = function (token: Languages) {
    state.langToken.value = token;
  };

  const addUser = async function (router: typeof Router) {
    const service = new Services.User();

    const response = await service.addUser(state.newUser.value);

    if (response.result) {
      state.userInfo.value = response.data;
      restoreNewUser();
      Helper.RouterAPI.redirect(router, "PAGE");
    } else {
    }
  };

  const setUserInfo = async function () {
    const service = new Services.User();
    const router = useRouter();

    const response = await service.getUser();

    if (response.result) {
      state.userInfo.value = response.data;
    } else {
      Helper.RouterAPI.redirect(router, "LOGIN");
    }
  };

  const restoreNewUser = function () {
    state.newUser.value = UserTemplatesStore.newUser();
  };

  const restoreUserLogin = function () {
    state.userLogin.value = UserTemplatesStore.UserLogin();
  };

  const UserLogin = async function (router: typeof Router) {
    const service = new Services.User();

    const response = await service.login(state.userLogin.value);

    if (response.result) {
      state.userInfo.value = response.data;
      restoreUserLogin();
      Helper.RouterAPI.redirect(router, "PAGE");
    } else {
    }
  };

  return { setAuthToken, setLangToken, addUser, setUserInfo, UserLogin };
};
