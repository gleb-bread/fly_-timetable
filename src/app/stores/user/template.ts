import * as Models from "@/entities/models";

export const newUser = () =>
  new Models.UserReg({
    email: "",
    login: "",
    name: null,
    second_name: null,
    password: "",
    password_confirmation: "",
  });
