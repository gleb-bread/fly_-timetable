import * as Repositories from "@/entities/repositories";
import * as DTOs from "@/entities/DTOs";
import * as ARepositoryTypes from "@/entities/repositories/ARepository/types";
import * as Types from "@/shared/types";
import { PREFIX } from "@/entities/repositories/prefix.enum";

export class Permission extends Repositories.ARepository.ARepositorySecurity {
  constructor(
    config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
  ) {
    super(`${PREFIX.V1}/permissions`, config);
  }

  public async getAll() {
    return this.GET<
      Types.Response.ServerResponse<
        Types.Response.Response<DTOs.Permisiion.DTO[]>
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
