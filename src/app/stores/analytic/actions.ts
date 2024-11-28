import * as Services from "@/entities/services";
import { initActionsComponents } from "./actionsComponents";
import { initStateComponents } from "./stateComponents";
import { initState } from "./state";
import { useFilterStore } from "../filter";
import * as Models from "@/entities/models";
import { Helper } from "@/shared/helpers";
import { Lang } from "@/app/lang";
import * as StoreTypes from "./types";

export const initActions = function (
  state: ReturnType<typeof initState>,
  stateComponents: ReturnType<typeof initStateComponents>
) {
  const __init__ = async function () {
    await getMonthAnalytic();
  };

  const getMonthAnalytic = async function () {
    const service = new Services.Analytic();
    const response = await service.getByMonth();

    if (response.result) {
      state.analytics.value = response.data;
    }
  };

  const getDayAnalytic = async function () {
    const service = new Services.Analytic();
    const response = await service.getByDay();

    if (response.result) {
      state.analytics.value = response.data;
    }
  };

  const getYearAnalytic = async function () {
    const service = new Services.Analytic();
    const response = await service.getByYear();

    if (response.result) {
      state.analytics.value = response.data;
    }
  };

  return { getMonthAnalytic, getDayAnalytic, getYearAnalytic, __init__ };
};
