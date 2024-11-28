import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import type { Response } from "../Service/types";
import * as DTOs from "@/entities/DTOs";
import { Helper } from "@/shared/helpers";
import type { UnwrapRef } from "vue";

export class Analytic extends Service {
  constructor() {
    super();
  }

  public async getByDay() {
    const repository = new Repositories.Analytic();

    const response = await repository.getByDay();

    return this.handlerResponse(response, (response) => {
      const analyticDTOs = response.data.data.data;
      const anaytics = analyticDTOs.map(DTOs.Analytic.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: anaytics,
      });
    });
  }

  public async getByMonth() {
    const repository = new Repositories.Analytic();

    const response = await repository.getByMounth();

    return this.handlerResponse(response, (response) => {
      const analyticDTOs = response.data.data.data;
      const anaytics = analyticDTOs.map(DTOs.Analytic.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: anaytics,
      });
    });
  }

  public async getByYear() {
    const repository = new Repositories.Analytic();

    const response = await repository.getByYear();

    return this.handlerResponse(response, (response) => {
      const analyticDTOs = response.data.data.data;
      const anaytics = analyticDTOs.map(DTOs.Analytic.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: anaytics,
      });
    });
  }
}
