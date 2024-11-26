import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export class Application extends Models.Model<DTOs.Application.ApplicationDTO> {
  private _id: number;
  private _user_id: number;
  private _flight_id: number;
  private _count: number;
  private _created_at: string;
  private _flight?: DTOs.Flight.FlightDTO;
  private _order_id: number;
  private _updated_at: string;

  constructor(dto: DTOs.Application.ApplicationDTO) {
    super();

    this._id = dto.id;
    this._user_id = dto.user_id;
    this._flight_id = dto.flight_id;
    this._count = dto.count;
    this._created_at = dto.created_at;
    this._flight = dto.flight;
    this._order_id = dto.order_id;
    this._updated_at = dto.updated_at;
  }
  public getDTO(): DTOs.Application.ApplicationDTO {
    return {
      id: this._id,
      user_id: this._user_id,
      flight_id: this._flight_id,
      count: this._count,
      created_at: this._created_at,
      flight: this._flight,
      order_id: this._order_id,
      updated_at: this._updated_at,
    };
  }

  public get id() {
    return this._id;
  }

  public get user_id() {
    return this._user_id;
  }

  public get flight_id() {
    return this._flight_id;
  }

  public get count() {
    return this._count;
  }

  public get created_at() {
    return this._created_at;
  }

  public get flight() {
    return this._flight;
  }

  public get order_id() {
    return this._order_id;
  }

  public get updated_at() {
    return this._updated_at;
  }
}
