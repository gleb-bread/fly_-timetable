export type Component<T> = {
  [key in keyof T]?: string;
};

export type UnknownError = {
  unknown: string;
};

export type ErrorMessages<T> = T | UnknownError;

export type OnlyTypeErrorMessages<T> = Exclude<ErrorMessages<T>, UnknownError>;
