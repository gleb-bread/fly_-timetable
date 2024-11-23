export const isNullOrUndefined = function (value: any) {
  if (typeof value === "undefined" || value === null) return true;
  return false;
};

export const isNotNullOrUndefined = function <T>(
  value: T | any | undefined
): value is T {
  if (typeof value === "undefined" || value === null) return false;
  return true;
};
