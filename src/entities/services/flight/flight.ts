import { Service } from "../Service";
import * as Models from "@/entities/models";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import { Helper } from "@/shared/helpers";
import type { UnwrapRef } from "vue";
import { Env } from "@/shared/env";

export class Flight extends Service {
  constructor() {
    super();
  }

  public async getFlights() {
    const repository = new Repositories.Flight();

    const response = await repository.getFlights();

    return this.handlerResponse(response, (response) => {
      const flightDTOs = response.data.data.data;
      const flights = flightDTOs.map(DTOs.Flight.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: {
          entities: this.getCacheObject(flights, "id"),
          genericList: this.getIndexList(flights, "id"),
        },
      });
    });
  }
}
