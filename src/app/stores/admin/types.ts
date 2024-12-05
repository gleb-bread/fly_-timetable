export type ViewTypes =
  | "createFlight"
  | "updateUser"
  | "updateFlight"
  | "getAnalytic"
  | null;

export type ToolItem = {
  value: ViewTypes;
  condition: () => boolean;
  icon: string;
  title: string;
};
