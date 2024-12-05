import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";
import * as Types from "@/shared/types";
import { Actions } from "@/shared/enum/action";

export type DTO = {
  entity: Types.Entity.EntityKeys;
  actions: `${Actions}`[];
};

export const toModel = function (dto: DTO): Models.Permission {
  return new Models.Permission(dto);
};
