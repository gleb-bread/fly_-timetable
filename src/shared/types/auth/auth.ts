import * as DTOs from "@/entities/DTOs";
import * as Types from "@/shared/types";

export type UserAuth = Types.Response.Response<{
  user: DTOs.User.UserDTO;
  token: string;
}>;
