import * as Repositories from "@/entities/repositories";
import * as ARepositoryTypes from "@/entities/repositories/ARepository/types";
import { PREFIX } from "@/entities/repositories/prefix.enum";
import * as Types from "@/shared/types";
import * as Models from "@/entities/models";

export class Login extends Repositories.ARepository.ARepository {
  constructor(
    config?: Repositories.ARepository.RepositoryTypes.RepositoryConfig
  ) {
    super(`${PREFIX.API}/login`, config);
  }

  public async login() {
    return this.POST<Types.Response.ServerResponse<Types.Auth.UserAuth>>()
      .then((response) => {
        return this.generateResponseSuccess({
          response: response,
        });
      })
      .catch((response) => {
        return this.generateResponseError<
          Types.Response.Response<Types.Error.Component<Models.UserReg>>
        >({
          response: response,
        });
      });
  }
}
