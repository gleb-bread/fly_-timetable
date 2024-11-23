import { RoutersNames } from "@/app/router/routersNames.enum.d";
import { router as Router } from "@/app/router/router";

export const redirect = function (key: keyof typeof RoutersNames) {
  Router.push({ name: RoutersNames[key] });
};
