import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";
import * as Types from "@/shared/types";
import { Actions } from "@/shared/enum/action";

export class Permission extends Models.Model<DTOs.UserPermission.DTO> {
  private _entity: Types.Entity.EntityKeys;
  private _actions: Array<`${Actions}`>;

  constructor(dto: DTOs.UserPermission.DTO) {
    super();
    this._entity = dto.entity;
    this._actions = dto.actions;
  }
  public getDTO(): DTOs.UserPermission.DTO {
    return {
      entity: this._entity,
      actions: this._actions,
    };
  }

  public get entity() {
    return this._entity;
  }

  public get actions() {
    return this._actions;
  }
}
