import { Enums } from "@/shared/enum";

const ActionEnum = Enums.Actions;

export type ActionKeys = Lowercase<keyof typeof ActionEnum>;
