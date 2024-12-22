import * as Types from "@/shared/types";

export const createNewRole = function (): Types.Roles.Entity.CreateData {
  return {
    role_id: 0,
    user_id: 0,
  };
};
