import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";
import * as Types from "@/shared/types";

export class Permission extends Models.Model<DTOs.Permisiion.DTO> {
  private _entity: Types.Entity.EntityKeys;
  private _actions: Types.Actions.ActionKeys[];

  constructor(dto: DTOs.Permisiion.DTO) {
    super();
    this._entity = dto.entity;
    this._actions = dto.actions;
  }
  public getDTO(): DTOs.Permisiion.DTO {
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
