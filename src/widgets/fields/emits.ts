type Emit = {
  (e: "update:modelValue", v: string): void;
};

export type FieldEmits = Emit;

export type DateEmits = Emit;

export type SelectEmits<T = any, K extends keyof T = any> = {
  (
    e: "update:modelValue",
    v: T extends Record<string | number, any> ? T[K] : T
  ): void;
};
