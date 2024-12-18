export const dateFormatSQL = function (
  value: Date | string | null | undefined
) {
  if (value) {
    const date = new Date(value);

    if (isNaN(date.getTime())) return null;

    let day =
      String(date.getDate()).length === 1
        ? "0" + String(date.getDate())
        : String(date.getDate());
    let mounth =
      String(date.getMonth() + 1).length === 1
        ? "0" + String(date.getMonth() + 1)
        : String(date.getMonth() + 1);
    let year = date.getFullYear();

    let hour =
      String(date.getHours()).length === 1
        ? "0" + String(date.getHours())
        : String(date.getHours());
    let min =
      String(date.getMinutes()).length === 1
        ? "0" + String(date.getMinutes())
        : String(date.getMinutes());
    let sec =
      String(date.getSeconds()).length === 1
        ? "0" + String(date.getSeconds())
        : String(date.getSeconds());

    return `${year}-${mounth}-${day} ${hour}:${min}:${sec}`;
  } else {
    return null;
  }
};

export const dateFormatSQLWithoutTime = function (
  value: Date | string | null | undefined
) {
  if (value) {
    const date = new Date(value);

    if (isNaN(date.getTime())) return null;

    let day =
      String(date.getDate()).length === 1
        ? "0" + String(date.getDate())
        : String(date.getDate());
    let mounth =
      String(date.getMonth() + 1).length === 1
        ? "0" + String(date.getMonth() + 1)
        : String(date.getMonth() + 1);
    let year = date.getFullYear();

    return `${year}-${mounth}-${day}`;
  } else {
    return null;
  }
};

export const getFirstDayMonthDateSQL = function () {
  const now = new Date();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);
  return dateFormatSQL(firstDay);
};

export const getLastDayMonthDateSQL = function () {
  const now = new Date();
  const lastDay = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59
  );
  return dateFormatSQL(lastDay);
};

export const dateFormat = function (value: Date | string | null | undefined) {
  if (typeof value === "string") {
    value = new Date(value);
  }

  if (value && !isNaN(value.getTime())) {
    let day =
      String(new Date(value).getDate()).length === 1
        ? "0" + String(new Date(value).getDate())
        : String(new Date(value).getDate());
    let mounth =
      String(new Date(value).getMonth() + 1).length === 1
        ? "0" + String(new Date(value).getMonth() + 1)
        : String(new Date(value).getMonth() + 1);
    let year = new Date(value).getFullYear();
    return `${day}.${mounth}.${year}`;
  } else {
    return null;
  }
};

export const dateFormatWithTime = function (
  value: Date | string | null | undefined
) {
  if (typeof value === "string") {
    value = new Date(value);
  }

  if (value && !isNaN(value.getTime())) {
    let day =
      String(new Date(value).getDate()).length === 1
        ? "0" + String(new Date(value).getDate())
        : String(new Date(value).getDate());
    let mounth =
      String(new Date(value).getMonth() + 1).length === 1
        ? "0" + String(new Date(value).getMonth() + 1)
        : String(new Date(value).getMonth() + 1);
    let year = new Date(value).getFullYear();

    let hour =
      String(new Date(value).getHours()).length === 1
        ? "0" + String(new Date(value).getHours())
        : String(new Date(value).getHours());
    let min =
      String(new Date(value).getMinutes()).length === 1
        ? "0" + String(new Date(value).getMinutes())
        : String(new Date(value).getMinutes());

    return `${day}.${mounth}.${year} ${hour}:${min}`;
  } else {
    return "-";
  }
};

export const getTimeDate = function (value: string | Date | null | undefined) {
  if (value instanceof Date) {
    if (checkIsValidDate(value)) {
      return value.getTime();
    } else {
      return 0;
    }
  } else {
    if (value) {
      let date = new Date(value);

      if (checkIsValidDate(date)) {
        return date.getTime();
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }
};

function checkIsValidDate(date: Date) {
  return !isNaN(date.getTime());
}

export const getTimeFromPublish = function (
  date: Date | string | null | undefined
) {
  let publishDate: Date;
  let dateNow = new Date();

  if (typeof date === "object" && date?.getDate != null) {
    publishDate = date;
  } else if (typeof date === "string") {
    publishDate = new Date(date);
  } else {
    publishDate = new Date();
  }

  if (isNaN(publishDate.getTime())) publishDate = new Date();

  let differenceAtMlSeconds = dateNow.getTime() - publishDate.getTime();

  return formatDuration(differenceAtMlSeconds);
};

function formatDuration(milliseconds: number): string {
  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;
  const msInYear = msInDay * 365;

  if (milliseconds < msInMinute) {
    const seconds = Math.floor(milliseconds / msInSecond);
    return `${seconds} сек. назад`;
  } else if (milliseconds < msInHour) {
    const minutes = Math.floor(milliseconds / msInMinute);
    return `${minutes} мин. назад`;
  } else if (milliseconds < msInDay) {
    const hours = Math.floor(milliseconds / msInHour);
    return `${hours} час${getEnding(hours)} назад`;
  } else if (milliseconds < msInYear) {
    const days = Math.floor(milliseconds / msInDay);
    return `${days} дн. назад`;
  } else {
    const years = Math.floor(milliseconds / msInYear);
    return `${years} год${getEnding(years)} назад`;
  }
}

function getEnding(number: number): string {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;

  if (lastTwoDigits > 10 && lastTwoDigits < 20) {
    return "";
  }

  switch (lastDigit) {
    case 1:
      return "";
    case 2:
    case 3:
    case 4:
      return "а";
    default:
      return "";
  }
}

export const convertToSQLDate = function (dateString: string): string | null {
  // Регулярное выражение для проверки формата 'DD.MM.YYYY HH:MM'
  const dateTimeRegex = /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})$/;
  const match = dateString.match(dateTimeRegex);

  if (!match) {
    return null;
  }

  // Извлечение компонентов даты и времени из строки
  const [, dayStr, monthStr, yearStr, hourStr, minuteStr] = match;
  const day = parseInt(dayStr, 10);
  const month = parseInt(monthStr, 10) - 1; // Месяцы в объекте Date начинаются с 0
  const year = parseInt(yearStr, 10);
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  // Проверка корректности значений даты и времени
  if (hour < 0 || hour > 23) {
    return null;
  }
  if (minute < 0 || minute > 59) {
    return null;
  }

  // Проверка корректности даты с помощью Date
  const date = new Date(year, month, day, hour, minute);
  if (isNaN(date.getTime())) {
    return null;
  }

  // Проверка, что введенная дата соответствует разобранной дате
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month ||
    date.getDate() !== day
  ) {
    return null;
  }

  // Создание даты в формате SQL
  const sqlDateString = `${year}-${(month + 1)
    .toString()
    .padStart(2, "0")}-${dayStr.padStart(2, "0")} ${hourStr.padStart(
    2,
    "0"
  )}:${minuteStr.padStart(2, "0")}:00`;
  return sqlDateString;
};

export const getDateFromView = function (
  date: string | undefined | null | Date
): Date {
  if (date === null || date === undefined) {
    return new Date();
  } else if (typeof date === "string") {
    const parts = date.split(" ");
    const datePart = parts[0];
    const timePart = parts[1] || "00:00";
    const [day, month, year] = datePart.split(".").map(Number);
    const [hours, minutes] = timePart.split(":").map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  } else {
    return date;
  }
};

export function formatDateTime(date: string | undefined | null): string {
  if (!date) return "Invalid date";

  const inputDate = new Date(date);
  if (isNaN(inputDate.getTime())) return "Invalid date";

  const now = new Date();
  const diffMs = Math.abs(now.getTime() - inputDate.getTime());
  const diffHours = diffMs / (1000 * 60 * 60); // Разница в часах

  if (diffHours < 24) {
    return inputDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // Формат 00:00
  }

  const day = String(inputDate.getDate()).padStart(2, "0");
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const year = inputDate.getFullYear();

  return `${day}.${month}.${year} 00:00`;
}

export const getDate = (v: string | number | null | undefined): Date | null => {
  if (v === null || v === undefined) {
    return null;
  }

  const date = new Date(v);

  if (isNaN(date.getTime())) {
    return null;
  }

  return date;
};
