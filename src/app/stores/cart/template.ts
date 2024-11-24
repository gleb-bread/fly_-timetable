import * as Models from "@/entities/models";
import { Helper } from "@/shared/helpers";
import { useUserStore } from "../user";

export const newCart = function () {
  const userStore = useUserStore();

  return new Models.Cart({
    count: 0,
    created_at: <string>Helper.DateAPI.dateFormatSQL(new Date()),
    flight_id: 0,
    id: -1,
    updated_at: <string>Helper.DateAPI.dateFormatSQL(new Date()),
    user_id: -1,
  });
};
