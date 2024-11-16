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

  protected validateRequest<T, E>(payload: ServiceTypes.ValidatePayload<T, E>) {
    try {
      if (!payload.response.result) {
        console.error(payload.response);
        return payload.error(payload.response);
      } else {
        return payload.success(
          payload.response as unknown as ARepositoryTypes.ResponseSuccessPayload<T>
        );
      }
    } catch (err) {
      console.error("Validation error:", err);
      return payload.error({
        status: 400,
        result: false,
        response: null,
      });
    }
  }
}
