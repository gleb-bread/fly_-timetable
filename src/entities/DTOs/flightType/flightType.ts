import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export type FlightTypeDTO = {
  id: number;
  type: string;
  create_at: string | null;
  update_at: string | null;
};

export const toModel = function (dto: FlightTypeDTO): Models.FlightType {
  return new Models.FlightType(dto);
};
