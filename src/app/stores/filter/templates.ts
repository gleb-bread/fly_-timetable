import * as Types from "@/shared/types";
import { Lang } from "@/app/lang";

export const getFilterTitles = () => {
  const WORDS = new Lang().WORDS;

  return {
    arrival_time: WORDS.FILTERS.ARRIVAL_TIME,
    departure_from: WORDS.FILTERS.DEPARTURE_FROM,
    departure_time: WORDS.FILTERS.DEPARTURE_TIME,
    destination: WORDS.FILTERS.DESTINATION,
    flight_number: WORDS.FILTERS.FLIGHT_NUMBER,
    flight_type_id: WORDS.FILTERS.FLIGHT_TYPE_ID,
    q: WORDS.FILTERS.SEARCH,
  } as Types.Filter.FiterTitles;
};

export const getBooleanYes = () => {
  const WORDS = new Lang().WORDS;
  return [{ title: WORDS.COMMON.YES, value: true }];
};

export const getBooleanNo = () => {
  const WORDS = new Lang().WORDS;
  return [{ title: WORDS.COMMON.NO, value: false }];
};

export const getBooleanYesNo = () => {
  const WORDS = new Lang().WORDS;

  return [
    { title: WORDS.COMMON.YES, value: true },
    { title: WORDS.COMMON.NO, value: false },
  ];
};
