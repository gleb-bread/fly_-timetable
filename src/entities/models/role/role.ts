import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";
import { getTitleByRole } from "./roleName";

export class Role extends Models.Model<DTOs.Role.RoleDTO> {
  private _id: number;
  private _title: string;
  private _project_type_id: number;
  private _created_at: null | string;
  private _updated_at: null | string;

  constructor(dto: DTOs.Role.RoleDTO) {
    super();

    this._id = dto.id;
    this._title = dto.title;
    this._project_type_id = dto.project_type_id;
    this._created_at = dto.created_at;
    this._updated_at = dto.updated_at;
  }
  public getDTO(): DTOs.Role.RoleDTO {
    return {
      id: this._id,
      title: this._title,
      project_type_id: this._project_type_id,
      created_at: this._created_at,
      updated_at: this._updated_at,
    };
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._title;
  }

  public get project_type_id() {
    return this._project_type_id;
  }

  public get created_at() {
    return this._created_at;
  }

  public get updated_at() {
    return this._updated_at;
  }

  public get title() {
    return getTitleByRole(this._title);
  }
}
