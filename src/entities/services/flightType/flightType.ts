import { Service } from "../Service";
import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";

export class FlightType extends Service {
  constructor() {
    super();
  }

  public async getAll() {
    const repository = new Repositories.FlightType();

    const response = await repository.getAll();

    return this.handlerResponse(response, (response) => {
      const flightTypesDTOs = response.data.data.data;
      const flightTypes = flightTypesDTOs.map(DTOs.FlightType.toModel);

      return this.generateResponse({
        status: response.status,
        result: response.result,
        data: {
          entities: this.getCacheObject(flightTypes, "id"),
          genericList: this.getIndexList(flightTypes, "id"),
        },
      });
    });
  }
}
