import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import { Helper } from "@/shared/helpers";
import type { UnwrapRef } from "vue";
import { Env } from "@/shared/env";
import * as Types from "@/shared/types";

export class Roles extends Service {
  constructor() {
    super();
  }

  public async getAll() {
    const repository = new Repositories.Roles();

    const response = await repository.getAll();

    return this.handlerResponse(response, (response) => {
      const vDTOs = response.data.data.data;
      const roles = vDTOs.map(DTOs.UserRole.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: {
          entities: this.getCacheObject(roles, "id"),
          genericList: this.getIndexList(roles, "id"),
        },
      });
    });
  }

  public async create(data: Types.Roles.Entity.CreateData) {
    const repository = new Repositories.Roles({ payload: data });

    const response = await repository.create();

    return this.handlerResponse(response, (response) => {
      const vDTO = response.data.data.data;
      console.log(vDTO);
      const role = DTOs.UserRole.toModel(vDTO);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: role,
      });
    });
  }

  public async delete(role: Models.UserRole | UnwrapRef<Models.UserRole>) {
    const repository = new Repositories.Roles({
      payload: role.getDTO(),
    });

    const response = await repository.delete();

    return this.handlerResponse(response, (response) => {
      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: response.data.data.data,
      });
    });
  }
}
