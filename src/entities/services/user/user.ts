import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import { Helper } from "@/shared/helpers";
import type { UnwrapRef } from "vue";
import { Env } from "@/shared/env";

export class User extends Service {
  constructor() {
    super();
  }

  public async addUser(user: Models.UserReg | UnwrapRef<Models.UserReg>) {
    const repository = new Repositories.Registration({
      payload: user.getDTO(),
    });

    const response = await repository.addUser();

    return this.handlerResponse(response, (response) => {
      const userDTO = response.data?.data.data.user;

      const user = DTOs.User.toModel(userDTO);

      const token = response.data?.data.data.token;

      Helper.CookieAPI.setCookie(Env.Cookie.token, token, 14, {
        path: "/",
        sameSite: "Strict",
      });

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: user,
      });
    });
  }

  public async getUser() {
    const repository = new Repositories.User();

    const response = await repository.getUser();

    return this.handlerResponse(response, (response) => {
      const userDTO = response.data.data;
      const user = DTOs.User.toModel(userDTO);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: user,
      });
    });
  }

  public async login(login: Models.UserLogin | UnwrapRef<Models.UserLogin>) {
    const repository = new Repositories.Login({
      payload: login.getDTO(),
    });

    const response = await repository.login();

    return this.handlerResponse(response, (response) => {
      const userDTO = response.data?.data.data.user;

      const user = DTOs.User.toModel(userDTO);

      const token = response.data?.data.data.token;

      Helper.CookieAPI.setCookie(Env.Cookie.token, token, 14, {
        path: "/",
        sameSite: "Strict",
      });

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: user,
      });
    });
  }
}
