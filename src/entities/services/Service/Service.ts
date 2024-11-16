import * as ServiceTypes from "./types";
import * as ARepositoryTypes from "@/entities/repositories/ARepository/types";

export class Service {
  protected getCacheObject<T, K extends keyof T>(array: T[], keyCache: K) {
    return array.reduce(
      (obj, value) => {
        const key = value[keyCache];
        if (
          typeof key === "string" ||
          typeof key === "number" ||
          typeof key === "symbol"
        ) {
          obj[key] = value;
        }
        return obj;
      },
      {} as ServiceTypes.ServiceCacheObj<T, K>
    );
  }

  protected getIndexList<T, K extends keyof T>(array: T[], keyCache: K) {
    return array.reduce(
      (list, value) => {
        const key = value[keyCache];
        list.push(key);
        return list;
      },
      [] as Array<T[K]>
    );
  }

  protected handlerResponse<T, E, J>(
    payload: ServiceTypes.ResponsePayload<T, E>,
    success: (
      response: ARepositoryTypes.ResponsePayloadSuccess<T>
    ) => ARepositoryTypes.ParseResponsePayloadSuccess<J>
  ) {
    if (payload.result) {
      return success(payload as ARepositoryTypes.ResponsePayloadSuccess<T>);
    }
    return payload;
  }

  protected generateResponse<T>(
    payload: ARepositoryTypes.ParseResponsePayloadSuccess<T>
  ): ARepositoryTypes.ParseResponsePayloadSuccess<T> {
    return {
      data: payload.data,
      result: payload.result,
      status: payload.status,
    };
  }
}
