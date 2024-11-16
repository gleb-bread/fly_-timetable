import * as Models from "@/entities/models";
import * as DTOs from "@/entities/DTOs";

export class UserReg extends Models.Model<DTOs.UserReg.UserRegDTO> {
  private _login: string;
  private _email: string;
  private _name: string | null;
  private _second_name: string | null;
  private _password: string;
  private _password_confirmation: string;

  constructor(dto: DTOs.UserReg.UserRegDTO) {
    super();
    this._login = dto.login;
    this._email = dto.email;
    this._name = dto.name;
    this._second_name = dto.second_name;
    this._password = dto.password;
    this._password_confirmation = dto.password_confirmation;
  }

  public getDTO(): DTOs.UserReg.UserRegDTO {
    return {
      login: this._login,
      email: this._email,
      name: this._name,
      second_name: this._second_name,
      password: this._password,
      password_confirmation: this._password_confirmation,
    };
  }

  public get login() {
    return this._login;
  }

  public set login(value: string) {
    this._login = value;
  }

  public get email() {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get name() {
    return this._name ?? "";
  }

  public set name(value: string) {
    this._name = value;
  }

  public get second_name() {
    return this._second_name ?? "";
  }

  public set second_name(value: string) {
    this._second_name = value;
  }

  public get password() {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

  public get password_confirmation() {
    return this._password_confirmation;
  }

  public set password_confirmation(value: string) {
    this._password_confirmation = value;
  }
}
