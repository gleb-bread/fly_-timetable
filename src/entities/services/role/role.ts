import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import { Helper } from "@/shared/helpers";
import type { UnwrapRef } from "vue";
import { Env } from "@/shared/env";
import * as Types from "@/shared/types";

export class Role extends Service {
  constructor() {
    super();
  }

  public async getAll() {
    const repository = new Repositories.Role();

    const response = await repository.getAll();

    return this.handlerResponse(response, (response) => {
      const vDTOs = response.data.data.data;
      const roles = vDTOs.map(DTOs.Role.toModel);

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
}
