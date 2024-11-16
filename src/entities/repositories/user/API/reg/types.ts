import * as DTOs from "@/entities/DTOs";
import * as Types from "@/shared/types";

export type RegistrationDTO = Types.Response.Response<{
  user: DTOs.UserAuth.UserAuthDTO;
}>;
