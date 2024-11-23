import * as DTOs from "@/entities/DTOs";

export type Filter = number | string | boolean | number[];
export type FilterKey = DefaultFilterKey;

export type Filters = {
  [key in FilterKey]: Filter;
};

export type ActiveFilter = {
  [key in FilterKey]: boolean;
};

export type FiterTitles = {
  [key in DefaultFilterKey]: string;
};

export type DefaultFilterKey = keyof DTOs.Flight.FlightDTO | "q";

export type PayloadSetFilter<T extends keyof Filters> = {
  key: T;
  value: Filters[T];
};
