import * as Models from "@/entities/models";
import * as DTOs from "@/entities/DTOs";

export type UserRoleDTO = {
  id: number;
  user_assigment_id: number;
  role_id: number;
  created_at: null | string;
  updated_at: null | string;
  user: DTOs.User.UserDTO;
  role: DTOs.Role.RoleDTO;
};

export const toModel = function (dto: UserRoleDTO) {
  return new Models.UserRole(dto);
};
