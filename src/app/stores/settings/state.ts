import { ref } from "vue";
import * as SettingStoreTemplates from "./template";
import * as SettingsStoreTypes from "./type";
import { ObserverRequest } from "@/shared/helpers/store";

export const initState = function () {
  const mainHeight = ref<string>("100vh");
  const mainWidth = ref<string>("100vw");

  const observerRequest = ref<
    ObserverRequest<
      SettingsStoreTypes.SettingLoadings,
      SettingsStoreTypes.SettingErrors
    >
  >(new ObserverRequest());

  const drawers = ref(SettingStoreTemplates.Drawers());

  const heightBlocks = ref<SettingsStoreTypes.SizeBlocks>([]);
  const widthBlocks = ref<SettingsStoreTypes.SizeBlocks>([]);

  const heightPadding = ref<string>("0px");

  const widthPadding = ref<string>("0px");

  return {
    mainHeight,
    mainWidth,
    drawers,
    observerRequest,
    heightBlocks,
    heightPadding,
    widthPadding,
    widthBlocks,
  };
};
