export type Slots<T, Y> = {
  headerItem: (props: { item: Y }) => any;
  item: (props: { item: T }) => any;
  default: () => any;
};
