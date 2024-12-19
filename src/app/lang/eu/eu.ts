import type { WORDS } from "../type";

export class LangEU {
  private _WORDS: WORDS;

  constructor() {
    this._WORDS = {
      LOGO: "TIMETABLE",
      REG: {
        LOGIN: "Login",
        PASSWORD: "Password",
        TITLELOGIN: "Log in",
        TITLEREG: "Register",
        BTNLOGIN: "Log in",
        BTNREG: "Register",
        EMIAL: "Email",
        PASSWORDAGAIN: "Repeat the password",
        TITLEOR: "Or",
        BTNGOOGLE: "Log in using Google",
        TITLELINKREG: "Register",
        TITLELINKRESETPASSWORD: "Recover password",
      },
      RULES: {
        MINLENTH: (v: number) => this.MINLENGTHSTR(v),
        MAXLENTH: (v: number) => this.MAXLENGTHSTR(v),
        EMAIL: "The field must contain an email",
        NUM: "The field must contain only numbers",
        ONLYSTRING: "The field must contain letters",
        PASSWORDSNOTEQUAL: "Passwords do not match",
        REQUIRED: "The field is required",
      },

      FLIGHTS: {
        FROM: "From",
        ARRIVAL: "Arrival",
        DEPARTURE_FROM: "Departure, from",
        DEPARTURE_TIME: "Departure, time",
        ARRIVAL_TO: "Arrival, to",
        ARRIVAL_TIME: "Arrival, time",
        FLIGHT_NAME: "Flight name",
        PRICE: "Price",
      },

      MESSAGE: {
        SUCCESS: "Success",
        ERROR: "Error",
      },

      ERRORS: {
        409: {
          LOGIN: "This login is already taken",
          EMAIL: "This email is already registered",
        },
        422: {
          EMAIL: "Invalid email",
          PASSWORD: "Invalid password",
        },
        401: {
          RESULT: "Invalid email or password",
        },
        UNKNOWN: "Unknown error",
      },

      ERRORS_MESSAGES: {
        UNKNOWN: "Unknown error",
      },

      FILTERS: {
        ARRIVAL_TIME: "Arrival Time",
        DEPARTURE_FROM: "Departure From",
        DEPARTURE_TIME: "Departure Time",
        DESTINATION: "Destination",
        FLIGHT_NUMBER: "Flight Number",
        FLIGHT_TYPE_ID: "Flight Type",
        SEARCH: "Search",
        FROM: "From",
        TILL: "Till",
      },

      CART: {
        TITLE: {
          TYPE: "Type",
          FROM: "From",
          BUY: "Buy",
          TO: "To",
          DEPARTURE_TIME: "Departure time",
          PRICE: "Price",
          COUNT: "Quantity",
          TOTAL: "Total",
        },
      },

      COMMON: {
        YES: "Yes",
        NO: "No",
        OK: "Ok",
        CANCEL: "Cancel",
        SAVE: "Save",
        DELETE: "Delete",
        CONFIRM: "Confirm",
        CLOSE: "Close",
        LOADING: "Loading",
        ERROR: "Error",
        APPLY: "Apply",
        LIST_EMPTY: "List empty",
      },

      APPLICATION: {
        APPLICATION: "Order",
      },

      MENU: {
        USER: {
          APPLICATION: "Orders",
          ANALYTIC: "Analytic",
          ADMIN: "Admin panel",
        },
      },

      ANALYTIC: {
        CHAR: "Pie",
        AREA: "Area",
        MOUNTH: "Mounth",
        YEAR: "Yaer",
        DAY: "Day",
      },

      TOOLMENU: {
        CREATEFLIGHT: "Add",
        UPDATEFLIGHT: "Update",
        UPDATEUSER: "Rights",
        ANALYTIC: "Analytic",
      },

      ADMIN: {
        DEFAULTPAGE: "Select the item on the left",
      },
    };
  }

  public get WORDS() {
    return this._WORDS;
  }

  public MINLENGTHSTR(v: number) {
    if (v === 1) {
      return `Minimum length: ${v} character`;
    } else {
      return `Minimum length: ${v} characters`;
    }
  }

  public MAXLENGTHSTR(v: number): string {
    if (v === 1) {
      return `Maximum length: ${v} character`;
    } else {
      return `Maximum length: ${v} characters`;
    }
  }
}
