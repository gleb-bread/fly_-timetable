import { initState } from "./state";
import { initStateComponents } from "./stateComponents";
import type { Languages } from "@/shared/system/lang/type";
import * as UserTemplatesStore from "./template";
import { Helper } from "@/shared/helpers";
import * as Services from "@/entities/services";
import { useRouter } from "vue-router";
import { useMessageStore } from "../message";
import * as Models from "@/entities/models";
import * as Errors from "@/shared/error";
import { Lang } from "@/app/lang";

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

  const addUser = async function () {
    const service = new Services.User();

    const response = await service.addUser(state.newUser.value);

    if (response.result) {
      state.userInfo.value = response.data;
      restoreNewUser();
      Helper.RouterAPI.redirect("PAGE");
    } else {
      const messages = new Errors.RequestError(
        response
      ).message<Models.UserReg>();

      if (messages) {
        stateComponents.errorsReg.value = messages;
      }
    }
  };

  const setUserInfo = async function () {
    const service = new Services.User();
    const router = useRouter();

    const response = await service.getUser();

    if (response.result) {
      state.userInfo.value = response.data;
    } else if (response.status === 401) {
      Helper.RouterAPI.redirect("LOGIN");
    } else {
      const messageStore = useMessageStore();
      const WORDS = new Lang().WORDS;

      messageStore.addMessage({
        result: false,
        message: WORDS.ERRORS_MESSAGES.UNKNOWN,
      });
    }
  };

  const restoreNewUser = function () {
    state.newUser.value = UserTemplatesStore.newUser();
  };

  const restoreUserLogin = function () {
    state.userLogin.value = UserTemplatesStore.UserLogin();
  };

  const UserLogin = async function () {
    const service = new Services.User();

    const response = await service.login(state.userLogin.value);

    if (response.result) {
      state.userInfo.value = response.data;
      restoreUserLogin();
      Helper.RouterAPI.redirect("PAGE");
    } else {
      const messages = new Errors.RequestError(
        response
      ).message<Models.UserLogin>();

      if (messages) {
        stateComponents.errorsLogin.value = messages;
      }
    }
  };

  const setPermissions = async function () {
    const service = new Services.UserPermission();

    const response = await service.getAll();

    if (response.result) {
      state.permissions.value = response.data;
    }
  };

  const setIsStuff = async function () {
    const service = new Services.UserIsStuff();

    const response = await service.get();

    if (response.result) {
      state.isStuff.value = response.data;
    }
  };

  return {
    setAuthToken,
    setLangToken,
    addUser,
    setUserInfo,
    UserLogin,
    setPermissions,
    setIsStuff,
  };
};
