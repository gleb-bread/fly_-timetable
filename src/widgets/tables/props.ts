import { Colors } from "./colors";

export type Props<T, Y> = {
  items: T[];
  headerItems?: Y[];
  scroll?: boolean;
  bgColor?: keyof typeof Colors;
};
