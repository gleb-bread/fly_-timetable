import { computed } from "vue";
import { useFilterStore } from "@/app/stores/filter";
import * as Types from "@/shared/types";

export const initComputed = function () {
  const filterStore = useFilterStore();

  const getFilters = computed(() => {
    return filterStore.getFilters;
  });

  const getLabel = computed(() => (filterKey: Types.Filter.FilterKey) => {
    return filterStore.getNameFilter(filterKey);
  });

  const getModelTextValue = computed(
    () => (filterKey: Types.FilterElement.TextFilterKeys) => {
      return String(getFilters.value[filterKey] ?? "");
    }
  );

  const setModelTextValue = function (
    filterKey: Types.FilterElement.TextFilterKeys,
    value: string
  ) {
    if (!!value) {
      filterStore.setFilter({
        key: filterKey,
        value: value,
      });
    } else {
      filterStore.deleteFilter(filterKey);
    }
  };

  return { getFilters, getLabel, getModelTextValue, setModelTextValue };
};
