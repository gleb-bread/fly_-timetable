import { AxiosError } from "axios";
import type { AxiosResponse } from "axios";

export type Response<T> = {
  message: string;
  data: T;
};

export type ResponsePayloadError<T> = DefaultResponsePayloadError & {
  data: AxiosError<ServerResponse<T>, any> | null;
};

export type DefaultResponsePayloadSuccess = {
  status: number;
  result: true;
};

export type DefaultResponsePayloadError = {
  status: number;
  result: false;
};

export type ResponsePayloadSuccess<T> = DefaultResponsePayloadSuccess & {
  data: AxiosResponse<T, any>;
};

export type ParseResponsePayloadSuccess<T> = DefaultResponsePayloadSuccess & {
  data: T;
};

export interface ResponseSuccessPayload<T> {
  status: number;
  result: boolean;
  response: AxiosResponse<ServerResponse<T>, any>;
}

export type ServerResponse<T = any> = {
  success: boolean;
  data: T;
  message?: string;
};
