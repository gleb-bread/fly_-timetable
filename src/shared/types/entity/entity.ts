import { Enums } from "@/shared/enum";

const EntityEnum = Enums.Entities;

export type EntityKeys = Lowercase<keyof typeof EntityEnum>;
