export type Component<T> = {
  [key in keyof T]?: number;
};
