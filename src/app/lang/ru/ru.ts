import type { WORDS } from "../type";

export class LangRU {
  private _WORDS: WORDS;

  constructor() {
    this._WORDS = {
      LOGO: "TIMETABLE",
      REG: {
        LOGIN: "Логин",
        PASSWORD: "Пароль",
        TITLELOGIN: "Войти",
        TITLEREG: "Зарегистрироваться",
        EMIAL: "Email",
        PASSWORDAGAIN: "Повторите пароль",
        BTNLOGIN: "Войти",
        BTNREG: "Зарегистрироваться",
        TITLEOR: "Или",
        BTNGOOGLE: "Войти с помощью Google",
        TITLELINKREG: "Зарегистрироваться",
        TITLELINKRESETPASSWORD: "Восстановить пароль",
      },
      RULES: {
        MINLENTH: (v: number) => this.MINLENGTHSTR(v),
        MAXLENTH: (v: number) => this.MAXLENGTHSTR(v),
        EMAIL: "Поле должно содержать email",
        NUM: "Поле должно содержать только цифры",
        ONLYSTRING: "Поле должно содержать буквы",
        PASSWORDSNOTEQUAL: "Пароли не совпадают",
        REQUIRED: "Поле обязательно к заполнению",
      },

      FLIGHTS: {
        FROM: "Откуда",
        ARRIVAL: "Куда",
        DEPARTURE_FROM: "Вылет, откуда",
        DEPARTURE_TIME: "Вылет, во сколько",
        ARRIVAL_TO: "Прилет, куда",
        ARRIVAL_TIME: "Прилет, во сколько",
        FLIGHT_NAME: "Название рейса",
        PRICE: "Цена",
      },

      MESSAGE: {
        SUCCESS: "Успех",
        ERROR: "Ошибка",
      },

      ERRORS: {
        409: {
          LOGIN: "Данный логин уже занят",
          EMAIL: "Данный email уже зарегистрирован",
        },
        422: {
          EMAIL: "Некорректный Email",
          PASSWORD: "Некорректный пароль",
        },
        401: {
          RESULT: "Неверный email или пароль",
        },
        UNKNOWN: "Неизвестная ошибка",
      },

      ERRORS_MESSAGES: {
        UNKNOWN: "Неизвестная ошибка",
      },

      FILTERS: {
        ARRIVAL_TIME: "Время прибытия",
        DEPARTURE_FROM: "Откуда вылет",
        DEPARTURE_TIME: "Время вылета",
        DESTINATION: "Куда вылет",
        FLIGHT_NUMBER: "Номер рейса",
        FLIGHT_TYPE_ID: "Тип полета",
        SEARCH: "Поиск",
        FROM: "С",
        TILL: "До",
      },

      CART: {
        TITLE: {
          TYPE: "Тип",
          FROM: "Откуда",
          BUY: "Оплатить",
          TO: "Куда",
          DEPARTURE_TIME: "Время вылета",
          PRICE: "Цена",
          COUNT: "Кол-во",
          TOTAL: "Итого",
        },
      },

      COMMON: {
        YES: "Да",
        NO: "Нет",
        OK: "Ок",
        CANCEL: "Отмена",
        SAVE: "Сохранить",
        DELETE: "Удалить",
        CONFIRM: "Подтвердить",
        CLOSE: "Закрыть",
        LOADING: "Загрузка",
        ERROR: "Ошибка",
        APPLY: "Применить",
      },

      APPLICATION: {
        APPLICATION: "Заявка",
      },

      MENU: {
        USER: {
          APPLICATION: "Заказы",
          ANALYTIC: "Аналитика",
          ADMIN: "Админ панель",
        },
      },

      ANALYTIC: {
        CHAR: "Круг",
        AREA: "График",
        MOUNTH: "Месяц",
        YEAR: "Год",
        DAY: "День",
      },

      TOOLMENU: {
        CREATEFLIGHT: "Добавить",
        UPDATEFLIGHT: "Изменить",
        UPDATEUSER: "Права",
        ANALYTIC: "Аналитик",
      },

      ADMIN: {
        DEFAULTPAGE: "Выберите пункт слева",
      },
    };
  }

  public get WORDS() {
    return this._WORDS;
  }

  public MINLENGTHSTR(v: number) {
    if (v % 10 === 1 && v % 100 !== 11) {
      return `Минимальная длина: ${v} символ`;
    } else if (v % 10 >= 2 && v % 10 <= 4 && (v % 100 < 12 || v % 100 > 14)) {
      return `Минимальная длина: ${v} символа`;
    } else {
      return `Минимальная длина: ${v} символов`;
    }
  }

  public MAXLENGTHSTR(v: number): string {
    if (v % 10 === 1 && v % 100 !== 11) {
      return `Максимальная длина: ${v} символ`;
    } else if (v % 10 >= 2 && v % 10 <= 4 && (v % 100 < 12 || v % 100 > 14)) {
      return `Максимальная длина: ${v} символа`;
    } else {
      return `Максимальная длина: ${v} символов`;
    }
  }
}
