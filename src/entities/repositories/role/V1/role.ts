import * as DTOs from "@/entities/DTOs";
import * as Repositories from "@/entities/repositories";
import { PREFIX } from "@/entities/repositories/prefix.enum";
import * as Types from "@/shared/types";

export class Role extends Repositories.ARepository.ARepositorySecurity {
  constructor(
    config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
  ) {
    super(`${PREFIX.V1}/roles`, config);
  }

  public async getAll() {
    return this.GET<
      Types.Response.ServerResponse<
        Types.Response.Response<DTOs.Role.RoleDTO[]>
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
