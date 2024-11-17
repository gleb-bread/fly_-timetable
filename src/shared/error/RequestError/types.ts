import type { WORDS } from "@/app/lang/type";
import type { Values } from "@/shared/types/objects/objects";

export type KeyErrorsTypes = "conflict";

export type ErrorsTypes = { [key: number]: KeyErrorsTypes };

export type AllErrorWordKeys = keyof WORDS["ERRORS"];

export type OnlyStatusErorrWordKeys = Exclude<AllErrorWordKeys, "UNKNOWN">;

export type AllErrorWords = WORDS["ERRORS"];

export type OnlyStatusErrorrWords = Omit<WORDS["ERRORS"], "UNKNOWN">;

export type OnlyStatusErrorWordsField = Values<OnlyStatusErrorrWords>;

export type OnlyStatusErrorWordsKeys = keyof Values<OnlyStatusErrorrWords>;
