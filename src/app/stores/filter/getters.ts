import { computed } from 'vue';
import { initState } from './state';
import * as Types from '@/shared/types';

export const initGetters = function (state: ReturnType<typeof initState>) {
    const getFilters = computed(() => state.filters.value);

    const getNameFilter = computed(() => (filter: Types.Filter.FilterKey) => {
        let result = 0;
        let filterKey = filter as Types.Filter.DefaultFilterKey;

        if (filterKey.indexOf('from_') != -1) {
            result = -1;
            filterKey = filterKey.replace(
                'from_',
                ''
            ) as Types.Filter.DefaultFilterKey;
        }
        if (filterKey.indexOf('till_') != -1) {
            result = 1;
            filterKey = filterKey.replace(
                'till_',
                ''
            ) as Types.Filter.DefaultFilterKey;
        }

        let title = state.titles.value[filterKey];

        if (result < 0) {
            return title + ', С';
        }

        if (result > 0) {
            return title + ', До';
        }

        return title ?? filterKey;
    });

    const getHaveActiveFilters = computed(() => {
        return !!Object.values(state.activeFilter).length;
    });

    const getActiveFilters = computed(() => state.activeFilter.value);

    const getBooleanYesList = computed(() => {
        return state.booleanYesList.value;
    });

    const getBooleanNoList = computed(() => {
        return state.booleanNoList.value;
    });

    const getBooleanYesNoList = computed(() => {
        return state.booleanYesNoList.value;
    });

    const hasActiveFilters = computed(() =>
        Boolean(Object.keys(state.activeFilter.value).length)
    );

    return {
        getFilters,
        getNameFilter,
        getHaveActiveFilters,
        getActiveFilters,
        getBooleanYesList,
        getBooleanNoList,
        getBooleanYesNoList,
        hasActiveFilters,
    };
};
