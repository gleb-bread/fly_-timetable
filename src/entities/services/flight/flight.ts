import { Service } from "../Service";
import * as Types from "@/shared/types";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";

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
}
