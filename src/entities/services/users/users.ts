import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import { Helper } from "@/shared/helpers";
import type { UnwrapRef } from "vue";
import { Env } from "@/shared/env";
import * as Types from "@/shared/types";

export class Users extends Service {
  constructor() {
    super();
  }

  public async getAll() {
    const repository = new Repositories.Users();

    const response = await repository.getAll();

    return this.handlerResponse(response, (response) => {
      const userDTOs = response.data.data.data;
      const users = userDTOs.map(DTOs.User.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: {
          entities: this.getCacheObject(users, "id"),
          genericList: this.getIndexList(users, "id"),
        },
      });
    });
  }
}
