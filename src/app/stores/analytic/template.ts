import * as StoreTypes from "./types";

export const getAnalyticTypes = function (): StoreTypes.AnalyticTypes[] {
  return ["Area"];
};

export const getAnalyticTimes = function (): StoreTypes.AnalyticTimes[] {
  return ["Day", "Mounth", "Year"];
};
