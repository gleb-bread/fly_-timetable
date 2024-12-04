import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import type { Response } from "../Service/types";
import * as DTOs from "@/entities/DTOs";
import { Helper } from "@/shared/helpers";
import type { UnwrapRef } from "vue";

export class UserPermission extends Service {
  constructor() {
    super();
  }

  public async getAll() {
    const repository = new Repositories.UserPermission();

    const response = await repository.getAll();

    return this.handlerResponse(response, (response) => {
      const permissionDTOs = response.data.data.data;
      const permissions = permissionDTOs.map(DTOs.UserPermission.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: this.getCacheObject(permissions, "entity"),
      });
    });
  }
}
