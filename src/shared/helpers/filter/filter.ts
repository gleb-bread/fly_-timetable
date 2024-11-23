import { useFilterStore } from "@/app/stores/filter";
import * as Types from "@/shared/types";
import { Helper } from "..";

export const setUpdateEntityByFilters = function (update: () => void) {
  const filterStore = useFilterStore();

  let filters = {} as Types.Filter.Filters;

  const load = function () {
    let newFilters = {} as Types.Filter.Filters;

    Object.keys(filterStore.getActiveFilters).forEach((key) => {
      const filterKey = key as Types.Filter.FilterKey;
      newFilters[filterKey] = filterStore.getFilters[filterKey];
    });

    let result = Helper.CheckAPI.Object.compareObjects(newFilters, filters);

    if (result) {
      filters = { ...newFilters };
      update();
    }
  };

  filterStore.$subscribe(load);
};
