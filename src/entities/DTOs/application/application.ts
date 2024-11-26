import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export type ApplicationDTO = {
  id: number;
  user_id: number;
  flight_id: number;
  count: number;
  created_at: string;
  flight?: DTOs.Flight.FlightDTO;
  order_id: number;
  updated_at: string;
};

export const toModel = function (dto: ApplicationDTO): Models.Application {
  return new Models.Application(dto);
};
