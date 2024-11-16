import * as Models from "@/entities/models";

export type UserRegDTO = {
  login: string;
  name: string | null;
  second_name: string | null;
  email: string;
  password: string;
  password_confirmation: string;
};

export const toModel = function (dto: UserRegDTO) {
  return new Models.UserReg(dto);
};
