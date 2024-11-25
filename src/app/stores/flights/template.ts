import * as Models from "@/entities/models";
import { Helper } from "@/shared/helpers";

export const createNewFlight = function () {
  return new Models.Flight({
    arrival_time: <string>Helper.DateAPI.dateFormatSQL(new Date()),
    cart: [],
    created_at: <string>Helper.DateAPI.dateFormatSQL(new Date()),
    departure_from: "",
    departure_time: <string>Helper.DateAPI.dateFormatSQL(new Date()),
    destination: "",
    flight_number: "",
    flight_type_id: 1,
    id: -1,
    price: 0,
    updated_at: <string>Helper.DateAPI.dateFormatSQL(new Date()),
  });
};
