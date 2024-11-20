import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export class FlightType extends Models.Model<DTOs.FlightType.FlightTypeDTO> {
  private _id: number;
  private _type: string;
  private _create_at: string | null;
  private _update_at: string | null;

  constructor(dto: DTOs.FlightType.FlightTypeDTO) {
    super();

    this._id = dto.id;
    this._type = dto.type;
    this._create_at = dto.create_at;
    this._update_at = dto.update_at;
  }
  public getDTO(): DTOs.FlightType.FlightTypeDTO {
    return {
      id: this._id,
      type: this._type,
      create_at: this._create_at,
      update_at: this._update_at,
    };
  }

  public get id() {
    return this._id;
  }

  public get type() {
    return this._type;
  }

  public get create_at() {
    return this._create_at;
  }

  public get update_at() {
    return this._update_at;
  }
}
