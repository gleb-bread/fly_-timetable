import * as Types from "@/shared/types";
import type { FilterTextItem } from "@/shared/types/filter/elements";
import type { FilterDateItem } from "@/shared/types/filter/elements";

export type FilterContainerProps = {
  filters: Types.FilterElement.FiltersList;
};

export type TextFieldProps = FilterTextItem;

export type DateFieldProps = FilterDateItem;
