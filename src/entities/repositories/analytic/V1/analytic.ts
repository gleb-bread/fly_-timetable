import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import * as ARepositoryTypes from "@/entities/repositories/ARepository/types";
import * as Types from "@/shared/types";
import { PREFIX } from "@/entities/repositories/prefix.enum";

export class Analytic extends Repositories.ARepository.ARepositorySecurity {
  constructor(
    config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
  ) {
    super(`${PREFIX.V1}/analytics/revenue`, config);
  }

  public async getByDay() {
    this.addParamsInConfig({
      path: "day",
    });

    return this.GET<
      Types.Response.ServerResponse<
        Types.Response.Response<DTOs.Analytic.AnalyticDTO[]>
      >
    >()
      .then((response) => {
        return this.generateResponseSuccess({
          response: response,
        });
      })
      .catch((response) => {
        return this.generateResponseError({
          response: response,
        });
      });
  }

  public async getByMounth() {
    this.addParamsInConfig({
      path: "month",
    });

    return this.GET<
      Types.Response.ServerResponse<
        Types.Response.Response<DTOs.Analytic.AnalyticDTO[]>
      >
    >()
      .then((response) => {
        return this.generateResponseSuccess({
          response: response,
        });
      })
      .catch((response) => {
        return this.generateResponseError({
          response: response,
        });
      });
  }

  public async getByYear() {
    this.addParamsInConfig({
      path: "year",
    });

    return this.GET<
      Types.Response.ServerResponse<
        Types.Response.Response<DTOs.Analytic.AnalyticDTO[]>
      >
    >()
      .then((response) => {
        return this.generateResponseSuccess({
          response: response,
        });
      })
      .catch((response) => {
        return this.generateResponseError({
          response: response,
        });
      });
  }
}
