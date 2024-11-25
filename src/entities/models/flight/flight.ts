import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";
import { Helper } from "@/shared/helpers";

export class Flight extends Models.Model<DTOs.Flight.FlightDTO> {
  private _id: number;
  private _flight_type_id: number;
  private _departure_from: string;
  private _destination: string;
  private _flight_number: string;
  private _departure_time: string;
  private _arrival_time: string;
  private _cart: Models.Cart[];
  private _created_at: string;
  private _price: number;
  private _updated_at: string;

  constructor(dto: DTOs.Flight.FlightDTO) {
    super();
    this._id = dto.id;
    this._flight_type_id = dto.flight_type_id;
    this._departure_from = dto.departure_from;
    this._destination = dto.destination;
    this._flight_number = dto.flight_number;
    this._departure_time = dto.departure_time;
    this._arrival_time = dto.arrival_time;
    this._price = dto.price;
    this._cart = dto.cart?.map(DTOs.Cart.toModel) ?? [];
    this._created_at = dto.created_at;
    this._updated_at = dto.updated_at;
  }
  public getDTO(): DTOs.Flight.FlightDTO {
    return {
      id: this._id,
      flight_type_id: this._flight_type_id,
      departure_from: this._departure_from,
      destination: this._destination,
      flight_number: this._flight_number,
      departure_time: this._departure_time,
      arrival_time: this._arrival_time,
      price: this._price,
      cart: this._cart.map((cart) => cart.getDTO()),
      created_at: this._created_at,
      updated_at: this._updated_at,
    };
  }

  public get id() {
    return this._id;
  }

  public get flight_type_id() {
    return this._flight_type_id;
  }

  public set flight_type_id(v: number) {
    this._flight_type_id = v;
  }

  public get departure_from() {
    return this._departure_from;
  }

  public set departure_from(v: string) {
    this._departure_from = v;
  }

  public get destination() {
    return this._destination;
  }

  public set destination(v: string) {
    this._destination = v;
  }

  public get flight_number() {
    return this._flight_number?.toUpperCase() ?? "";
  }

  public set flight_number(v: string) {
    this._flight_number = v;
  }

  public get departure_time() {
    return Helper.DateAPI.formatDateTime(this._departure_time);
  }

  public set departure_time(v: string) {
    this._departure_time = v;
  }

  public get arrival_time() {
    return Helper.DateAPI.formatDateTime(this._arrival_time);
  }

  public set arrival_time(v: string) {
    this._arrival_time = v;
  }

  public get created_at() {
    return this._created_at;
  }

  public get updated_at() {
    return this._updated_at;
  }

  public get cart() {
    return this._cart;
  }

  public set cart(v: Models.Cart[]) {
    this._cart = v;
  }

  public get price() {
    return this._price;
  }
}
