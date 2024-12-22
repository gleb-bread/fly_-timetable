import * as DTOs from "@/entities/DTOs";
import * as Repositories from "@/entities/repositories";
import { PREFIX } from "@/entities/repositories/prefix.enum";
import * as Types from "@/shared/types";

export class Roles extends Repositories.ARepository.ARepositorySecurity {
  constructor(
    config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
  ) {
    super(`${PREFIX.V1}/users/roles`, config);
  }

  public async getAll() {
    return this.GET<
      Types.Response.ServerResponse<
        Types.Response.Response<DTOs.UserRole.UserRoleDTO[]>
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

  public async create() {
    return this.POST<
      Types.Response.ServerResponse<
        Types.Response.Response<DTOs.UserRole.UserRoleDTO>
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

  public async delete() {
    return this.DELETE<
      Types.Response.ServerResponse<Types.Response.Response<boolean>>
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
