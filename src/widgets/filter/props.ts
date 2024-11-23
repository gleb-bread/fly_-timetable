import * as Types from "@/shared/types";
import type {
  FilterTextItem,
  FilterDateItem,
  FieldElementProps,
} from "@/shared/types/filter/elements";

export type FilterContainerProps = {
  filters: Types.FilterElement.FiltersList;
};

export type TextFieldProps = FilterTextItem & FieldElementProps;

export type DateFieldProps = FilterDateItem & FieldElementProps;
