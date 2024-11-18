import { AxiosError } from "axios";
import * as Types from "@/shared/types";
import * as RequestErrorTypes from "./types";
import { Lang } from "@/app/lang";
import { Helper } from "@/shared/helpers";

export class RequestError<T extends object> {
  private _error: Types.Response.ResponsePayloadError<T>;
  private _WORDS = new Lang().WORDS.ERRORS;

  constructor(error: Types.Response.ResponsePayloadError<T>) {
    this._error = error;
  }

  public message<J>() {
    const messages = this.getMessages<J>();
    const validMessages = Helper.MessageAPI.checkError(messages);
    return validMessages;
  }

  private getMessages<J>() {
    const data = this._error?.data?.response?.data?.data;
    let result = {} as { [key in keyof J]: string };

    if (!data) return this.getUnknown();

    for (const v of Object.keys(data)) {
      const key = <keyof T & RequestErrorTypes.OnlyStatusErrorWordsKeys>(
        v.toUpperCase()
      );
      let status = <number | number>data[<keyof T>v];
      if (typeof status != "number") status = this._error.data?.status ?? 0;

      const messages = this.getWordsByStatus(status);
      if (typeof messages == "string") {
        result[<keyof J>v] = messages;
      } else {
        result[<keyof J>v] =
          (<RequestErrorTypes.OnlyStatusErrorWordsField>messages)[key] ??
          this._WORDS.UNKNOWN;
      }
    }

    return result;
  }

  private getWordsByStatus(status: number) {
    const registerErrors = Object.keys(this._WORDS);
    if (registerErrors.includes(String(status)))
      return this._WORDS[<RequestErrorTypes.AllErrorWordKeys>status];
    return this._WORDS.UNKNOWN;
  }
  private getUnknown() {
    return { unknown: this._WORDS.UNKNOWN };
  }
}
