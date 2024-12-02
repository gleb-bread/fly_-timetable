import { Helper } from "@/shared/helpers";
import * as Models from "@/entities/models";
import { ref } from "vue";
import * as Types from "@/shared/types";

export const initState = function () {
  const permissions = ref(
    {} as Types.Objects.DefinitedStringObject<
      Types.Entity.EntityKeys,
      Models.Permission
    >
  );

  return { permissions };
};
