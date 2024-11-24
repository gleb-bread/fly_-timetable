import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export type FlightDTO = {
  id: number;
  flight_type_id: number;
  departure_from: string;
  destination: string;
  flight_number: string;
  departure_time: string;
  arrival_time: string;
  price: number;
  cart: DTOs.Cart.CartDTO[];
  created_at: string;
  updated_at: string;
};

export const toModel = function (dto: FlightDTO): Models.Flight {
  return new Models.Flight(dto);
};
