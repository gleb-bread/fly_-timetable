import { initState } from "./state";
import { computed, getCurrentInstance } from "vue";
import { Helper } from "@/shared/helpers";
import * as SettingStoreTypes from "./type";
import vuetify from "@/plugins/vuetify/vuetify";

export const initGetters = function (state: ReturnType<typeof initState>) {
  const getMaxHeight = computed(() => state.mainHeight.value);

  const getMaxWidth = computed(() => {
    return state.mainWidth.value;
  });

  const isMobile = computed(() => {
    return vuetify.display.mobile.value;
  });

  const isXs = computed(() => vuetify.display.xs.value);

  const isSm = computed(() => vuetify.display.sm.value);

  const isSmAndUp = computed(() => vuetify.display.smAndUp.value);

  const isSmAndDown = computed(() => vuetify.display.smAndDown.value);

  const isMd = computed(() => vuetify.display.md.value);

  const isMdAndUp = computed(() => vuetify.display.mdAndUp.value);

  const isMdAndDown = computed(() => vuetify.display.mdAndDown.value);

  const isLg = computed(() => vuetify.display.lg.value);

  const isLgAndUp = computed(() => vuetify.display.lgAndUp.value);

  const isLgAndDown = computed(() => vuetify.display.lgAndDown.value);

  const isXl = computed(() => vuetify.display.xl.value);

  const isXlAndUp = computed(() => vuetify.display.xlAndUp.value);

  const isXlAndDown = computed(() => vuetify.display.xlAndDown.value);

  const isXxl = computed(() => vuetify.display.xxl.value);

  const getDrawerState = computed(
    () => (drawer: SettingStoreTypes.DrawerKeys) => state.drawers.value[drawer]
  );

  const getLoading = computed(() => {
    return state.observerRequest.value.getLoadingByKey("DefaultLoading");
  });

  const getErrors = computed(() => {
    return state.observerRequest.value.getErrorByKey("DefaulErrors");
  });

  return {
    getMaxHeight,
    getMaxWidth,
    isMobile,
    getDrawerState,
    getLoading,
    getErrors,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isXxl,
    isSmAndUp,
    isSmAndDown,
    isMdAndUp,
    isMdAndDown,
    isLgAndUp,
    isLgAndDown,
    isXlAndUp,
    isXlAndDown,
  };
};
