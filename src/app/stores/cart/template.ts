import * as Models from "@/entities/models";
import { Helper } from "@/shared/helpers";
import * as FlightStoreTemplate from "../flights/template";

export const newCart = function () {
  return new Models.Cart({
    count: 0,
    created_at: <string>Helper.DateAPI.dateFormatSQL(new Date()),
    flight_id: 0,
    id: -1,
    flight: FlightStoreTemplate.createNewFlight(),
    updated_at: <string>Helper.DateAPI.dateFormatSQL(new Date()),
    user_id: -1,
  });
};
