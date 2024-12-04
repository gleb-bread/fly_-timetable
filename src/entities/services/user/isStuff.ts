import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import type { Response } from "../Service/types";
import * as DTOs from "@/entities/DTOs";
import { Helper } from "@/shared/helpers";
import type { UnwrapRef } from "vue";

export class UserIsStuff extends Service {
  constructor() {
    super();
  }

  public async get() {
    const repository = new Repositories.UserIsStuff();

    const response = await repository.get();

    return this.handlerResponse(response, (response) => {
      const result = response.data.data.data;

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: result,
      });
    });
  }
}
