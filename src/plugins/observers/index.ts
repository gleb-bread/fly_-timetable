import type { App } from "vue";
import { ComponentsObserver } from "./components";

export const MainObserver = {
  install(app: App) {
    ComponentsObserver.MainObserver.ObserverVMainPadding();
  },
};
