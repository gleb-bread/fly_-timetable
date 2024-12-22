import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export class UserRole extends Models.Model<DTOs.UserRole.UserRoleDTO> {
  private _id: number;
  private _user_assigment_id: number;
  private _role_id: number;
  private _created_at: null | string;
  private _updated_at: null | string;
  private _user: Models.User;
  private _role: Models.Role;

  constructor(dto: DTOs.UserRole.UserRoleDTO) {
    super();

    this._id = dto.id;
    this._user_assigment_id = dto.user_assigment_id;
    this._role_id = dto.role_id;
    this._created_at = dto.created_at;
    this._updated_at = dto.updated_at;
    this._user = new Models.User(dto.user);
    this._role = new Models.Role(dto.role);
  }
  public getDTO(): DTOs.UserRole.UserRoleDTO {
    return {
      id: this._id,
      user_assigment_id: this._user_assigment_id,
      role_id: this._role_id,
      created_at: this._created_at,
      updated_at: this._updated_at,
      user: this._user.getDTO(),
      role: this._role.getDTO(),
    };
  }

  public get id() {
    return this._id;
  }

  public get user_assigment_id() {
    return this._user_assigment_id;
  }

  public get role_id() {
    return this._role_id;
  }

  public get created_at() {
    return this._created_at;
  }

  public get updated_at() {
    return this._updated_at;
  }

  public get user() {
    return this._user;
  }

  public get role() {
    return this._role;
  }
}
