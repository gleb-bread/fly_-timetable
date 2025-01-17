export type WORDS = {
  LOGO: string;
  REG: {
    LOGIN: string;
    PASSWORD: string;
    EMIAL: string;
    PASSWORDAGAIN: string;
    TITLELOGIN: string;
    TITLEREG: string;
    BTNLOGIN: string;
    BTNREG: string;
    TITLEOR: string;
    BTNGOOGLE: string;
    TITLELINKREG: string;
    TITLELINKRESETPASSWORD: string;
  };

  FLIGHTS: {
    FROM: string;
    ARRIVAL: string;
    DEPARTURE_FROM: string;
    DEPARTURE_TIME: string;
    ARRIVAL_TO: string;
    ARRIVAL_TIME: string;
    FLIGHT_NAME: string;
    PRICE: string;
  };

  RULES: {
    REQUIRED: string;
    PASSWORDSNOTEQUAL: string;
    MINLENTH: Function;
    MAXLENTH: Function;
    NUM: string;
    ONLYSTRING: string;
    EMAIL: string;
  };

  CART: {
    TITLE: {
      TYPE: string;
      BUY: string;
      FROM: string;
      TO: string;
      DEPARTURE_TIME: string;
      PRICE: string;
      COUNT: string;
      TOTAL: string;
    };
  };

  MESSAGE: {
    SUCCESS: string;
    ERROR: string;
  };

  ERRORS: {
    409: {
      LOGIN: string;
      EMAIL: string;
    };
    422: {
      EMAIL: string;
      PASSWORD: string;
    };
    401: {
      RESULT: string;
    };
    UNKNOWN: string;
  };
  ERRORS_MESSAGES: {
    UNKNOWN: string;
  };

  FILTERS: {
    ARRIVAL_TIME: string;
    DEPARTURE_FROM: string;
    DEPARTURE_TIME: string;
    DESTINATION: string;
    FLIGHT_NUMBER: string;
    FLIGHT_TYPE_ID: string;
    SEARCH: string;
    FROM: string;
    TILL: string;
  };

  COMMON: {
    YES: string;
    NO: string;
    OK: string;
    CANCEL: string;
    SAVE: string;
    DELETE: string;
    CONFIRM: string;
    CLOSE: string;
    LOADING: string;
    ERROR: string;
    APPLY: string;
    LIST_EMPTY: string;
  };

  MENU: {
    USER: {
      APPLICATION: string;
      ANALYTIC: string;
      ADMIN: string;
    };
  };

  APPLICATION: {
    APPLICATION: string;
  };

  ANALYTIC: {
    CHAR: string;
    AREA: string;
    MOUNTH: string;
    YEAR: string;
    DAY: string;
  };

  TOOLMENU: {
    CREATEFLIGHT: string;
    UPDATEFLIGHT: string;
    UPDATEUSER: string;
    ANALYTIC: string;
  };

  ADMIN: {
    DEFAULTPAGE: string;
  };
};
