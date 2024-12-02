import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";
import * as Types from "@/shared/types";

export type DTO = {
  entity: Types.Entity.EntityKeys;
  actions: Types.Actions.ActionKeys[];
};

export const toModel = function (dto: DTO): Models.Permission {
  return new Models.Permission(dto);
};
