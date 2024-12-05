import * as Services from "@/entities/services";
import { initActionsComponents } from "./actionsComponents";
import { initStateComponents } from "./stateComponents";
import { initState } from "./state";
import { useFilterStore } from "../filter";
import * as Models from "@/entities/models";
import { Helper } from "@/shared/helpers";
import { Lang } from "@/app/lang";
import { useCartStore } from "../cart";

export const initActions = function (
  state: ReturnType<typeof initState>,
  stateComponents: ReturnType<typeof initStateComponents>
) {
  return {};
};
