import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export type CartDTO = {
  id: number;
  user_id: number;
  flight_id: number;
  count: number;
  created_at: string;
  updated_at: string;
};

export const toModel = function (dto: CartDTO): Models.Cart {
  return new Models.Cart(dto);
};
