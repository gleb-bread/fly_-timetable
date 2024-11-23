import { computed } from 'vue';
import { useFilterStore } from '@/app/stores/filter';
import * as Types from '@/shared/types';

export const initComputed = function () {
    const filterStore = useFilterStore();

    const getFilters = computed(() => {
        return filterStore.getFilters;
    });

    const getLabel = computed(() => (filterKey: Types.Filter.FilterKey) => {
        return filterStore.getNameFilter(filterKey);
    });

    return { getFilters, getLabel };
};
