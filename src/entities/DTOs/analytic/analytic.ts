import * as DTOs from "@/entities/DTOs";
import * as Models from "@/entities/models";

export type AnalyticDTO = {
  title: string;
  total: number;
};

export const toModel = function (dto: AnalyticDTO): Models.Analytic {
  return new Models.Analytic(dto);
};
