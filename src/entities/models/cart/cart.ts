import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export class Cart extends Models.Model<DTOs.Cart.CartDTO> {
  private _id: number;
  private _user_id: number;
  private _flight_id: number;
  private _count: number;
  private _flight?: Models.Flight;
  private _created_at: string;
  private _updated_at: string;

  constructor(dto: DTOs.Cart.CartDTO) {
    super();

    this._id = dto.id;
    this._user_id = dto.user_id;
    this._flight_id = dto.flight_id;
    this._count = dto.count;
    this._flight = dto.flight ? new Models.Flight(dto.flight) : undefined;
    this._created_at = dto.created_at;
    this._updated_at = dto.updated_at;
  }
  public getDTO(): DTOs.Cart.CartDTO {
    return {
      id: this._id,
      user_id: this._user_id,
      flight_id: this._flight_id,
      count: this._count,
      flight: this._flight?.getDTO(),
      created_at: this._created_at,
      updated_at: this._updated_at,
    };
  }

  public get id() {
    return this._id;
  }

  public get user_id() {
    return this._user_id;
  }

  public set user_id(v: number) {
    this._user_id = v;
  }

  public get flight_id() {
    return this._flight_id;
  }

  public set flight_id(v: number) {
    this._flight_id = v;
  }

  public get count() {
    return this._count;
  }

  public set count(v: number) {
    this._count = v;
  }

  public get created_at() {
    return this._created_at;
  }

  public get updated_at() {
    return this._updated_at;
  }

  public get flight() {
    return this._flight;
  }
}
