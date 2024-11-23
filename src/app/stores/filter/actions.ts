import { initState } from './state';
import * as Types from '@/shared/types';

export const initActions = function (state: ReturnType<typeof initState>) {
    const restoreFilters = function () {
        Object.values(state.filters.value).forEach((key) => {
            const filterKey = key as Types.Filter.FilterKey;
            deleteGETParamFilterFromURL(filterKey);
        });
        state.filters.value = {} as Types.Filter.Filters;
    };

    const deleteFilter = function (filter: Types.Filter.FilterKey) {
        delete state.filters.value[filter];
        delete state.activeFilter.value[filter];
        deleteGETParamFilterFromURL(filter);
    };

    const setFilter = function <T extends keyof Types.Filter.Filters>(
        payload: Types.Filter.PayloadSetFilter<T>
    ) {
        state.filters.value[payload.key] = payload.value;
        setFiltersInURL();
    };

    const setFiltersInURL = function () {
        let currectChangeURL =
            window.location.pathname + getGETParamsWithFilters();

        history.pushState(null, '', currectChangeURL);
    };

    const setFiltersFromURL = function () {
        let urlParams = new URLSearchParams(window.location.search);

        for (const param of urlParams) {
            let currectParam = param[0] as Types.Filter.FilterKey;

            let value: string | boolean | number | undefined = decodeURI(
                param[1]
            );

            if (value || typeof value === 'boolean') {
                state.filters.value[currectParam] = value;
                state.activeFilter.value[currectParam] = true;
            }
        }
    };

    const deleteGETParamFilterFromURL = function (
        filter: Types.Filter.FilterKey
    ) {
        let urlParams = new URLSearchParams(window.location.search);

        urlParams.delete(filter);

        let currectChangeURL =
            window.location.pathname + '?' + urlParams.toString();

        history.pushState(null, '', currectChangeURL);
    };

    const getGETParamsWithFilters = function () {
        let string = '?';
        let urlParams = new URLSearchParams(window.location.search);

        Object.keys(state.filters.value).forEach((key, index) => {
            let currectKey = key as Types.Filter.FilterKey;
            urlParams.delete(currectKey);
            string +=
                (index === 0 ? '' : '&') +
                currectKey +
                '=' +
                encodeURI(String(state.filters.value[currectKey]));
        });

        string += urlParams.toString();

        return string;
    };

    const restoreActiveFilter = function () {
        state.activeFilter.value = {} as Types.Filter.ActiveFilter;
    };

    const activeFilters = function () {
        restoreActiveFilter();

        Object.keys(state.filters.value).forEach((key) => {
            const filter = key as Types.Filter.FilterKey;
            state.activeFilter.value[filter] = true;
        });
    };

    return {
        restoreFilters,
        deleteFilter,
        setFilter,
        setFiltersFromURL,
        restoreActiveFilter,
        activeFilters,
    };
};
