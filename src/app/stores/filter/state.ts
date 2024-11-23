import * as Types from '@/shared/types';
import * as FilterTemplates from './templates';
import { ref } from 'vue';

export const initState = function () {
    const filters = ref<Types.Filter.Filters>({} as Types.Filter.Filters);
    const titles = ref<Types.Filter.FiterTitles>(
        FilterTemplates.getFilterTitles()
    );
    const activeFilter = ref<Types.Filter.ActiveFilter>(
        {} as Types.Filter.ActiveFilter
    );

    const booleanYesList = ref(FilterTemplates.getBooleanYes());
    const booleanNoList = ref(FilterTemplates.getBooleanNo());
    const booleanYesNoList = ref(FilterTemplates.getBooleanYesNo());

    return {
        filters,
        titles,
        activeFilter,
        booleanYesList,
        booleanNoList,
        booleanYesNoList,
    };
};
