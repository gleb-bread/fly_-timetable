import { Observers } from "@/shared/observers";
import { Helper } from "@/shared/helpers";
import { useSettingsStore } from "@/app/stores/settings";

export const ObserverVMainPadding = function () {
  Helper.ObserversAPI.HandlerSetObserverToElement(".v-main", PaddingObserver);
};

const PaddingObserver = function (element: Element) {
  Observers.ElementsAPI.PaddingObservers.setObserverByElement(
    element,
    HandlerPaddingObserver
  );

  HandlerPaddingObserver(<HTMLElement>element);
};

const HandlerPaddingObserver = function (element: HTMLElement) {
  const styles = getComputedStyle(element);
  const settingsStore = useSettingsStore();

  const paddingLeft = styles?.paddingLeft ?? "0px";
  const paddingRight = styles?.paddingRight ?? "0px";
  const paddingTop = styles?.paddingTop ?? "0px";
  const paddingBottom = styles?.paddingBottom ?? "0px";

  settingsStore.setPaddingMainHeight(`${paddingTop} - ${paddingBottom}`);
  settingsStore.setPaddingMainWidth(`${paddingLeft} - ${paddingRight}`);
};
