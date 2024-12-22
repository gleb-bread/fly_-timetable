import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export type RoleDTO = {
  id: number;
  title: string;
  project_type_id: number;
  created_at: null | string;
  updated_at: null | string;
};

export const toModel = function (dto: RoleDTO): Models.Role {
  return new Models.Role(dto);
};
