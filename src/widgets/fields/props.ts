interface Props {
  rules?: Function[];
  label: string;
}

export interface PropsPassword extends Props {}

export interface PropsField extends Props {
  prependIcon?: string;
  modelValue: string | number | undefined | null;
}

export interface PropsDate extends Props {
  modelValue: Date | null;
  errorMessages?: string[];
}

export interface SelectProps<
  T = any,
  K extends keyof T = any,
  J extends keyof T = any,
> extends Props {
  modelValue: T extends Record<string | number, any> ? T[K] : T;
  itemValue?: K extends string | number ? K : never;
  itemTitle?: J extends string | number ? J : never;
  items: T[];
}
