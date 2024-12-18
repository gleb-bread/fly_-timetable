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
