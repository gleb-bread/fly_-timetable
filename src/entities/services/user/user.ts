import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import type { Response } from "../Service/types";
import * as DTOs from "@/entities/DTOs";
import { Helper } from "@/shared/helpers";
import type { UnwrapRef } from "vue";
import { Env } from "@/shared/env";
import * as ServiceTypes from "../Service/types";

export class User extends Service {
  constructor() {
    super();
  }

  public async addUser(user: Models.UserReg | UnwrapRef<Models.UserReg>) {
    const repository = new Repositories.Registration({
      payload: user.getDTO(),
    });

    const response = await repository.addUser();

    return this.validateRequest({
      response: response,

      success: async (response) => {
        const userDTO = response.response.data.data.data.user;

        const user = DTOs.UserAuth.toModel(userDTO);

        const token = user.token;

        Helper.CookieAPI.setCookie(Env.Cookie.token, token, 14, {
          path: "/",
          sameSite: "Strict",
        });

        return {
          status: response.status,
          result: response.result,
          data: user,
        };
      },

      error: (response) => {
        return {
          status: response.status,
          result: response.result,
          data: response,
        };
      },
    });
  }

  public async getUser() {
    const repository = new Repositories.User();

    const response = await repository.getUser();

    return new Promise<Response<Models.User>>((resolve, reject) => {
      this.validateRequest({
        response: response,

        success: async (response) => {
          const userDTO = response.response.data.data;
          const user = DTOs.User.toModel(userDTO);

          resolve({
            status: response.status,
            result: response.result,
            data: user,
          });
        },

        error: (response) => {
          reject({
            status: response.status,
            result: response.result,
            data: response,
          });
        },
      });
    });
  }
}
