import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export type UserLoginDTO = {
  email: string;
  password: string;
};

export const toModel = function (dto: UserLoginDTO): Models.UserLogin {
  return new Models.UserLogin(dto);
};
