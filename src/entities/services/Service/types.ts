import * as ARepositoryTypes from "@/entities/repositories/ARepository/types";
import * as Types from "@/shared/types";

export type ServiceCacheObj<T, K extends keyof T> = {
  [key in T[K] & (string | number | symbol)]: T;
};

export type Response<T> = {
  data: T;
  status: number;
  result: boolean;
};

export type GenericList<T> = {
  genericList: number[];
  entities: Types.Objects.NumberObject<T>;
};

export type ResponsePayload<T, E> =
  | Types.Response.ResponsePayloadSuccess<T>
  | Types.Response.ResponsePayloadError<E>;
