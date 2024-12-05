import { Helper } from "@/shared/helpers";
import * as Models from "@/entities/models";
import { ref } from "vue";
import * as Types from "@/shared/types";
import * as StoreTypes from "./types";
import * as StoreTemplates from "./template";

export const initStateComponents = function () {
  const view = ref<StoreTypes.ViewTypes>(null);
  const toolMenu = ref(StoreTemplates.ToolsMenu());

  return { view, toolMenu };
};
