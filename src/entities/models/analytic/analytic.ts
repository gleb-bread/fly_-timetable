import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export class Analytic extends Models.Model<DTOs.Analytic.AnalyticDTO> {
  private _title: string;
  private _total: number;

  constructor(dto: DTOs.Analytic.AnalyticDTO) {
    super();

    this._title = dto.title;
    this._total = dto.total;
  }
  public getDTO(): DTOs.Analytic.AnalyticDTO {
    return {
      title: this._title,
      total: this._total,
    };
  }

  public get title() {
    return this._title;
  }

  public get total() {
    return this._total;
  }
}
