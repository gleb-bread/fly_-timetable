import { Service } from "../Service";
import * as Types from "@/shared/types";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";
import type { UnwrapRef } from "vue";

export class Flight extends Service {
  constructor() {
    super();
  }

  public async getFlights(filters: Types.Filter.Filters | null = null) {
    const repository = new Repositories.Flight({
      payload: {
        filter: filters,
      },
    });

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

  public async create(flight: Models.Flight | UnwrapRef<Models.Flight>) {
    const repository = new Repositories.Flight({
      payload: flight.getDTO(),
    });

    const response = await repository.create();

    return this.handlerResponse(response, (response) => {
      const flightDTO = response.data.data.data;
      const flight = DTOs.Flight.toModel(flightDTO);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: flight,
      });
    });
  }

  public async update(flight: Models.Flight | UnwrapRef<Models.Flight>) {
    const repository = new Repositories.Flight({
      payload: flight.getDTO(),
    });

    const response = await repository.update();

    return this.handlerResponse(response, (response) => {
      const flightDTO = response.data.data.data;
      const flight = DTOs.Flight.toModel(flightDTO);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: flight,
      });
    });
  }

  public async delete(flight: Models.Flight | UnwrapRef<Models.Flight>) {
    const repository = new Repositories.Flight({
      payload: flight.getDTO(),
    });

    const response = await repository.delete();

    return this.handlerResponse(response, (response) => {
      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: response.data,
      });
    });
  }
}
