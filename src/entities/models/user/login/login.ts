import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export class UserLogin extends Models.Model<DTOs.UserLogin.UserLoginDTO> {
  private _email: string;
  private _password: string;
  private _result: boolean = false;

  constructor(dto: DTOs.UserLogin.UserLoginDTO) {
    super();

    this._email = dto.email;
    this._password = dto.password;
  }
  public getDTO(): DTOs.UserLogin.UserLoginDTO {
    return {
      email: this._email,
      password: this._password,
    };
  }

  public get email() {
    return this._email;
  }

  public set email(v: string) {
    this._email = v;
  }

  public get password() {
    return this._password;
  }

  public set password(v: string) {
    this._password = v;
  }

  public get result() {
    return this._result;
  }

  public set result(v: boolean) {
    this._result = v;
  }
}
